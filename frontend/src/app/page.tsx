'use client'
import Card from "@/Components/Сard/page";
import useCars from "@/hooks/useCars";

export default function Home() {
    const {cars, loading, error} = useCars();
    if (loading) return (<div>Loading...</div>)
    if (error) return (<div>Error! - {error}</div>)
    return (
        <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            {cars.map((car, index) => (
                <Card key={index} image={car.product.images.map(img => img.image)} stats={car}/>
            ))}
        </main>
    );
}
