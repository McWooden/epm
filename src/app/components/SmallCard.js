import { RiChatForwardLine } from "react-icons/ri";
import { findProductByTitle, spaceToLink } from "../utils"

export default function SmallCard({title, className = ''}) {
    const data = findProductByTitle(title)
    if (!data) return <div>{title} tidak ditemukan</div>
    return <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">

        <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{backgroundImage: `url(${data.image})`}}>
            <a href={`https://wa.me/6281329295252?text=${spaceToLink(`Hai Pak Priyo, saya tertarik dengan ${data.title}. Apakah masih tersedia?`)}`} className="p-2 rounded-full bg-blue-600 shadow-blue-500 shadow-md text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <RiChatForwardLine className="h-5 w-5"/>
            </a>
        </div>
        <div className="px-5 py-3">
            <h3 className="text-gray-700 capitalize font-semibold">{data.title}</h3>
            <span className="text-gray-500 text-sm font-semibold">{data?.description}</span>
        </div>
    </div>
}
