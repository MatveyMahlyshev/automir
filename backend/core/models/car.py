from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer, Text

from .base import Base


class Car(Base):
    title: Mapped[str] = mapped_column(String(50))
    engine: Mapped[str] = mapped_column(String(50))
    fuel_type: Mapped[str] = mapped_column(String(50))
    year: Mapped[int] = mapped_column(Integer)
    transmission: Mapped[str] = mapped_column(String(50))
    drivetrain: Mapped[str] = mapped_column(String(50))
    body_type: Mapped[str] = mapped_column(String(50))
    color: Mapped[str] = mapped_column(String(50))
    mileage: Mapped[int] = mapped_column(Integer)
    owners: Mapped[int] = mapped_column(Integer)
    steering_wheel: Mapped[str] = mapped_column(String(50))
    generation: Mapped[int] = mapped_column(Integer)
    trim_level: Mapped[str] = mapped_column(String(50))
    description: Mapped[str] = mapped_column(Text)
