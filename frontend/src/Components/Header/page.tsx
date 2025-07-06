'use client'

import Link from "next/link";
import Image from "next/image";
import plug from "@/img/plug.png";
import {Montserrat_Alternates} from "next/font/google";
import {useState} from "react";

const montserrat = Montserrat_Alternates({
    weight: ['400', '600', '700', '900'],
    subsets: ['latin', 'cyrillic'],
})

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="flex w-full items-center p-3 md:p-4 justify-between">

            <h1 className='text-xl md:text-3xl lg:text-4xl min-w-fit mr-2'>
                <Link href='/'>
                    <span className={`text-red-600 ${montserrat.className}`}>АВТО</span>МИР
                </Link>
            </h1>


            <nav className="flex-grow flex items-center justify-center relative">

                <div className="md:hidden absolute right-0 z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 focus:outline-none"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute left-0 w-6 h-1 bg-black rounded-full transition-all ${
                                isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1'
                            }`}></span>
                            <span className={`absolute left-0 w-6 h-1 bg-black rounded-full transition-all ${
                                isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                            }`}></span>
                            <span className={`absolute left-0 w-6 h-1 bg-black rounded-full transition-all ${
                                isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1'
                            }`}></span>
                        </div>
                    </button>
                </div>

                {isOpen && (
                    <ul className="absolute top-full right-0 mt-2 flex flex-col bg-white shadow-lg rounded-lg p-3 z-40 min-w-[160px]">
                        <li className='text-center py-1.5'><Link href='/' onClick={() => setIsOpen(false)}>Автомобили</Link></li>
                        <li className='text-center py-1.5'><Link href='/' onClick={() => setIsOpen(false)}>Прицепы</Link></li>
                        <li className='text-center py-1.5'><Link href='/' onClick={() => setIsOpen(false)}>Услуги</Link></li>
                    </ul>
                )}

                <ul className="hidden md:flex flex-row items-center justify-center space-x-3 lg:space-x-6 text-base md:text-lg lg:text-xl w-full">
                    <li><Link href='/'>Автомобили</Link></li>
                    <li><Link href='/'>Прицепы</Link></li>
                    <li><Link href='/'>Услуги</Link></li>
                </ul>
            </nav>

            <Link href='/' className="flex items-center min-w-fit ml-2">
                <span className='mr-2 hidden lg:inline text-sm md:text-base'>Войти/Регистрация</span>
                <Image className='w-6 h-6 md:w-8 md:h-8 rounded-full' src={plug} alt={''}/>
            </Link>
        </header>
    )
}