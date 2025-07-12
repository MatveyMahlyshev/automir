from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime




class ProductCreateCar(BaseModel):
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
    price: int = Field(gt=0)
