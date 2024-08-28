import Link from "next/link.js"
import { findProductByPath } from "../utils.js"

export default function CardLarge({path, className = ''}) {
    const data = findProductByPath(path)
    if (!data) return <div>{path} tidak ditemukan</div>
    return <Link href={`/produk/${path}`} className={className}>
        <div className="relative flex flex-col rounded-xl shadow group/card overflow-hidden">
            <div className="p-4 -mb-2 bg-gray-200 w-fit rounded-t-xl">
                <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
            </div>
            <div className={`min-h-72 rounded-md overflow-hidden bg-cover bg-center relative bg-gray-200 before:bg-gray-900 before:opacity-80 group-hover/card:before:opacity-50 before:absolute before:inset-0 group-hover/card:shadow-xl ease-in-out before:duration-100 duration-100 hover:z-20`} style={{backgroundImage: `url(${data.image[0]})`}}>
                <div className="flex items-center h-full z-30 relative">
                    <div className="px-10 py-10 max-w-xl">
                        <p className="mt-2 text-gray-300">{data.description}</p>
                        <div href="https://wa.me/6281329295252" className="relative text-gray-200 flex items-center mt-4 px-3 py-2 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 group-hover/card:before:scale-x-100 before:rounded-xl">
                            <span>Selengkapnya</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute -bottom-2 right-0 text-sm z-20 text-gray-200 border border-gray-200 rounded-lg p-2 group-hover/card:bg-gray-200 group-hover/card:shadow-lg group-hover/card:text-gray-700 duration-100">{data.price}</span>
        </div>
    </Link>
}