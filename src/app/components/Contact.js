import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
    return <div id="kontak" className="pt-12">
        <h3 className="text-gray-600 text-2xl font-medium">Kontak</h3>
        <div className="flex flex-col gap-2 mt-6 flex-wrap">
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://wa.me/6281329295252'} className="flex gap-2 p-6 hover:shadow-green-600 rounded-xl place-items-center flex-1 text-gray-200 ease-in-out duration-100 shadow">
                    <FaWhatsapp className="text-4xl text-green-600" />
                    <span className="text-gray-800">+62 813 2929 5252</span>
                </a>
                <a href={'https://www.tiktok.com/@eleganprimamandirimgl'} className="flex gap-2 p-6 hover:shadow-gray-800 rounded-xl place-items-center flex-1 text-gray-800 ease-in-out duration-100 shadow">
                    <FaTiktok className="text-4xl" />
                    <span>@eleganprimamandirimgl</span>
                </a>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://www.instagram.com/cveleganprima/'} className="flex gap-2 p-6 hover:shadow-[#DC2743] rounded-xl place-items-center flex-1 text-gray-200 ease-in-out duration-100 shadow">
                    <FaInstagram className="text-4xl text-[#DC2743]" />
                    <span className="text-gray-800">@cveleganprima</span>
                </a>
                <a href={'https://www.threads.net/@masiyok'} className="flex gap-2 p-6 hover:shadow-gray-800 rounded-xl place-items-center flex-1 text-gray-800 ease-in-out duration-100 shadow">
                    <FaThreads className="text-4xl" />
                    <span className="break-all">@masiyok</span>
                </a>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://www.youtube.com/@priyowahyusetyanto2677'} className="flex gap-2 p-6 hover:shadow-[#FF0000] rounded-xl place-items-center flex-1 ease-in-out duration-100 shadow">
                    <FaYoutube className="text-4xl text-[#FF0000]" />
                    <span className="break-all text-gray-800">Priyo Wahyu Setyanto</span>
                </a>
                <a href={'mailto:eleganprimamandiri@gmail.com'} className="flex gap-2 p-6 hover:shadow-blue-600 rounded-xl place-items-center flex-1 text-blue-600 ease-in-out duration-100 shadow">
                    <LuMail className="text-4xl" />
                    <span className="break-all">eleganprimamandiri@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
}