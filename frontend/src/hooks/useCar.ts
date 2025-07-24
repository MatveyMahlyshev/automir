import { useState, useEffect } from 'react';
import { CarStats } from "@/types/card";

export default function useCar(id: number) {

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
    const [car, setCar] = useState<CarStats>(nullCar);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://192.168.0.7:8000/api/v1/products/?product_type=car&product_id=${id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Преобразуем данные в один объект
                if (Array.isArray(data) && data.length > 0) {
                    setCar(data[0]); // Берем первый элемент массива
                } else if (typeof data === 'object') {
                    setCar(data); // Если пришел объект
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
    }, [id]);

    return { car, loading, error };
}