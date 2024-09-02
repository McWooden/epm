import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { GiForestCamp } from "react-icons/gi";

export default function Quotes() {
    return <div className="flex gap-2 bg-gray-200 p-6 relative overflow-hidden">
        <Image className="h-12 w-12 object-cover rounded-full" src={'/assets/other/biro-perjalanan-wisata.webp'} alt={'pp-quote'} width={250} height={250}/>
        <div className="flex flex-col gap-2">
            <p className="text-gray-800 text-2xl font-semibold flex gap-2 flex-wrap">Nikmatilah hari ini, besok kita cari cerita lagi.</p>
            <p className="text-gray-600 text-sm">masyok, 7 July 2024.</p>
        </div>
        <div className="relative">
            <FaQuoteRight className="absolute top-0 right-0 sm:relative text-2xl"/>
        </div>
        <GiForestCamp className="text-[7em] -bottom-1 -right-3 absolute text-gray-500"/>
    </div>
}