import Link from "next/link.js"
import { findProductByPath } from "../utils.js"
import Image from "next/image.js"

export default function Card({path, className = ''}) {
    const data = findProductByPath(path)
    if (!data) return <div>{path} tidak ditemukan</div>
    return <Link href={`/produk/${path}`} className={className}>
        <div className="relative flex flex-col rounded-xl shadow-xl group/card overflow-hidden max-w-sm bg-white">
            <div className="rounded-xl m-2 overflow-hidden h-36">
                <Image src={data.image[0]} alt={data.title + 'image'} width={500} height={500} className="object-cover w-full h-full object-center shadow" />
            </div>
            <div className="flex flex-col gap-2 p-4 h-32">
                <div className="flex gap-2 justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                    <span className="text-xl font-semibold text-gray-700">{data.price}</span>
                </div>
                <p className="line-clamp-2 font-semibold text-gray-400 group-hover/card:text-gray-500 text-ellipsis">{data.description}</p>
            </div>
            <div className="relative flex items-center pt-2 border-2 border-transparent border-t-gray-400 group-hover/card:text-gray-700 text-gray-600 m-4 p-t-2">
                <span className="font-semibold">Selengkapnya</span>
                <svg className="h-5 w-5 mx-2 duration-100 group-hover/card:right-0 right-4 absolute" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
        </div>
    </Link>
}