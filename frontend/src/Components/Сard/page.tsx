'use client'
import {StaticImageData} from "next/image";
import {CarStats, TrailerStats} from "@/types/card";
import Link from "next/link";
import Carousel from "@/Components/Carousel/page";

function isCarStats(stats: CarStats | TrailerStats): stats is CarStats {
    return 'mileage' in stats;
}

function isTrailerStats(stats: CarStats | TrailerStats): stats is TrailerStats {
    return 'trailer_length' in stats;
}

export default function Card({image, stats, price}: {
    image: Array<StaticImageData>,
    stats: CarStats | TrailerStats,
    price: number
}) {

    return (
        <div className="flex flex-col pt-3 pb-5 border-2 pl-2 pr-2 rounded-2xl text-base lg:text-xl justify-between">
            <div className="w-full h-2/3 flex items-center justify-center">
                <Carousel slides={image}/>
            </div>
            <div>
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


                <div className="py-5">
                    <span className="line-clamp-5">{stats.desc}</span>
                </div>

                <div className="flex flex-col">
                    <p className='py-10'>Цена: {price}</p>
                    <div className="flex items-center justify-around flex-col lg:flex-row">
                        <button
                            type="submit"
                            className="bg-[#C03134] p-3 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out transform origin-center flex items-center justify-center">
                            <span className="text-xs md:text-xl lg:text-lg">Забронировать</span>
                        </button>

                        <Link
                            href="/"
                            className="text-blue-700 hover:underline underline-offset-4 whitespace-nowrap transition-all duration-200 hover:text-blue-900"
                        >
                            Развернуть<span className="text-xl">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}