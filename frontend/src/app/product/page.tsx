import car_plug from "../../img/car-plug.png"
import car_plug_vert from "../../img/car-plug-vert.png"
import Carousel from "@/Components/Carousel/page";
import Image from "next/image";

export default function Product() {
    const images = [car_plug, car_plug_vert, car_plug_vert, car_plug_vert, car_plug];
    return (
        <main className="flex-grow flex flex-col relative">
            <div className="absolute flex w-full h-screen items-center justify-center bg-black/70">
                <div className="absolute h-full max-w-1/2 w-screen top-0">
                    <Carousel slides={[car_plug, car_plug_vert, car_plug, car_plug_vert, car_plug]} height={''}/>
                </div>
            </div>
            <div className="grid grid-cols-2 h-full">
                <div className="w-full h-1/2 flex m-5">
                    <div className="w-full flex flex-wrap gap-1 items-center justify-center">
                        {images.map((image, i) => (
                            i === 0 ? (<Image key={i} src={image} alt={''}
                                              className='w-full h-auto object-cover overflow-hidden '/>) :
                                (<Image key={i} src={image} alt={''}
                                        className='w-1/5 h-auto object-cover overflow-hidden '/>)
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}