import Image from "next/image";
import Link from "next/link";
import whatsApp from "../../img/whats-app-logo.png"
import viber from "../../img/viber-logo.png"
import vk from "../../img/vk-logo.png"

export default function Footer(){
    return (
        <footer className="flex justify-between items-center px-15 pt-10">

            <div>
                <p>Телефон для связи: 8 (123) 456-78-90</p>
                <p>Почта: example@mail.ru</p>
            </div>

            <div className="flex">
                <Link href={'/'}><Image src={whatsApp} alt={''} className='w-10'/></Link>
                <Link href={'/'}><Image src={viber} alt={''} className='w-10'/></Link>
                <Link href={'/'}><Image src={vk} alt={''} className='w-10'/></Link>
            </div>

            <div>
                <p>Режим работы:</p>
                <p>Пн-Вт: 9:00 - 19:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
            </div>

            <div>
                adress
            </div>

        </footer>
    );
}