import { useState, useEffect } from 'react';
import {CarStats, TrailerStats} from "@/types/card";

export default function useProducts(type: string) {
    const [products, setProducts] = useState<CarStats[] | TrailerStats[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/products/?product_type=${type}`);
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