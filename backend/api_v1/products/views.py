from fastapi import APIRouter, Depends, UploadFile, File, status
from sqlalchemy.ext.asyncio import AsyncSession


from .schemas import (
    ProductCreateCar,
    ProductGetCars,
    ProductCreateTrailer,
    ProductGetTrailers,
)
from .dependencies import get_product_create_car, get_product_create_trailer
from . import crud

from core.models.db_helper import db_helper


router = APIRouter(tags=["Products"])


@router.post("/create/car/", status_code=status.HTTP_201_CREATED)
async def create_car(
    product: ProductCreateCar = Depends(get_product_create_car),
    images: list[UploadFile] = File(...),
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.create_product(
        product_in=product, images=images, session=session, type=crud.TYPE.CAR
    )


@router.post("/create/trailer/", status_code=status.HTTP_201_CREATED)
async def create_trailer(
    product: ProductCreateTrailer = Depends(get_product_create_trailer),
    images: list[UploadFile] = File(...),
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.create_product(
        product_in=product, images=images, session=session, type=crud.TYPE.TRAILER
    )


@router.get("/get_cars/", response_model=list[ProductGetCars])
async def get_cars(
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.get_products(session=session, type=crud.TYPE.CAR)


@router.get("/get_trailers/", response_model=list[ProductGetTrailers])
async def get_trailers(
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.get_products(session=session, type=crud.TYPE.TRAILER)
