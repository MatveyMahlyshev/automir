from pydantic import BaseModel, Field, ConfigDict
from typing import Optional
from datetime import datetime

class ProductImage(BaseModel):
    image: str
    model_config = ConfigDict(from_attributes=True)

class Product(BaseModel):
    price: int
    images: list[ProductImage] = []  # Важно: список изображений
    model_config = ConfigDict(from_attributes=True)

class ProductCarBase(BaseModel):
    title: str = Field(min_length=5)
    engine: Optional[str] = None
    fuel_type: Optional[str] = None
    year: int = Field(gt=1900, le=datetime.now().year)
    transmission: Optional[str] = None
    drivetrain: Optional[str] = None
    body_type: Optional[str] = None
    color: Optional[str] = None
    mileage: int = Field(ge=0)
    owners: int = Field(ge=0)
    steering_wheel: Optional[str] = None
    generation: Optional[str] = None
    trim_level: Optional[str] = None
    description: Optional[str] = None


class ProductCreateCar(ProductCarBase):
    price: int = Field(gt=0)


class ProductGetCars(ProductCarBase):
    id: int
    product: Product
    model_config = ConfigDict(from_attributes=True)
