from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Float, ForeignKey, String

from . import Base


class Product(Base):
    price: Mapped[float] = mapped_column(Float)
    type: Mapped[str] = mapped_column(String(50), nullable=False)

    car_id: Mapped[int] = mapped_column(
        ForeignKey("cars.id"), unique=True, nullable=True
    )
    trailer_id: Mapped[int] = mapped_column(
        ForeignKey("trailers.id"), unique=True, nullable=True
    )

    car = relationship("Car", back_populates="product", uselist=False)
    trailer = relationship("Trailer", back_populates="product", uselist=False)
    images = relationship(
        "Product_image", back_populates="product", cascade="all, delete-orphan"
    )
