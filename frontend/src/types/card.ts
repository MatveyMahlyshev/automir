export interface CarStats {
    title: string;
    engine: string;
    fuel_type: string;
    year: number;
    transmission: string;
    body_type: string;
    color: string;
    mileage: number;
    owners: number;
    steering_wheel: string;
    generation: string;
    trim_level: string;
    description: string;
    id: number;
    product: {
        price: number;
        images: {
            image: string;
        }[];
    };
    status: string;
}

export interface TrailerStats {
    title: string,
    axis_count: string,
    load_capacity: string,
    trailer_length: string,
    trailer_width: string,
    trailer_height: string,
    trailer_weight: string,
    body_volume: string,
    description: string,
    id: number;
    product: {
        price: number;
        images: {
            image: string;
        }[];
    };
    status: string;
}