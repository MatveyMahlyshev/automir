import Card from "@/Components/Сard/page";
import trailer_plug from '../../img/trailer-plug.jpg'

export default function trailers() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            <Card image={[trailer_plug]}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }}
                  price={3950000}/>
            <Card image={[trailer_plug]}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }}
                  price={3950000}/>
            <Card image={[trailer_plug]}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }}
                  price={3950000}/>
        </main>
    );
}
