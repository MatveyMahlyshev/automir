import { useState, useEffect } from 'react';
import {CarStats} from "@/types/card";

export default function useCars(id?:number) {
    const [cars, setCars] = useState<CarStats[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = id ? await fetch(`http://localhost:8000/api/v1/products/?product_type=car&product_id=${id}`) : await fetch('http://localhost:8000/api/v1/products/?product_type=car');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setCars(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return { cars, loading, error };
}