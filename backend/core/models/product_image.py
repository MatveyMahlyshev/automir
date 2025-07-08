from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, LargeBinary

from .base import Base


class Product_image(Base):
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    image: Mapped[bytes] = mapped_column(LargeBinary)

    product = relationship("Product", back_populates="images")
