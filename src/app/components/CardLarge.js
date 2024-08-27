import Link from "next/link.js"
import { findProductByPath } from "../utils.js"

export default function CardLarge({path, className = ''}) {
    const data = findProductByPath(path)
    if (!data) return <div>{path} tidak ditemukan</div>
    return <Link href={`/produk/${path}`} className={className}>
        <div className={`h-72 rounded-md overflow-hidden bg-cover bg-center relative hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl`} style={{backgroundImage: `url(${data.image[0]})`}}>
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">{data.title}</h2>
                    <p className="mt-2 text-gray-400">{data.description}</p>
                    <div href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit ease-in-out duration-100 hover:z-10 shadow hover:scale-105">
                        <span>Selengkapnya</span>
                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </div>
            <span className="absolute top-2 right-2 text-sm text-gray-200 border border-gray-200 rounded-lg p-2">{data.price}</span>
        </div>
    </Link>
}