'use client'
import Image from "next/image";
import {useState} from "react";

export default function Carousel({slides}: { slides: string[]}) {
    console.log("Слайды: " + slides);
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
        <div className="relative w-full overflow-hidden rounded-2xl">
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 transition-all"
            >
                <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45 origin-left" />
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45 origin-left" />
                </div>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 transition-all"
            >
                <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 right-0 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45 origin-right" />
                    <span className="absolute top-1/2 right-0 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45 origin-right" />
                </div>
            </button>

            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full aspect-video relative">
                        <Image
                            src={`${slide}`}
                            alt={`Slide ${index}`}
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}