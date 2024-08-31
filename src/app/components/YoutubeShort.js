import Image from "next/image";

export default function YoutubeShort() {
    return <div className="flex gap-2">
        <iframe className="h-32" width="315" height="560" src="https://www.youtube.com/embed/LryDdRfnQSQ" title="Elegan Transport" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="flex gap-2">
            <Image src={'/assets/random/transport.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-32"/>
            <Image src={'/assets/random/transport-2.jpg'} alt={'transport'} width={500} height={500} className="rounded-xl h-32"/>
        </div>
    </div>
}