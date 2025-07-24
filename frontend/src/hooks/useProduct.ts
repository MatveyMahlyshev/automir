import { useState, useEffect } from 'react';
import {CarStats, TrailerStats} from "@/types/card";

export default function useProduct(type: string, id: number) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const nullCar:CarStats = {
        title: 'Не найдено',
        engine: 'Не найдено',
        fuel_type: 'Не найдено',
        year: 0,
        transmission: 'Не найдено',
        body_type: 'Не найдено',
        color: 'Не найдено',
        mileage: 0,
        owners: 0,
        steering_wheel: 'Не найдено',
        generation: 'Не найдено',
        trim_level: 'Не найдено',
        description: 'Не найдено',
        id: 0,
        product: {
            price: 0,
            images: [],
        },
        status: 'Не найдено',
    }
    const nullTrailer:TrailerStats = {
        title: 'Не найдено',
        axis_count: 'Не найдено',
        load_capacity: 'Не найдено',
        trailer_length: 'Не найдено',
        trailer_width: 'Не найдено',
        trailer_height: 'Не найдено',
        trailer_weight: 'Не найдено',
        body_volume: 'Не найдено',
        description: 'Не найдено',
        id: 0,
        product: {
            price: 0,
            images: [],
        },
        status: 'Не найдено',
    }
    const [product, setProduct] = useState<CarStats | TrailerStats>(nullCar || nullTrailer);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
<<<<<<< HEAD:frontend/src/hooks/useCar.ts
                    `http://192.168.0.7:8000/api/v1/products/?product_type=car&product_id=${id}`
=======
                    `http://localhost:8000/api/v1/products/?product_type=${type}&product_id=${id}`
>>>>>>> frontend:frontend/src/hooks/useProduct.ts
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]);
                } else if (typeof data === 'object') {
                    setProduct(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchData();
    }, [type, id]);

    return { product, loading, error };
}