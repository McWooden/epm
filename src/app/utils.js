export const products = [
    {
        title: 'Sewa Hiace',
        path: 'sewa-hiace',
        description: 'Harga sewa lokal dan luar kota berbadan hubungi kami untuk harga terbaik.',
        price: '1.000K',
        banner: '/assets/banner/sewa-hiace.png',
        shadow: 'shadow-[0_0_15px_0_#615a65]',
        image: ['/assets/produk/sewa-hiace.jpg', '/assets/produk/sewa-hiace-2.jpg', '/assets/produk/sewa-hiace-3.jpg', '/assets/produk/sewa-hiace-4.jpg'],
    },
    {
        title: 'Outbound',
        path: 'outbound',
        description: 'Outbound, capacity building, character building, leadership, fungame. Lokasi bisa memilih wilayah Magelang, Jogja, Semarang, Solo dll. Harga menyesuaikan jenis kegiatan, alat serta lokasi.',
        price: '55K',
        banner: '/assets/banner/outbound.png',
        shadow: 'shadow-[0_0_15px_0_#68853a]',
        image: ['/assets/produk/outbound.jpg', '/assets/produk/outbound-2.jpg', '/assets/produk/outbound-3.jpg', '/assets/produk/outbound-4.jpg', '/assets/produk/outbound-5.jpg', '/assets/produk/outbound-6.jpg', '/assets/produk/outbound-7.jpg', '/assets/produk/outbound-8.jpg', '/assets/produk/outbound-9.jpg', '/assets/produk/outbound-10.jpg']
    },
    {
        title: 'Open Trip Bromo',
        path: 'open-trip-bromo',
        description: 'Paket dua hari Magelang - Bromo Pulang Pergi.',
        price: '750K',
        banner: '/assets/banner/open-trip-bromo.png',
        shadow: 'shadow-[0_0_15px_0_#4b7397]',
        image: ['/assets/produk/open-trip-bromo.jpg']
    },
    {
        title: 'Wisata Antar Pulau',
        path: 'antar-pulau',
        description: 'Wisata Antar Pulau ke Bali, Lombok, Toba dll, harga tercatum menyesuaikan dengan lokasi kunjungan dan transportasi yang digunakan.',
        price: '1.600K',
        banner: '/assets/banner/antar-pulau.png',
        shadow: 'shadow-[0_0_15px_0_#8c806d]',
        image: ['/assets/produk/antar-pulau.jpg', '/assets/produk/antar-pulau-2.jpg']
    },
]

export const smallProducts = [
    {
        title: 'Biro Perjalanan Wisata',
        image: '/assets/other/biro-perjalanan-wisata.webp',
    },
    {
        title: 'Elegan Event',
        image: '/assets/other/event-organizer.webp',
        description: 'Nek butuh hiburan teko call aja. Singer, Player, Tukang kendang sak sound ready banget',
    },
    {
        title: 'Artis Managejement',
        image: '/assets/other/artis-management.webp',
    },
    {
        title: 'Wedding Organizer',
        image: '/assets/other/wedding-organizer.webp',
    },
    {
        title: 'Rent Car',
        image: '/assets/other/rent-car.webp',
    },
]

export function findProductByTitle(title) {
    const smallProduct = smallProducts.find(x => x.title === title)
    return smallProduct
}

export function findProductByPath(path) {
    const product = products.find(x => x.path === path)
    return product
}

export function spaceToLink(text) {
    return text.split(' ').join('%20')
}
