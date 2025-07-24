'use client'
import useProducts from "@/hooks/useProducts";
import Card from "@/Components/Сard/page";

export default function Trailers() {
    const {products, loading, error} = useProducts('trailer');
    if (loading) return (<div>Loading...</div>)
    if (error) return (<div>Error! - {error}</div>)
    return (
        <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            {products.map((trailer, index) => (
                <Card key={index} image={trailer.product.images.map(img => img.image)} stats={trailer}/>
            ))}
        </main>
    );
}
