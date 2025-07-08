from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Text, Integer

from . import Base


class Trailer(Base):
    title: Mapped[str] = mapped_column(String(50))
    axes_count: Mapped[int] = mapped_column(Integer)
    load_capacity: Mapped[str] = mapped_column(String(100))
    trailer_length: Mapped[str] = mapped_column(String(100))
    body_volume: Mapped[str] = mapped_column(String(100))
    trailer_weight: Mapped[str] = mapped_column(String(100))
    description: Mapped[str] = mapped_column(Text)
