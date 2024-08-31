import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
    return <div id="kontak" className="pt-16">
        <h3 className="text-gray-600 text-2xl font-medium">Kontak</h3>
        <div className="flex flex-col gap-2 mt-6 flex-wrap">
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://wa.me/6281329295252'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 text-gray-200 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <FaWhatsapp className="text-4xl text-green-600" />
                    <span className="text-gray-800">+62 813 2929 5252</span>
                </a>
                <a href={'https://www.tiktok.com/@eleganprimamandirimgl'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 text-gray-800 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <FaTiktok className="text-4xl" />
                    <span>@eleganprimamandirimgl</span>
                </a>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://www.instagram.com/cveleganprima/'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 text-gray-200 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <FaInstagram className="text-4xl text-[#DC2743]" />
                    <span className="text-gray-800">@cveleganprima</span>
                </a>
                <a href={'https://www.threads.net/@masiyok'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 text-gray-800 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <FaThreads className="text-4xl" />
                    <span className="break-all">@masiyok</span>
                </a>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
                <a href={'https://youtu.be/-uIY7_6kpTo?si=Wez8Srhhe4ItqCT9'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <FaYoutube className="text-4xl text-[#FF0000]" />
                    <span className="break-all text-gray-800">Priyo Wahyu Setyanto</span>
                </a>
                <a href={'mailto:eleganprimamandiri@gmail.com'} className="flex gap-2 p-6 rounded-xl place-items-center flex-1 text-blue-600 hover:scale-105 ease-in-out duration-100 hover:z-10 shadow hover:shadow-xl">
                    <LuMail className="text-4xl" />
                    <span className="break-all">eleganprimamandiri@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
}