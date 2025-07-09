from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Boolean, LargeBinary

from . import Base


class User(Base):
    email: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(60), nullable=False)
    is_superuser: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    avatar: Mapped[bytes] = mapped_column(LargeBinary)
    name: Mapped[str] = mapped_column(String(50), nullable=False)
    surname: Mapped[str] = mapped_column(String(50), nullable=False)
    patronymic: Mapped[str] = mapped_column(String(50), nullable=False)
    phone_number: Mapped[str] = mapped_column(String(25), nullable=False)

    reservations = relationship(
        "Reservation", back_populates="user", cascade="all, delete-orphan"
    )
