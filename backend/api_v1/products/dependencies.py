from fastapi import Form, Depends
from typing import Optional

from .schemas import ProductCreateCar, ProductCreateTrailer


def get_product_create_car(
    title: str = Form(...),
    engine: Optional[str] = Form(None),
    fuel_type: Optional[str] = Form(None),
    year: int = Form(...),
    transmission: Optional[str] = Form(None),
    drivetrain: Optional[str] = Form(None),
    body_type: Optional[str] = Form(None),
    color: Optional[str] = Form(None),
    mileage: int = Form(...),
    owners: int = Form(...),
    steering_wheel: Optional[str] = Form(None),
    generation: Optional[str] = Form(None),
    trim_level: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    price: int = Form(...),
) -> ProductCreateCar:
    return ProductCreateCar(
        title=title,
        engine=engine,
        fuel_type=fuel_type,
        year=year,
        transmission=transmission,
        drivetrain=drivetrain,
        body_type=body_type,
        color=color,
        mileage=mileage,
        owners=owners,
        steering_wheel=steering_wheel,
        generation=generation,
        trim_level=trim_level,
        description=description,
        price=price,
    )


def get_product_create_trailer(
    title: str = Form(...),
    axes_count: Optional[str] = Form(None),
    load_capacity: Optional[str] = Form(None),
    trailer_length: str = Form(...),
    trailer_width: str = Form(...),
    trailer_height: str = Form(...),
    trailer_weight: str = Form(...),
    body_volume: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    price: int = Form(...),
) -> ProductCreateTrailer:
    return ProductCreateTrailer(
        title=title,
        axes_count=axes_count,
        load_capacity=load_capacity,
        trailer_length=trailer_length,
        trailer_width=trailer_width,
        trailer_height=trailer_height,
        trailer_weight=trailer_weight,
        body_volume=body_volume,
        description=description,
        price=price,
    )
