export default function Templet() {
    return (
        <div className="flex flex-col bg-white">
            {/* Main content */}
            <main className="my-8 flex-grow">
                <div className="container mx-auto px-6">
                {/* Hero section */}
                <div className="h-72 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(/assets/sewa-hiace.jpg)`}}>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Sewa Hiace</h2>
                            <p className="mt-2 text-gray-400">Harga sewa lokal dan luar kota berbadan hubungi kami untuk harga terbaik.</p>
                            <a href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit">
                                <span>Pesan sekarang</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row my-8 md:-mx-4 gap-2">
                    <div className="w-full h-72 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"  style={{backgroundImage: `url(/assets/open-trip.jpg)`}}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Open trip Bromo</h2>
                                <p className="mt-2 text-gray-400">Paket dua hari Magelang - Bromo Pulang Pergi.</p>
                                <a href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit">
                                    <span>Pesan sekarang</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-72 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"  style={{backgroundImage: `url(/assets/antar-pulau.jpg)`}}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Wisata Antar Pulau</h2>
                                <p className="mt-2 text-gray-400">Wisata Antar Pulau ke Bali, Lombok, Toba dll, harga tercatum menyesuaikan dengan lokasi kunjungan dan transportasi yang digunakan.</p>
                                <a href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit">
                                    <span>Pesan sekarang</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-72 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(/assets/outbound.jpg)`}}>
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Outbound</h2>
                            <p className="mt-2 text-gray-400">Outbound, capacity building, character building, leadership, fungame. Lokasi bisa memilih wilayah Magelang, Jogja, Semarang, Solo dll. Harga menyesuaikan jenis kegiatan, alat serta lokasi.</p>
                            <a href="https://wa.me/6281329295252" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-fit">
                            <span>Pesan sekarang</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
        
            {/* Product sections */}
                <div className="mt-16">
                    <h3 className="text-gray-600 text-2xl font-medium">Layanan</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {/* Add your product items here */}
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80)"}}>
                            <a href="https://wa.me/6281329295252" className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Biro Perjalanan Wisata</h3>
                            {/* <span className="text-gray-500 mt-2">$000</span> */}
                        </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80)"}}>
                            <a href="https://wa.me/6281329295252" className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Event organizer</h3>
                            {/* <span className="text-gray-500 mt-2">$000</span> */}
                        </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"}}>
                            <a href="https://wa.me/6281329295252" className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Artis Management</h3>
                            {/* <span className="text-gray-500 mt-2">$000</span> */}
                        </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)"}}>
                            <a href="https://wa.me/6281329295252" className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Wedding Organizer</h3>
                            {/* <span className="text-gray-500 mt-2">$000</span> */}
                        </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80)"}}>
                            <a href="https://wa.me/6281329295252" className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Rent Car</h3>
                            {/* <span className="text-gray-500 mt-2">$000</span> */}
                        </div>
                        </div>
                        </div>
                    </div>
        
                {/* You can add more sections as needed */}
        
                </div>
            </main>
        </div>
      )
}