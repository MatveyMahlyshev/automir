'use client'

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import whatsApp from "../../img/whats-app-logo.png"
import viber from "../../img/viber-logo.png"
import vk from "../../img/vk-logo.png"

declare global {
    interface Window {
        ymaps?: any;
    }
}

export default function Footer(){
    useEffect(() => {
        const initMap = () => {
            if (window.ymaps) {
                window.ymaps.ready(() => {
                    const center = [61.250380, 46.677216]; // координаты центра

                    const map = new window.ymaps.Map("yandex-map", {
                        center: center,
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"]
                    });


                    const placemark = new window.ymaps.Placemark(center, {
                        balloonContent: "Автосалон здесь!",
                    }, {
                        preset: 'island#icon',
                        iconColor: '#d01919',
                    });

                    map.geoObjects.add(placemark);
                });
            }
        };

        initMap();
    }, []);
    return (
        <footer className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-6 px-6 py-10 bg-gray-100 text-sm md:text-base">

            <div className="flex flex-col gap-1">
                <p><strong>Телефон:</strong> 8 (123) 456-78-90</p>
                <p><strong>Почта:</strong> example@mail.ru</p>
            </div>

            <div className="flex gap-4">
                <Link href="/"><Image src={whatsApp} alt="WhatsApp" className="w-10 h-10" /></Link>
                <Link href="/"><Image src={viber} alt="Viber" className="w-10 h-10" /></Link>
                <Link href="/"><Image src={vk} alt="VK" className="w-10 h-10" /></Link>
            </div>

            <div className="flex flex-col gap-1">
                <p><strong>Режим работы:</strong></p>
                <p>Пн–Пт: 9:00 – 19:00</p>
                <p>Сб–Вс: 10:00 – 16:00</p>
            </div>

            <div className="flex flex-col items-start">
                <div className="rounded-xl overflow-hidden border w-[300px] h-[200px]">
                    <div id="yandex-map" className="w-full h-full"></div>
                </div>
                <span className="mt-2">ул. Чиркова, 25, Котлас</span>
            </div>

        </footer>
    );
}