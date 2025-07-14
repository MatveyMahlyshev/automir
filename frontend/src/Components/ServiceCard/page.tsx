import {StaticImageData} from "next/image";
import Image from "next/image";

export default function ServiceCard({img, desc} : {img: StaticImageData, desc: string}) {
    return (
        <div className='flex items-center w-full mb-10'>
            <Image src={img} alt={''} className='mr-10'/>
            <div>
                <span className='text-xl md:text-2xl'>{desc}</span>
            </div>
        </div>
    )
}