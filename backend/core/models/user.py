from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Boolean, LargeBinary

from . import Base


class User(Base):
    email: Mapped[str] = mapped_column(String(50), unique=True)
    password_hash: Mapped[str] = mapped_column(String(60))
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)
    name: Mapped[str] = mapped_column(String(50))
    surname: Mapped[str] = mapped_column(String(50))
    patronymic: Mapped[str] = mapped_column(String(50))
    phone_number: Mapped[str] = mapped_column(String(25))

    reservations = relationship(
        "Reservation", back_populates="user", cascade="all, delete-orphan"
    )
