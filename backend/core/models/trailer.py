from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Text, Integer

from . import Base


class Trailer(Base):
    title: Mapped[str] = mapped_column(String(50))
    axes_count: Mapped[str] = mapped_column(String(50), nullable=True)
    load_capacity: Mapped[str] = mapped_column(String(50), nullable=True)
    trailer_length: Mapped[str] = mapped_column(String(50))
    trailer_width: Mapped[str] = mapped_column(String(50))
    trailer_height: Mapped[str] = mapped_column(String(50))
    trailer_weight: Mapped[str] = mapped_column(String(50))
    body_volume: Mapped[str] = mapped_column(String(50), nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=True)

    product = relationship(
        "Product", back_populates="trailer", uselist=False, cascade="all, delete-orphan"
    )
