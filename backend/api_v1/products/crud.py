from fastapi import UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from fastapi.exceptions import HTTPException, ValidationException

from .schemas import ProductCreateCar
from core.models import Car, Product, ProductImage
from services.s3 import upload_file_to_s3, delete_file_from_s3


async def create_auto(
    product: ProductCreateCar, images: list[UploadFile], session: AsyncSession
):
    uploaded_images_keys = []
    try:
        car = Car(
            title=product.title,
            engine=product.engine,
            fuel_type=product.fuel_type,
            year=product.year,
            transmission=product.transmission,
            drivetrain=product.drivetrain,
            body_type=product.body_type,
            color=product.color,
            mileage=product.mileage,
            owners=product.owners,
            steering_wheel=product.steering_wheel,
            generation=product.generation,
            trim_level=product.trim_level,
            description=product.description,
        )
        session.add(car)
        await session.flush()

        car_product = Product(price=product.price, type="car", car_id=car.id)
        session.add(car_product)
        await session.flush()

        urls = []

        for img in images:

            try:
                content = await img.read()

                s3_image = await upload_file_to_s3(content, car_product.id, img.content_type)
                uploaded_images_keys.append(s3_image["unique_name"])
                urls.append(s3_image["url"])

                db_image = ProductImage(product_id=car_product.id, image=s3_image["url"])
                session.add(db_image)
            finally:
                await img.close()

        await session.commit()
        return {
            "car": car,
            "product": car_product,
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