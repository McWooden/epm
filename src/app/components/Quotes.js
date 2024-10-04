import { FaQuoteRight } from "react-icons/fa";

export default function Quotes() {
    return <div className="flex gap-2 p-6 relative overflow-hidden rounded bg-contain bg-right bg-no-repeat bg-[#d2e0ed] shadow-[0_0_15px_0_#a8b3be]" style={{backgroundImage: 'url(/assets/priyo-wahyu.webp)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-20"/>
        <FaQuoteRight className="absolute top-2 right-2 sm:relative text-2xl text-gray-100 drop-shadow z-10"/>
        <div className="flex flex-col gap-2 z-10">
            <p className="text-gray-100 text-2xl font-semibold flex gap-2 flex-wrap drop-shadow">Nikmatilah hari ini, besok kita cari cerita lagi.</p>
            <p className="text-gray-100 text-sm drop-shadow-sm">masyok, 7 July 2024.</p>
        </div>
    </div>
}