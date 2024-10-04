'use client'
import { useState } from "react"

const faqs = [
    {
        "question": "Apa saja jenis transportasi yang disediakan oleh CV Elegan Prima Mandiri?",
        "answer": "Kami menyediakan berbagai jenis transportasi untuk memenuhi kebutuhan perjalanan Anda. Mulai dari mobil hingga Hiace, armada kami selalu siap melayani Anda. #elegantransport"
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri menyediakan paket wisata ke luar pulau?",
        "answer": "Ya, kami menyediakan paket wisata antar pulau ke berbagai destinasi seperti Bali, Lombok, Danau Toba, dan lainnya. Harga paket menyesuaikan dengan lokasi kunjungan dan jenis transportasi yang digunakan. #eleganevent"
    },
    {
        "question": "Apa keunikan atau keunggulan kompetitif yang membedakan CV Elegan Prima Mandiri dari kompetitor?",
        "answer": "Salah satu keunggulan utama kami adalah keterlibatan langsung pemimpin perusahaan dalam setiap proyek. Pemimpin kami selalu hadir di lapangan, memahami detail pekerjaan, dan terlibat langsung dalam aspek teknis proyek. Hal ini memastikan kualitas layanan yang konsisten, pengambilan keputusan yang cepat, dan solusi yang disesuaikan dengan kebutuhan spesifik setiap klien. Pendekatan hands-on ini memungkinkan kami untuk memberikan pengalaman yang lebih personal dan hasil yang memuaskan bagi setiap klien kami."
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri juga melayani acara pernikahan?",
        "answer": "Ya, kami menyediakan layanan Wedding Organizer untuk membantu Anda merencanakan dan mengeksekusi acara pernikahan impian Anda. #eleganweddingorganizer"
    },
    {
        "question": "Apakah bisa menyewa kendaraan saja tanpa menggunakan jasa tour guide?",
        "answer": "Tentu saja. Kami menyediakan layanan sewa kendaraan (Rent Car) yang bisa Anda gunakan sesuai kebutuhan, baik dengan atau tanpa jasa tour guide."
    },
    {
        "question": "Apa saja jenis kegiatan outbound yang ditawarkan?",
        "answer": "Kami menawarkan berbagai jenis kegiatan outbound, termasuk capacity building, character building, leadership training, dan fun games. Lokasi dan harga dapat disesuaikan dengan jenis kegiatan dan jumlah peserta."
    },
    {
        "question": "Bagaimana cara memesan layanan di CV Elegan Prima Mandiri?",
        "answer": "Anda dapat menghubungi kami melalui nomor telepon +62 813 2929 5252. Kami juga bisa dihubungi melalui akun lain, lihat di bagian kontak di website ini."
    },
    {
        "question": "Apakah CV Elegan Prima Mandiri menyediakan layanan untuk acara korporat?",
        "answer": "Ya, kami menyediakan layanan Event Organizer yang dapat menangani berbagai jenis acara, termasuk acara korporat seperti launching produk, gala dinner, atau team building."
    },
    {
        "question": "Apakah ada paket wisata khusus untuk rombongan besar?",
        "answer": "Tentu, kami dapat menyusun paket wisata khusus yang disesuaikan dengan kebutuhan rombongan besar Anda. Silakan hubungi tim kami untuk mendiskusikan detail dan mendapatkan penawaran terbaik."
    },
    {
        "question": "Bagaimana dengan kebijakan pembatalan dan pengembalian dana?",
        "answer": "Kebijakan pembatalan dan pengembalian dana kami bervariasi tergantung pada jenis layanan dan waktu pembatalan. Kami sarankan untuk mendiskusikan hal ini dengan tim kami saat melakukan pemesanan."
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