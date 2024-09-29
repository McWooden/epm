import Card from "./Card";
import Contact from "./Contact";
import Jumbotron from "./Jumbotron";
import Quotes from "./Quotes";
import Youtube from "./Youtube";
import { spaceToLink } from "../utils";

export default function Templet() {
    return (
        <>
        <Jumbotron/>
        <div className="container mx-auto mt-16 mb-8">
            {/* Hero section */}
            {/* <Link href={'/produk/sewa-hiace'}> */}

            <Youtube/>
        </div>
        <div id="produk">
            {/* <div className="container mx-auto">
                <h3 className="text-gray-600 text-2xl font-medium pt-12">Produk</h3>
            </div> */}
            <div className="bg-gradient-to-tr from-pink-500 to-violet-600">
                <div className="container mx-auto p-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Card path='sewa-hiace'/>
                        <Card path='open-trip-bromo'/>
                        <Card path='antar-pulau'/>
                        <Card path='outbound'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto my-8 px-6">
        
                {/* <CardLarge path='sewa-hiace'/> */}
            {/* </Link> */}
            {/* <div className="flex flex-col md:flex-row gap-2">
                h-72 rounded-md overflow-hidden bg-cover bg-center
                <div className="w-full h-72 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"  style={{backgroundImage: `url(/assets/open-trip.jpg)`}}>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Open trip Bromo</h2>
                            <p className="mt-2 text-gray-400">Paket dua hari Magelang - Bromo Pulang Pergi.</p>
                            <a href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 shadow-blue-500 shadow-xl text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit">
                                <span>Pesan sekarang</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <CardLarge path='open-trip-bromo' className="flex-1"/>
                <CardLarge path='antar-pulau' className="flex-1"/>
            </div>
            <CardLarge path='outbound' className="appear"/> */}

            <Quotes/>

            {/* Product sections */}
            <div>
                <h3 className="text-gray-600 text-2xl font-medium pt-12">Lainnya</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {/* Add your product items here */}
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: "url(/assets/other/biro-perjalanan-wisata.webp)"}}>
                        <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan Biro Perjalanan Wisata. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </a>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">Biro Perjalanan Wisata</h3>
                        {/* <span className="text-gray-500 mt-2">$000</span> */}
                    </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: "url(/assets/other/event-organizer.webp)"}}>
                        <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan Event Organizer. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </a>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">Event organizer</h3>
                        {/* <span className="text-gray-500 mt-2">$000</span> */}
                    </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: "url(/assets/other/artis-management.webp)"}}>
                        <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan Event Organizer. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </a>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">Artis Management</h3>
                        {/* <span className="text-gray-500 mt-2">$000</span> */}
                    </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: "url(/assets/other/wedding-organizer.webp)"}}>
                        <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan Artis Management. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </a>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">Wedding Organizer</h3>
                        {/* <span className="text-gray-500 mt-2">$000</span> */}
                    </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: "url(/assets/other/rent-car.webp)"}}>
                        <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan Rent Car. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </a>
                    </div>
                    <div className="px-5 py-3">
                        <h3 className="text-gray-700 uppercase">Rent Car</h3>
                        {/* <span className="text-gray-500 mt-2">$000</span> */}
                    </div>
                    </div>
                    </div>
                </div>
            {/* You can add more sections as needed */}
            <Contact/>
        </div>
        </>
    )
}