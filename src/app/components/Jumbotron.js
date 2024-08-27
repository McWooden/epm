import Link from "next/link";

export default function Jumbotron() {
    return <div className="bg-blue-50">
        <div className="flex flex-col gap-2 p-6  min-h-96 container mx-auto justify-center">
            <h1 className="text-5xl font-bold text-neutral-700 mb-6 break-all sm:break-normal"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Event organizer</span> dan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Biro Perjalanan Wisata</span> Jawa Tengah</h1>
            <p className="text-sm sm:text-lg text-gray-700">Ahli dalam Event Organizer dan Biro Perjalanan Wisata, Biro Perjalanan Wisata, Sewa Hiace, Outbound, Open trip Bromo, Wisata Antar Pulau!</p>
            <div className="flex flex-col gap-2 sm:flex-row w-full">
                <Link href="/produk" className="mt-8 inline-block px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:border-blue-700 hover:text-blue-700">Lihat Produk</Link>
                <a href="#kontak" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex-1">Kontak kami</a>
            </div>
        </div>
    </div>
}