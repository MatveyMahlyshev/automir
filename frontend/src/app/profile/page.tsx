import Image from "next/image";
import plug from '../../img/plug.png'
// import Card from "@/Components/Сard/page";

export default function Profile() {


    return (
        <main className="flex flex-grow p-2 flex-col ">
            <div className="flex md:flex-row gap-5">
                <div className="flex flex-col relative w-full md:w-1/4 min-h-56 md:h-auto overflow-hidden rounded-lg">
                    <Image src={plug} alt="" fill className="object-cover"/>
                </div>

                <div className="flex flex-col ml-2">
                    <ul className="text-xl md:text-2xl">
                        <li>ФИО: Фамилия Имя Отчество</li>
                        <li>Эл. почта: example-user@email.ru</li>
                        <li>Номер телефона: +7 (123) 456-78-90</li>
                    </ul>
                    <button
                        type="submit"
                        className="bg-[#C03134] mt-5 p-3 text-white rounded-full hover:scale-110 transition-transform duration-300 ease-in-out transform origin-center flex items-center justify-center">
                        <span className="text-xs md:text-xl lg:text-lg">Изменить данные</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-15 w-full">
                <h3 className='text-3xl text-center'>Зарезервированные авто и прицепы</h3>
                <div className='flex flex-row'>
                    {/*<Card image={} stats={}/>*/}
                </div>
            </div>
        </main>
    )
}