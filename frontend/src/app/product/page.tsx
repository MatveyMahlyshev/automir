'use client'
import car_plug from "../../img/car-plug.png"
import car_plug_vert from "../../img/car-plug-vert.png"
import Carousel from "@/Components/Carousel/page";
import Image, {StaticImageData} from "next/image";
import React from "react";
import {CarStats} from "@/types/card";

export default function Product() {
    const images = [car_plug, car_plug_vert, car_plug, car_plug_vert, car_plug, car_plug_vert, car_plug, car_plug];
    const carStats: CarStats = {
        title: 'Hyundai Sonata',
        engine: '1.8',
        fuel_type: 'Бензиновый двигатель',
        year: 2022,
        transmission: 'АКПП',
        drivetrain: 'АКПП',
        body_type: 'седан',
        color: 'черный',
        mileage: '50 000км',
        owners: '1',
        steering_wheel: 'Левый',
        generation: 'Предпоследнее',
        trim_level: 'Prestige',
        description: 'descriptiondescr iptiondescriptiondescri ptiondescriptiond escrip tiondescrip tiondes criptiondesc ript iondescri ptiondesc riptiondes cript iondesc riptiond escr iptio nde scri tion escr ptiondes cripti ondes ripti ondesc iption descripti ondescripti ondesc ription descrip tiond esc riptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
        status: 'свободно',
    }

    const [currentImg, setCurrentImg] = React.useState({img: images[0], index: 0})
    const [isOpen, setIsOpen] = React.useState(false);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }
    const currentImgHandler = (image: StaticImageData, index: number) => {
        setCurrentImg({img: image, index: index});
    }

    return (
        <main className="flex-grow flex flex-col relative py-2 px-4 sm:px-6 lg:px-10">
            <div className={`fixed inset-0 z-50 flex justify-center items-center bg-black/70 ${isOpen ? '' : 'hidden'}`}>
                <div className="w-full max-w-6xl min-h-[100dvh] flex flex-col items-center relative">
                    <div
                        className="absolute top-5 right-5 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-xl cursor-pointer"
                        onClick={isOpenHandler}>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45 translate-y-[-50%]" />
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-45 translate-y-[-50%]" />
                    </div>
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                        <Carousel slides={images} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.5fr_1fr]">
                <div className="flex flex-col gap-4">
                    <div
                        className="w-full aspect-video sm:aspect-[4/3] md:aspect-[3/2] lg:min-h-[400px] bg-gray-200 cursor-zoom-in"
                        onClick={isOpenHandler}>
                        <Image src={currentImg.img} alt="" className="w-full h-full object-cover object-center rounded-md" />
                    </div>

                    <div className="flex flex-wrap gap-2 justify-start">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`w-1/5 min-w-[60px] h-20 border-2 ${currentImg.index === index ? 'border-gray-900' : 'border-transparent'} rounded-md overflow-hidden cursor-pointer`}
                                onClick={() => currentImgHandler(image, index)}>
                                <Image
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-contain object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="text-lg sm:text-xl lg:text-2xl break-words whitespace-normal overflow-hidden max-w-full pt-2 sm:pt-6">
                    <h2 className="font-bold text-3xl mb-4">{carStats.title}</h2>
                    <ul className="space-y-1 list-['-'] pl-5">
                        <li>Год выпуска: {carStats.year}</li>
                        <li>Поколение: {carStats.generation}</li>
                        <li>Объем двигателя: {carStats.engine}</li>
                        <li>Комплектация: {carStats.trim_level}</li>
                        <li>Привод: {carStats.drivetrain}</li>
                        <li>Коробка передач: {carStats.transmission}</li>
                        <li>Тип двигателя: {carStats.fuel_type}</li>
                        <li>Кузов: {carStats.body_type}</li>
                        <li>Цвет: {carStats.color}</li>
                        <li>Пробег: {carStats.mileage}</li>
                        <li>Кол-во владельцев: {carStats.owners}</li>
                        <li>Руль: {carStats.steering_wheel}</li>
                    </ul>

                    <div className="mt-6">
                        <span className="text-xl font-semibold">Дополнительное описание:</span>
                        <p className="mt-3 text-base sm:text-lg leading-relaxed">{carStats.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}