import Image from "next/image";

export default function YoutubeShort() {
    return <div className="flex gap-2 overflow-auto">
        <iframe className="rounded-xl h-48 shadow" width="853" height="480" src="https://www.youtube.com/embed/EWmQdPm7zXg" title="Elegan Transport Watermark" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Image src={'/assets/random/transport.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
        <Image src={'/assets/random/transport-2.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
        <Image src={'/assets/random/transport.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
        <Image src={'/assets/random/transport-2.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
        <Image src={'/assets/random/transport.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
        <Image src={'/assets/random/transport-2.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-48 shadow"/>
    </div>
}