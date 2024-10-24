import { PiParkDuotone } from "react-icons/pi";
import { MdHiking } from "react-icons/md";
import { PiMedalDuotone } from "react-icons/pi";
import { BsBusFront } from "react-icons/bs";
import { BiParty } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";

export default function Jumbotron() {
    return <div className="bg-[#111111] sm:bg-contain bg-cover bg-center bg-no-repeat relative background-animation">
        <div className="absolute inset-0 bg-black bg-opacity-65"/>
        <div className="flex flex-col gap-2 min-h-96 container mx-auto justify-center sm:my-16 sm:px-8 my-8 px-8 z-10 relative">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-3/6">
                    <h1 className="font-bold text-neutral-300 break-words sm:break-normal mb-6 drop-shadow-xl leading-[1.3] text-4xl sm:text-5xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">Event Organizer</span> dan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">Biro Perjalanan Wisata</span></h1>
                    <p className="text-sm sm:text-lg text-gray-300 drop-shadow-xl">Dari event spesial hingga wisata tak terlupakan. Kami hadir untuk menciptakan pengalaman terbaik. Jelajahi nusantara dengan kami!</p>
                </div>
                <div className="sm:w-3/6"></div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row w-full mt-8">
                <a href="#produk" className="flex items-center px-6 py-4 text-blue-5/00 font-semibold rounded-xl border-2 border-blue-500 bg-blue-400 text-blue-400 bg-opacity-10 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg ease-in-out duration-200 shadow">Lihat Produk</a>
                <a href="#kontak" className="flex items-center px-6 py-4 flex-1 bg-opacity-80 bg-violet-600 text-gray-200 rounded-xl ease-in-out duration-200 hover:bg-violet-500 shadow hover:shadow-lg">Kontak kami</a>
            </div>
        </div>
        <div className="flex gap-2 p-6 container mx-auto sm:justify-around justify-center bg-white shadow-lg -mb-12 rounded-xl z-10 relative flex-wrap">
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><PiParkDuotone className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Bermain</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><MdHiking className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Bertualang</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><BsBusFront className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Transportasi</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><BiParty className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Perayaan</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><GoSmiley className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Hiburan</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-4xl"><PiMedalDuotone className="text-gray-800"/></span>
                <span className="text-xs text-gray-600">Bisnis</span>
            </div>
        </div>
    </div>
}

// Bermain (untuk outbound dan fungame)
// Bertualang (untuk open trip dan wisata antar pulau)
// Pengalaman (bisa mencakup berbagai jenis wisata)
// Transportasi (untuk sewa Hiace dan rent car)
// Perayaan (untuk wedding organizer dan event organizer)
// Hiburan (untuk artis management dan "Elegan Event")
// Bisnis (untuk capacity building, character building, dan leadership training)