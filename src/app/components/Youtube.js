const otherSourceYoutube = [
    {src: "https://www.youtube.com/embed/45zTd_6nw7k", title: 'Wisata'},
    {src: "https://www.youtube.com/embed/EWmQdPm7zXg", title: 'Elegan Transport'},
    {src: "https://www.youtube.com/embed/-uIY7_6kpTo", title: 'Elegan Prima Mandiri'},
]

console.log(process.env.NODE_ENV)

export default function Youtube() {
    return <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col container sm:flex-row gap-2 px-4">
            <div className="flex sm:w-1/3">
                <iframe className="rounded-xl h-52 sm:h-64 shadow w-full" width="853" height="480" src={`https://www.youtube.com/embed/JlObLpanBHw${process.env.NODE_ENV === 'production' ? '?autoplay=1&mute=1' : ''}`} title={'Event Organizer'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="flex flex-col gap-2 sm:w-1/3 ">
                <h3 className="font-semibold text-gray-700">Elegan Event | Bappeda - Litbangda kab. Magelang</h3>
                <p className="line-clamp-4 text-sm text-ellipsis text-gray-600">Selamat datang di highlight seru dari acara yang diorganisir oleh Elegan Event bersama Bappeda-Litbangda kab. Magelang! Kami dengan penuh semangat menangani segala detail. Elegan Event selalu siap memberikan sentuhan unik dan kreatif untuk setiap event, membuatnya jadi kenangan manis bagi semua yang terlibat!</p>
            </div>
        </div>
        <div className="flex gap-2 overflow-auto ">
            {otherSourceYoutube.map((source, i) => <iframe key={i} className="rounded-xl h-48 shadow max-w-sm first:ml-4 last:mr-4" width="853" height="480" src={source.src} title={source.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
        </div>
    </div>
}