const sourceYoutube = [
    {src: "https://www.youtube.com/embed/JlObLpanBHw", title: 'Event Organizer'},
    {src: "https://www.youtube.com/embed/45zTd_6nw7k", title: 'Wisata'},
    {src: "https://www.youtube.com/embed/-uIY7_6kpTo", title: 'Elegan Prima Mandiri'},
    {src: "https://www.youtube.com/embed/EWmQdPm7zXg", title: 'Elegan Transport'}
]

export default function Youtube() {
    return <div className="flex gap-2 overflow-auto">
        {sourceYoutube.map((source, i) => <iframe key={i} className="rounded-xl h-48 shadow max-w-sm first:ml-4 last:mr-4" width="853" height="480" src={source.src} title={source.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
    </div>
}