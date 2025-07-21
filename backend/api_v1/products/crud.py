from fastapi import UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from fastapi.exceptions import HTTPException
from sqlalchemy import select, desc, Result
from sqlalchemy.orm import joinedload

from .schemas import ProductCreateCar, ProductCreateTrailer
from core.models import Car, Product, ProductImage, Trailer
from services.s3 import upload_file_to_s3, delete_file_from_s3


class TYPE:
    CAR = "car"
    TRAILER = "trailer"


async def create_product(
    product_in: ProductCreateCar | ProductCreateTrailer,
    images: list[UploadFile],
    session: AsyncSession,
    type: str,
):
    uploaded_images_keys = []
    try:
        if type == TYPE.CAR:
            product_object = Car(
                title=product_in.title,
                engine=product_in.engine,
                fuel_type=product_in.fuel_type,
                year=product_in.year,
                transmission=product_in.transmission,
                drivetrain=product_in.drivetrain,
                body_type=product_in.body_type,
                color=product_in.color,
                mileage=product_in.mileage,
                owners=product_in.owners,
                steering_wheel=product_in.steering_wheel,
                generation=product_in.generation,
                trim_level=product_in.trim_level,
                description=product_in.description,
            )
        else:
            product_object = Trailer(
                title=product_in.title,
                axes_count=product_in.axes_count,
                load_capacity=product_in.load_capacity,
                trailer_length=product_in.trailer_length,
                trailer_width=product_in.trailer_width,
                trailer_height=product_in.trailer_height,
                trailer_weight=product_in.trailer_weight,
                body_volume=product_in.body_volume,
                description=product_in.description,
            )

        session.add(product_object)
        await session.flush()

        if type == TYPE.CAR:
            product = Product(
                price=product_in.price, type=type, car_id=product_object.id
            )
        else:
            product = Product(
                price=product_in.price, type=type, trailer_id=product_object.id
            )

        session.add(product)
        await session.flush()

        urls = []

        for img in images:
            try:
                content = await img.read()

                s3_image = await upload_file_to_s3(
                    content, product.id, img.content_type
                )
                uploaded_images_keys.append(s3_image["unique_name"])
                urls.append(s3_image["url"])

                db_image = ProductImage(product_id=product.id, image=s3_image["url"])
                session.add(db_image)
            finally:
                await img.close()

        await session.commit()
        return {
            "car" if type == TYPE.CAR else "trailer": product_object,
            "product": product,
            "images": urls,
        }
    except Exception as e:
        await session.rollback()
        for key in uploaded_images_keys:
            await delete_file_from_s3(key)

        if isinstance(e, IntegrityError):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
            )


async def get_products(session: AsyncSession, type: str):
    product_object = Car if type == TYPE.CAR else Trailer
    stmt = (
        select(product_object)
        .options(joinedload(product_object.product).selectinload(Product.images))
        .order_by(desc(product_object.id))
    )
    result: Result = await session.execute(statement=stmt)
    products = result.scalars().all()
    return products


async def get_product_by_id(type: str, id: int, session: AsyncSession):
    if type == TYPE.CAR:
        product_object = Car
    else:
        product_object = Trailer
    stmt = (
        select(product_object)
        .options(joinedload(product_object.product).selectinload(Product.images))
        .where(product_object.id == id)
    )

    result: Result = await session.execute(statement=stmt)
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product of type:{type} with id:{id} not found",
        )
    return product
