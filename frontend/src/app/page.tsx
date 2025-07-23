import Card from "@/Components/Сard/page";
import car_plug from "../img/car-plug.png"
import car_plug_vert from "../img/car-plug-vert.png"

export default function Home() {
    return (
        <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            <Card image={[car_plug, car_plug_vert]} stats={{
                title: 'Hyundai Sonata',
                engine: '1.8',
                fuel_type: 'Бензиновый двигатель',
                year: 2022,
                transmission: 'АКПП',
                drivetrain: 'АКПП',
                body_type: 'седан',
                color: 'черный',
                mileage: '50 000км',
                owners: '1',
                steering_wheel: 'Левый',
                generation: 'Предпоследнее',
                trim_level: 'Prestige',
                description: 'descriptiondescr iptiondescriptiondescri ptiondescriptiond escrip tiondescrip tiondes criptiondesc ript iondescri ptiondesc riptiondes cript iondesc riptiond escr iptio nde scri tion escr ptiondes cripti ondes ripti ondesc iption descripti ondescripti ondesc ription descrip tiond esc riptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
                status: 'свободно',
            }} price={'3 950 000'}/>
        </main>
    );
}
