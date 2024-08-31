import { PiParkDuotone } from "react-icons/pi";
import { MdHiking } from "react-icons/md";
import { PiMedalDuotone } from "react-icons/pi";

export default function Jumbotron() {
    return <div className="bg-[#111111] sm:bg-contain bg-cover bg-center bg-no-repeat relative background-animation">
        <div className="absolute inset-0 bg-black bg-opacity-85"/>
        <div className="flex flex-col gap-2 p-6  min-h-96 container mx-auto justify-center my-16 z-10 relative">
            <h1 className="text-5xl font-bold text-neutral-300 mb-6 break-all sm:break-normal drop-shadow-xl leading-[1.3]"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Event Organizer</span> dan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Biro Perjalanan Wisata</span> Jawa Tengah</h1>
            <p className="text-sm sm:text-lg text-gray-300 drop-shadow-xl">Ahli dalam Event Organizer dan Biro Perjalanan Wisata, Biro Perjalanan Wisata, Sewa Hiace, Outbound, Open trip Bromo, Wisata Antar Pulau!</p>
            <div className="flex flex-col gap-2 sm:flex-row w-full mt-8">
                <a href="#produk" className="inline-block px-6 py-3 border text-blue-600 font-semibold rounded-xl border-blue-600 bg-blue-500 bg-opacity-10 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg ease-in-out duration-200 shadow">Lihat Produk</a>
                <a href="#kontak" className="inline-block px-6 py-3 flex-1 bg-opacity-80 bg-violet-600 text-gray-200 rounded-xl ease-in-out duration-200 hover:bg-violet-500 shadow hover:shadow-lg">Kontak kami</a>
            </div>
        </div>
        <div className="flex gap-2 p-6 container mx-auto justify-around bg-white shadow-lg -mb-12 rounded-xl z-10 relative">
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><PiParkDuotone/></span>
                <span className="text-xs">Bermain</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><MdHiking/></span>
                <span className="text-xs">Bertualang</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><PiMedalDuotone/></span>
                <span className="text-xs">Pengalaman</span>
            </div>
        </div>
    </div>
}