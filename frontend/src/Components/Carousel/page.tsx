'use client'
import { StaticImageData } from "next/image";
import Image from "next/image";
import {useState} from "react";

export default function Carousel({ slides }: { slides: StaticImageData[] }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-row w-full h-full items-center overflow-hidden relative rounded-2xl">
            <button
                onClick={goToPrevious}
                className="absolute left-4 z-10 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 transition-all"
            >
                <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45 origin-left"></span>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45 origin-left"></span>
                </div>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 z-10 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 transition-all"
            >
                <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 right-0 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45 origin-right"></span>
                    <span className="absolute top-1/2 right-0 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45 origin-right"></span>
                </div>
            </button>

            {slides.map((slide, index) => (
                    <Image
                        src={slide}
                        alt={`Slide`}
                        placeholder="blur"
                        key={index}
                        className="w-full min-w-full"
                        style={{transform: `translateX(-${currentIndex * 100}%)`, zIndex: -1}}
                    />

            ))}
        </div>
    );
}