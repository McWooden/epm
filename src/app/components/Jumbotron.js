import Link from "next/link";

export default function Jumbotron() {
    return <div className="bg-gradient-to-b from-violet-100 to-pink-100">
        <div className="flex flex-col gap-2 p-6  min-h-96 container mx-auto justify-center">
            <h1 className="text-5xl font-bold text-neutral-700 mb-6 break-all sm:break-normal"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Event Organizer</span> dan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Biro Perjalanan Wisata</span> Jawa Tengah</h1>
            <p className="text-sm sm:text-lg text-gray-700">Ahli dalam Event Organizer dan Biro Perjalanan Wisata, Biro Perjalanan Wisata, Sewa Hiace, Outbound, Open trip Bromo, Wisata Antar Pulau!</p>
            <div className="flex flex-col gap-2 sm:flex-row w-full mt-8">
                <Link href="/produk" className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:border-blue-700 hover:text-blue-700 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-lg">Lihat Produk</Link>
                <a href="#kontak" className="inline-block px-6 py-3 flex-1 bg-violet-600 text-gray-200 rounded-xl hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-lg">Kontak kami</a>
            </div>
        </div>
    </div>
}