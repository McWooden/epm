import Card from "../components/Card"
import SmallCard from "../components/SmallCard"
export default function Produk() {
    return <div className="container mx-auto p-6 flex flex-col gap-2">
        <Card path='sewa-hiace'/>
        <Card path='open-trip-bromo'/>
        <Card path='antar-pulau'/>
        <Card path='outbound'/>
        <SmallCard title='Biro Perjalanan Wisata'/>
        <SmallCard title='Artis Managejement'/>
        <SmallCard title='Wedding Organizer'/>
        <SmallCard title='Rent Car'/>
        <SmallCard title='Elegan Event'/>
    </div>
}