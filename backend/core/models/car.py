from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, Text

from .base import Base


class Car(Base):
    title: Mapped[str] = mapped_column(String(50))
    engine: Mapped[str] = mapped_column(String(50), nullable=True)
    fuel_type: Mapped[str] = mapped_column(String(50), nullable=True)
    year: Mapped[int] = mapped_column(Integer)
    transmission: Mapped[str] = mapped_column(String(50), nullable=True)
    body_type: Mapped[str] = mapped_column(String(50), nullable=True)
    color: Mapped[str] = mapped_column(String(50), nullable=True)
    mileage: Mapped[int] = mapped_column(Integer)
    owners: Mapped[int] = mapped_column(Integer)
    steering_wheel: Mapped[str] = mapped_column(String(50), nullable=True)
    generation: Mapped[str] = mapped_column(String(50), nullable=True)
    trim_level: Mapped[str] = mapped_column(String(50), nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)

    product = relationship(
        "Product", back_populates="car", uselist=False, cascade="all, delete-orphan"
    )
