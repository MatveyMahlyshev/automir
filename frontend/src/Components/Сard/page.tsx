'use client'
import Image, {StaticImageData} from "next/image";
import {CarStats, TrailerStats} from "@/types/card";
import Link from "next/link";

function isCarStats(stats: CarStats | TrailerStats): stats is CarStats {
    return 'mileage' in stats;
}

function isTrailerStats(stats: CarStats | TrailerStats): stats is TrailerStats {
    return 'trailer_length' in stats;
}

export default function Card({image, stats, price}: {
    image: StaticImageData,
    stats: CarStats | TrailerStats,
    price: number
}) {

    return (
        <div className="flex flex-col border-2 pl-2 pr-2 rounded-2xl text-base lg:text-xl">
            <div className="w-full h-2/4 flex items-center justify-center">
                <div className="flex rounded-2xl overflow-hidden w-full h-full items-center justify-center">
                    <Image src={image} alt={''} className='w-auto h-full'/>
                </div>
            </div>

            <div>
                <ul>
                    <li className='font-bold'>
                        <h3>{stats.name} {isCarStats(stats) ? stats.year : ''}</h3></li>
                    {isCarStats(stats) && (
                        <>
                            <li>Поколение: {stats.gen}</li>
                            <li>Комплектация: {stats.modification}</li>
                        </>
                    )}
                    {isTrailerStats(stats) && (
                        <>
                            <li>Грузоподъемность: {stats.trailer_weight}</li>
                            <li>Количество осей: {stats.spring_type}</li>
                        </>
                    )}
                </ul>
            </div>

            <div>
                <span>{stats.desc}</span>
            </div>
            <p className='pt-2'>Цена: {price}</p>
            <div className="flex items-center justify-around py-5 flex-col lg:flex-row">
                <button
                    type="submit"
                    className="bg-[#C03134] p-3 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out transform origin-center flex items-center justify-center">
                    <span className="hidden md:inline">Забронировать</span>
                    <span className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                    </span>
                </button>

                <Link
                    href="/"
                    className="text-blue-700 hover:underline underline-offset-4 whitespace-nowrap transition-all duration-200 hover:text-blue-900"
                >
                    Развернуть<span className="text-xl">&rarr;</span>
                </Link>
            </div>

        </div>
    )
}