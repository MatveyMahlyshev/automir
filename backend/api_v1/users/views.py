from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from .schemas import UserCreate
from . import crud
from core.models.db_helper import db_helper

router = APIRouter(tags=["Users"])


@router.post("/register/")
async def create_user(
    user_in: UserCreate,
    session: AsyncSession = Depends(db_helper.scoped_session_dependency),
):
    return await crud.create_user(user_in=user_in, session=session)
