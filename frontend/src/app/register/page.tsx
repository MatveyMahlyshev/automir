import Form from "next/form";
import Link from "next/link";
import {routes} from "@/routes";

export default function Register(){
    return (
        <main className="flex flex-col flex-grow justify-center items-center w-full px-4">
            <h2 className="text-xl md:text-5xl">Регистрация</h2>
            <div className="w-full max-w-md mt-6">
                <Form action={""} className="flex flex-col w-full space-y-2">
                    <input type="text" placeholder="Фамилия" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Имя" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Отчество" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Почта" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Номер телефона" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Пароль" className="border p-2 rounded-xl" />
                    <input type="text" placeholder="Подтвердите пароль" className="border p-2 rounded-xl" />
                </Form>

                <div className="flex flex-col md:flex-row w-full gap-3 mt-5">
                    <button
                        type="submit"
                        className="w-full md:w-1/2 px-4 py-2 bg-[#c03134] rounded-2xl font-light text-white text-sm sm:text-base md:text-lg whitespace-nowrap">
                        Зарегистрироваться
                    </button>
                    <Link
                        href={routes.auth}
                        className="w-full md:w-1/2 text-center px-4 py-2 bg-[#c03134] rounded-2xl font-light text-white text-sm sm:text-base md:text-lg whitespace-nowrap">
                        Войти
                    </Link>
                </div>
            </div>
        </main>

    )
}