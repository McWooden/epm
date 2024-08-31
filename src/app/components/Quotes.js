import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { GiForestCamp } from "react-icons/gi";

export default function Quotes() {
    return <div className="flex gap-2 mt-16 bg-gray-200 p-6 relative overflow-hidden">
        <div className="rounded-full overflow-hidden">
            <Image className="h-24 w-24 object-cover" src={'/assets/random/transport.jpg'} alt={'pp-quote'} width={250} height={250}/>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-gray-800 text-2xl font-semibold flex gap-2 flex-wrap">Nikmatilah hari ini, besok kita cari cerita lagi.</p>
            <p className="text-gray-600 text-sm">masyok, 7 July 2024.</p>
        </div>
        <FaQuoteRight className="text-2xl"/>
        <GiForestCamp className="text-[7em] -bottom-1 -right-3 absolute text-gray-500"/>
    </div>
}