'use client'
import Image from "next/image";
import {use, useState, useEffect} from "react";
import useProduct from "@/hooks/useProduct";
import Carousel from "@/Components/Carousel/page";
import {CarStats, TrailerStats} from "@/types/card";


//type-guards
function isCarStats(stats: CarStats | TrailerStats): stats is CarStats {
    return 'mileage' in stats;
}

function isTrailerStats(stats: CarStats | TrailerStats): stats is TrailerStats {
    return 'trailer_length' in stats;
}

export default function ProductPage({params}: { params: Promise<{ type: string, id: number }> }) {
    const slug = use(params);
    const {product, loading, error} = useProduct(slug.type, slug.id);
    const images = product.product.images.map(img => img.image);
    const [currentImg, setCurrentImg] = useState<{ img: string, index: number } | null>(null);

    useEffect(() => {
        if (images && images.length > 0) {
            setCurrentImg({img: images[0], index: 0});
        }
    }, [product]);
    const [isOpen, setIsOpen] = useState(false);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }
    const currentImgHandler = (image: string, index: number) => {
        setCurrentImg({img: image, index: index});
    }

    console.log(images[0]);
    console.log(currentImg);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <main className="p-2">
            <div
                className={`fixed inset-0 z-50 flex justify-center items-center bg-black/70 ${isOpen ? '' : 'hidden'}`}>
                <div className="w-full max-w-6xl min-h-[100dvh] flex flex-col items-center relative">
                    <div
                        className="absolute top-5 right-5 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-xl cursor-pointer"
                        onClick={isOpenHandler}>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45 translate-y-[-50%]"/>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-45 translate-y-[-50%]"/>
                    </div>
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                        <Carousel slides={images}/>
                    </div>
                </div>
            </div>


            {currentImg && (
                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.5fr_1fr]">
                    <div className="flex flex-col gap-4">

                        <div
                            className="relative w-full aspect-video sm:aspect-[4/3] md:aspect-[3/2] lg:min-h-[400px] bg-gray-200 cursor-zoom-in"
                            onClick={isOpenHandler}>
                            <Image src={currentImg.img} fill alt=""
                                   className="w-full h-full object-cover object-center rounded-md"/>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-start">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative w-1/5 min-w-[60px] h-20 border-2 ${currentImg.index === index ? 'border-gray-900' : 'border-transparent'} rounded-md overflow-hidden cursor-pointer`}
                                    onClick={() => currentImgHandler(image, index)}
                                >
                                    <Image
                                        src={image}
                                        alt=""
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    <div
                        className="text-lg sm:text-xl lg:text-2xl break-words whitespace-normal overflow-hidden max-w-full pt-2 sm:pt-6">
                        <h2 className="font-bold text-3xl mb-4">{product.title} {product.product.price}₽</h2>
                        <ul className="space-y-1 list-['-'] pl-5">
                            {isCarStats(product) && (
                                <>
                                    {product.year && (<li>Год выпуска: {product.year}</li>)}
                                    {product.engine && (<li>Объем: {product.engine}</li>)}
                                    {product.trim_level && (<li>Комплектация: {product.trim_level}</li>)}
                                    {product.fuel_type && (<li>Тип двигателя: {product.fuel_type}</li>)}
                                    {product.transmission && (<li>Коробка передач: {product.transmission}</li>)}
                                    {product.body_type && (<li>Кузов: {product.body_type}</li>)}
                                    {product.color && (<li>Цвет: {product.color}</li>)}
                                    {product.mileage && (<li>Пробег: {product.mileage}</li>)}
                                    {product.owners && (<li>Кол-во владельцев: {product.owners}</li>)}
                                    {product.steering_wheel && (<li>Руль: {product.steering_wheel}</li>)}
                                    {product.generation && (<li>Поколение: {product.generation}</li>)}
                                </>
                            )}
                            {isTrailerStats(product) && (
                                <>
                                    {product.axis_count && (<li>Количество осей: {product.axis_count}</li>)}
                                    {product.load_capacity && (<li>Грузоподъемность: {product.load_capacity})</li>)}
                                    {product.trailer_length && (<li>Длина: {product.trailer_length}</li>)}
                                    {product.trailer_width && (<li>Ширина: {product.trailer_width}</li>)}
                                    {product.trailer_height && (<li>Высота: {product.trailer_height}</li>)}
                                    {product.trailer_weight && (<li>Вес: {product.trailer_weight}</li>)}
                                    {product.body_volume && (<li>Объем: {product.body_volume}</li>)}
                                </>

                            )}
                        </ul>

                        <div className="mt-6">
                            <span className="text-xl font-semibold">Дополнительное описание:</span>
                            <p className="mt-3 text-base sm:text-lg leading-relaxed">{product.description}</p>
                        </div>
                    </div>
                </div>
            )}


        </main>
    );
}