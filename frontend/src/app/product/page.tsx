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
        <main className="flex-grow flex flex-col relative py-2">
            <div className={`fixed inset-0 z-50 flex justify-center items-center bg-black/70 ${isOpen ? '' : 'hidden'}`}>
                <div className="w-full max-w-6xl min-h-[100dvh] flex flex-col items-center relative">
                    <div
                        className="absolute z-51 self-start w-10 h-10 bg-white/90 right-0 hover:bg-white rounded-xl cursor-pointer"
                        onClick={isOpenHandler}>
                        <span
                            className="absolute top-4.5 rotate-45 w-10 h-0.5 bg-black rounded-xl translate-y-1/2 pointer-events-none"/>
                        <span
                            className="absolute top-4.5 -rotate-45 w-10 h-0.5 bg-black rounded-xl translate-y-1/2 pointer-events-none"/>
                    </div>
                    <div className={`w-full flex-1 flex items-center justify-center overflow-hidden`}>
                        <Carousel slides={images}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[1.5fr_1fr] h-full">
                <div className="w-full h-1/2 flex m-5">
                    <div className="w-full flex flex-col items-center">
                        <div className={`w-full max-h-150 cursor-zoom-in`} onClick={isOpenHandler}>
                            <Image src={currentImg.img} alt={''} className={`w-full h-full object-cover object-center`}/>
                        </div>
                        <div className={`flex flex-wrap items-center justify-start`}>
                            {images.map((image, index) => (
                                <div key={index} className={`w-1/5 h-40 box-border border-2 ${currentImg.img == image && currentImg.index == index ? 'border-gray-950/100': 'border-gray-950/0'}`}>
                                    <Image src={image} alt={''} className={`w-full h-full object-contain object-center cursor-pointer`} onClick={() => currentImgHandler(image, index)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pl-5 pt-15 text-4xl">
                    <h2 className={`py-2`}>{carStats.title}</h2>
                    <ul className={`text-xl`}>
                        <li>Год выпуска: {carStats.year}</li>
                        <li>Поколение: {carStats.generation}</li>
                        <li>Объем двигателя: {carStats.engine}</li>
                        <li>Комплектация: {carStats.trim_level}</li>
                        <li>Коробка передач: {carStats.drivetrain}</li>
                        <li>Коробка передач: {carStats.transmission}</li>
                        <li>Тип двигателя: {carStats.fuel_type}</li>
                        <li>Кузов: {carStats.body_type}</li>
                        <li>Цвет: {carStats.color}</li>
                        <li>Пробег: {carStats.mileage}</li>
                        <li>Кол-во владельцев{carStats.owners}</li>
                        <li>Руль: {carStats.steering_wheel}</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}