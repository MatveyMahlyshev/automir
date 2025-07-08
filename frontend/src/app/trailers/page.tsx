import Card from "@/Components/Сard/page";
import trailer_plug from '../../img/trailer-plug.jpg'

export default function trailers() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-8 m-10">
            <Card image={trailer_plug}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'Lorem Trailer'
                  }}
                  price={3950000}/>
            <Card image={trailer_plug}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'Lorem Trailer'
                  }}
                  price={3950000}/>
            <Card image={trailer_plug}
                  stats={{
                      name: 'ТИТАН 3518-01 «С»',
                      trailer_length: '3.5м',
                      trailer_width: '1.8м',
                      trailer_height: '0.1м',
                      trailer_weight: '550кг',
                      spring_type: '2',
                      desc: 'Lorem Trailer'
                  }}
                  price={3950000}/>
        </main>
    );
}
