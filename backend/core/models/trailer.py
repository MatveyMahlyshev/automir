from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Text

from . import Base


class Trailer(Base):
    trailer_length: Mapped[str] = mapped_column(String(100), nullable=False)
    trailer_width: Mapped[str] = mapped_column(String(100), nullable=False)
    trailer_height: Mapped[str] = mapped_column(String(100), nullable=False)
    trailer_weight: Mapped[str] = mapped_column(String(100), nullable=False)
    spring_type: Mapped[str] = mapped_column(String(25))
    description: Mapped[str] = mapped_column(Text)
