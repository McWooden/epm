export const products = [
    {
        title: 'Sewa Hiace',
        path: 'sewa-hiace',
        description: 'Harga sewa lokal dan luar kota berbadan hubungi kami untuk harga terbaik.',
        price: '1.000K',
        image: ['/assets/sewa-hiace.jpg', '/assets/produk/sewa-hiace-2.jpg', '/assets/produk/sewa-hiace-3.jpg', '/assets/produk/sewa-hiace-4.jpg'],
    },
    {
        title: 'Outbound',
        path: 'outbound',
        description: 'Outbound, capacity building, character building, leadership, fungame. Lokasi bisa memilih wilayah Magelang, Jogja, Semarang, Solo dll. Harga menyesuaikan jenis kegiatan, alat serta lokasi.',
        price: '55K',
        image: ['/assets/outbound.jpg', '/assets/produk/outbound-2.jpg', '/assets/produk/outbound-3.jpg', '/assets/produk/outbound-4.jpg', '/assets/produk/outbound-5.jpg', '/assets/produk/outbound-6.jpg', '/assets/produk/outbound-7.jpg', '/assets/produk/outbound-8.jpg', '/assets/produk/outbound-9.jpg', '/assets/produk/outbound-10.jpg']
    },
    {
        title: 'Open Trip Bromo',
        path: 'open-trip-bromo',
        description: 'Paket dua hari Magelang - Bromo Pulang Pergi.',
        price: '750K',
        image: ['/assets/open-trip-bromo.jpg']
    },
    {
        title: 'Wisata Antar Pulau',
        path: 'antar-pulau',
        description: 'Wisata Antar Pulau ke Bali, Lombok, Toba dll, harga tercatum menyesuaikan dengan lokasi kunjungan dan transportasi yang digunakan.',
        price: '1.600K',
        image: ['/assets/antar-pulau.jpg', '/assets/produk/antar-pulau-2.jpg']
    },
]
export function findProductByPath(path) {
    const product = products.find(x => x.path === path)
    return product
}

export function spaceToLink(text) {
    return text.split(' ').join('%20')
}
// export const products = {
//     'sewaHieace': {
//         title: 'Sewa Hiace',
//         description: 'Harga sewa lokal dan luar kota berbadan hubungi kami untuk harga terbaik.',
//         price: 'Rp 1.000.000'
//     },
//     'outbound': {
//         title: 'outbound',
//         description: 'Outbound, capacity building, character building, leadership, fungame. Lokasi bisa memilih wilayah Magelang, Jogja, Semarang, Solo dll. Harga menyesuaikan jenis kegiatan, alat serta lokasi.',
//         price: 'Rp 55.000'
//     },
//     'openTripNromo': {
//         title: 'Open trip Bromo',
//         description: 'Paket dua hari Magelang - Bromo Pulang Pergi.',
//         price: 'Rp 650.000'
//     },
//     'wisataAntarPulau': {
//         title: 'Wisata Antar Pulau',
//         description: 'Wisata Antar Pulau ke Bali, Lombok, Toba dll, harga tercatum menyesuaikan dengan lokasi kunjungan dan transportasi yang digunakan.',
//         price: 'Rp 1.600.000'
//     },
// }