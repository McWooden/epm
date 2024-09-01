import { findProductByPath, spaceToLink } from "@/app/utils"
import { HiOutlineTicket } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import Image from "next/image"

export async function generateMetadata({ params }) {
    // read route params
    const path = params.path

    // fetch data
    const product = findProductByPath(path)

    return {
        title: `${product.title} | cveleganprima`,
    }
}

export default function Page({params}) {
    const data = findProductByPath(params.path)

    if (!data) return <div>
        <p>Produk tidak ditemukan!</p>
    </div>

    return <div className="container mx-auto p-6 flex flex-col gap-6">
        <div className="flex gap-2">
            <Image src={data.image[0]} alt="icon" width={200} height={250} className="rounded w-36 mr-auto flex-1"/>
            <div className="flex flex-col gap-1 flex-[2_2_0%] px-2">
                <h3 className="font-semibold text-lg">{data.title}</h3>
                <p className="opacity-90 text-xs">cveleganprima</p>
                <p className="opacity-90 text-xs">Mas Priyok</p>
            </div>
        </div>
        <div className="flex justify-around gap-2 px-6 shadow-xl rounded-xl py-6">
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-sm gap-1 items-center">4,7 <FaStar /></span>
                <span className="text-xs">256 ulasan</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex gap-1"><HiOutlineTicket /></span>
                <span className="text-xs">Tiket</span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex text-sm gap-1">3</span>
                <span className="text-xs">Hari</span>
            </div>
        </div>
        <div className="flex gap-2">
            <div className="border border-blue-600 flex-1 text-blue-600 flex justify-center items-center rounded-lg">
                {data.price}
            </div>
            <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan ${data.title}. Apakah masih tersedia?`)}`} className="flex flex-1 items-center px-3 py-2 bg-blue-600 text-white text-sm justify-center font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full">
                <span>Pesan sekarang</span>
            </a>
        </div>
        <div>
            <h3 className="font-semibold text-lg">Tentang Tiket ini</h3>
            <p className="text-xs">{data.description}</p>
        </div>
        <div className="flex gap-2 overflow-x-auto py-4 items-center">
            {data.image.map((url, i) => (
                <div key={i} className="relative">
                    <Image
                        src={url}
                        alt={`Image ${i + 1}`}
                        width={500}
                        height={500}
                        className="rounded-md object-contain max-w-60"
                    />
                </div>
            ))}
        </div>
    </div>
}