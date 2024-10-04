'use client'
import { useState } from "react"

const faqs = [
    {
        "question": "Bagaimana cara memesan layanan di CV Elegan Prima Mandiri?",
        "answer": "Gampang banget! Tinggal angkat ponsel dan telepon kami di +62 813 2929 5252. Atau, kalau mau lebih kekinian, cek bagian kontak di website kami. Semua serba ada di sana!"
    },
    {
        "question": "Apa keunikan atau keunggulan kompetitif yang membedakan CV Elegan Prima Mandiri dari kompetitor?",
        "answer": "Nah, keunggulan kami itu simpel tapi mematikan! Bos kami sendiri langsung terjun ke lapangan, jadi semuanya terpantau dengan teliti. Dengan pendekatan hands-on ini, kami siap memberikan pengalaman yang lebih personal dan, tentu saja, hasil yang bikin hati senang."
    },
    {
        "question": "Apa saja jenis transportasi yang disediakan oleh CV Elegan Prima Mandiri?",
        "answer": "Mulai dari mobil manis sampai Hiace kece, armada kami siap nganterin kamu ke mana aja! Yang penting, kamu tinggal duduk manis dan #elegantransport siap melayani!"
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri menyediakan paket wisata ke luar pulau?",
        "answer": "Tentu dong! Kami punya paket seru ke Bali, Lombok, Danau Toba, dan masih banyak lagi. Sesuaiin aja dengan budget dan gaya kamu. #eleganevent berangkat!"
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri juga melayani acara pernikahan?",
        "answer": "Oh iya banget! Kami punya tim Wedding Organizer yang siap mewujudkan pernikahan impian kamu. Tinggal kasih tahu konsepnya, kita yang beresin semuanya. #eleganweddingorganizer"
    },
    {
        "question": "Apakah bisa menyewa kendaraan saja tanpa menggunakan jasa tour guide?",
        "answer": "Mau sewa mobil doang? Boleh banget! Kamu bisa sewa kendaraan tanpa tour guide. Bawa sendiri, atau kita temenin kalau kamu mau. Semua terserah kamu!"
    },
    {
        "question": "Apa saja jenis kegiatan outbound yang ditawarkan?",
        "answer": "Dari capacity building sampai fun games, kami punya paket outbound yang seru abis! Kamu tinggal pilih mau kegiatan apa, dan jumlah pesertanya berapa, nanti kami atur biar jadi momen yang seru."
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri menyediakan layanan untuk acara korporat?",
        "answer": "Jelas bisa! Dari acara gala dinner sampai launching produk, kami siap bantuin kamu bikin acara korporat yang elegan dan berkesan."
    },
    {
        "question": "Apakah ada paket wisata khusus untuk rombongan besar?",
        "answer": "Pasti ada! Buat kamu yang datang rame-rame, kami siap bikin paket wisata spesial dengan penawaran terbaik. Hubungi kami biar kita atur yang paling cocok buat kamu dan tim!"
    },
    {
        "question": "Bagaimana dengan kebijakan pembatalan dan pengembalian dana?",
        "answer": "Kami fleksibel kok. Kebijakan pembatalan dan refund bisa disesuaikan dengan jenis layanan yang kamu ambil. Yang penting, kita obrolin baik-baik ya sebelum booking!"
    }
]

export default function Faq() {
    return <div id="faq" className="flex flex-col gap-2">
        <h3 className="text-gray-600 text-2xl font-medium pt-12">FAQ</h3>
        <span className="text-gray-500">Selalu pastikan jawaban dari pertanyaan anda dengan menghubungi kami</span>
        {faqs.map((x,i) => <Accordian key={i} question={x.question} answear={x.answer}/>)}
    </div>
}

function Accordian({question, answear}) {
    const [open, setOpen] = useState(false)

    return <div className="shadow rounded p-4">
        <button onClick={() => setOpen(prev => !prev)} className="flex justify-between w-full">
            <span className="capitalize text-gray-600 text-start font-semibold">{question}</span>
            <span className="text-gray-600">{open?'-' : '+'}</span>
        </button>
        <div className={`grid overflow-hidden text-sm transition-all ease-in-out text-gray-400 duration-300
            ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
            `}>
            <span className="overflow-hidden">{answear}</span>
        </div>
    </div>
}