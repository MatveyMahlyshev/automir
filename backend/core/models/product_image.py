from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, String

from .base import Base


class ProductImage(Base):
    __tablename__ = "product_images"
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    image: Mapped[str] = mapped_column(String(255))

    product = relationship("Product", back_populates="images")
