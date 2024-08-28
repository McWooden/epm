import Link from "next/link.js"
import { findProductByPath } from "../utils.js"

export default function CardLarge({path, className = ''}) {
    const data = findProductByPath(path)
    if (!data) return <div>{path} tidak ditemukan</div>
    return <Link href={`/produk/${path}`} className={className}>
        <div className="relative flex flex-col rounded-xl shadow group/card overflow-hidden bg-gradient-to-b from-pink-200 to-gray-200">
            <h2 className="text-2xl font-semibold p-4 text-gray-800 bg-violet-200 w-fit rounded-s-xl">{data.title}</h2>
            <div className={`h-72 rounded-md overflow-hidden bg-cover bg-center relative bg-gray-900 before:bg-gray-900 before:opacity-80 group-hover/card:before:opacity-50 before:absolute before:inset-0 group-hover/card:scale-105 group-hover/card:shadow-xl ease-in-out duration-100 hover:z-20`} style={{backgroundImage: `url(${data.image[0]})`}}>
                <div className="flex items-center h-full z-30 relative">
                    <div className="px-10 max-w-xl">
                        <p className="mt-2 text-gray-300">{data.description}</p>
                        <div href="https://wa.me/6281329295252" className="relative text-gray-200 flex items-center mt-4 px-3 py-2 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 group-hover/card:before:scale-x-100 before:rounded-xl">
                            <span>Selengkapnya</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute bottom-2 right-2 text-sm z-20 text-gray-200 border border-gray-200 rounded-lg p-2 group-hover/card:bg-gray-200 group-hover/card:text-gray-700 duration-100">{data.price}</span>
        </div>
    </Link>
}