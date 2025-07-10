from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession

from .schemas import ProductCreateCar
from .dependencies import get_product_create_car
from . import crud

from core.models.db_helper import db_helper

router = APIRouter(tags=["Products"])


@router.post("/create/car/")
async def create_auto(
    product: ProductCreateCar = Depends(get_product_create_car),
    images: list[UploadFile] = File(...),
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.create_auto(product=product, images=images, session=session)
