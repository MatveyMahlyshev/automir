from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Text, Integer

from . import Base


class Trailer(Base):
    axes_count: Mapped[int] = mapped_column(Integer, nullable=False)
    load_capacity: Mapped[str] = mapped_column(String(100), nullable=False)
    trailer_length: Mapped[str] = mapped_column(String(100), nullable=False)
    body_volume: Mapped[str] = mapped_column(String(100), nullable=False)
    trailer_weight: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(Text)
