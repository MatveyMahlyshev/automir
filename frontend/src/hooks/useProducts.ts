import { useState, useEffect } from 'react';
import {CarStats, TrailerStats} from "@/types/card";

export default function useProducts(type: string) {
    const [products, setProducts] = useState<CarStats[] | TrailerStats[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD:frontend/src/hooks/useCars.ts
                const response = id ? await fetch(`http://192.168.0.7:8000/api/v1/products/?product_type=car&product_id=${id}`) : await fetch('http://192.168.0.7:8000/api/v1/products/?product_type=car');
=======
                const response = await fetch(`http://localhost:8000/api/v1/products/?product_type=${type}`);
>>>>>>> frontend:frontend/src/hooks/useProducts.ts
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type]);
    return { products, loading, error };
}