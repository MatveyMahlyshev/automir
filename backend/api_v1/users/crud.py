from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status

from .schemas import UserCreate
from core.models import User
from auth.utils import hash_password


async def create_user(user_in: UserCreate, session: AsyncSession):
    try:
        new_user = User(
            name=user_in.name,
            surname=user_in.surname,
            patronymic=user_in.patronymic,
            email=user_in.email,
            phone_number=user_in.phone_number,
            password_hash=hash_password(user_in.password),
            is_superuser=False,
        )

        session.add(new_user)

        await session.commit()

        return new_user
    except IntegrityError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email or phone already exists.",
        )
    except Exception as e:
        await session.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
