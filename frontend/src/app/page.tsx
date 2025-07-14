import Card from "@/Components/Сard/page";
import car_plug from "../img/car-plug.png"
import car_plug_vert from "../img/car-plug-vert.png"

export default function Home() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            <Card image={[car_plug, car_plug_vert]}
                  stats={{
                      name: "Hyundai Sonata",
                      gen: "VII",
                      year: 2023,
                      mileage: 60000,
                      passport: 'Электронный',
                      owners_count: 2,
                      modification: '2.0 MPI AT Classic',
                      engine_capacity: '2.0',
                      engine_type: 'бензин',
                      gearbox: 'АКПП',
                      drive: 'Передний',
                      body_type: 'Седан',
                      wheel_position: 'Левый',
                      status: 'свободно',
                      desc: 'Lorem ipsum',
                      conditions: ''
                  }}
                 price={3950000}/>
            <Card  image={[car_plug_vert, car_plug]}
                  stats={{
                      name: "Hyundai Sonata",
                      gen: "VII",
                      year: 2023,
                      mileage: 60000,
                      passport: 'Электронный',
                      owners_count: 2,
                      modification: '2.0 MPI AT Classic',
                      engine_capacity: '2.0 (189 л.с.)',
                      engine_type: 'бензин',
                      gearbox: 'АКПП',
                      drive: 'Передний',
                      body_type: 'Седан',
                      wheel_position: 'Левый',
                      status: 'свободно',
                      desc: 'Lorem ipsum',
                      conditions: ''
                  }}
                 price={3950000}/>
            <Card image={[car_plug, car_plug_vert]}
                  stats={{
                      name: "Hyundai Sonata",
                      gen: "VII",
                      year: 2023,
                      mileage: 60000,
                      passport: 'Электронный',
                      owners_count: 2,
                      modification: '2.0 MPI AT Classic',
                      engine_capacity: '2.0',
                      engine_type: 'бензин',
                      gearbox: 'АКПП',
                      drive: 'Передний',
                      body_type: 'Седан',
                      wheel_position: 'Левый',
                      status: 'свободно',
                      desc: 'Lorem ipsum',
                      conditions: ''
                  }}
                 price={3950000}/>
        </main>
    );
}
