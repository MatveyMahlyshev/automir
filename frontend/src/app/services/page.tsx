import ServiceCard from "@/Components/ServiceCard/page";

import tradeIn from "../../img/trade-in-logo.png"
import urgent from "../../img/urgent-redemption.png"
import wheel from "../../img/wheel.png"
import techM from "../../img/technical-maintenance.png"
import insurance from "../../img/insurance.png"
import credit from "../../img/credit.png"

export default function Services (){
    return(
        <main className="flex flex-col flex-grow items-center mx-10">
            <h2 className='text-xl md:text-3xl my-10 font-medium'>Сервис предоставляет следующие виды услуг:</h2>
            <ServiceCard  img={tradeIn} desc={'TRADE-IN. Обмен старого автомобиля на новый с доплатой'}/>
            <ServiceCard  img={urgent} desc={'Срочный выкуп'}/>
            <ServiceCard  img={techM} desc={'Сервисное обслуживание'}/>
            <ServiceCard  img={insurance} desc={'Автострахование. ОСАГО и КАСКО'}/>
            <ServiceCard  img={wheel} desc={'Продажа автошин и дисков'}/>
            <ServiceCard  img={credit} desc={'Автокредитование'}/>
        </main>
    )
}