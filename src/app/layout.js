import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://cveleganprimamandiri.vercel.app'),
  title: {
    template: "%s - Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
    default: "Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
  },
  description: "Ahli dalam Event Organizer dan Biro Perjalanan Wisata, CV Elegan Prima Mandiri, Priyo Oemar Bakrie, Biro Perjalanan Wisata Magelang, Sewa Hiace, Outbound, Open trip Bromo, Wisata Antar Pulau",
  twitter: {
    card: 'summary_large_image'
  },
  verification: {
    google: '0bnyGuaAqU-zkZ2N1LfxNlG_8MEk-pHuzJsYbtuk6nM',
  },
  keywords: ["CV Elegan Prima", "Priyo Oemar Bakrie", "Biro Perjalanan Wisata Magelang", "Sewa Hiace", "Outbound", "Open trip Bromo", "Wisata Antar Pulau", "Outbound Magelang", "Capacity Building Magelang", "Character Building Magelang", "Leadership Training Magelang", "Fungame Magelang", "Event Organizer Magelang", "Artis Management Magelang", "Wedding Organizer Magelang", "Rent Car Magelang", "Harga Sewa Mobil Magelang", "Outbound Jogja", "Outbound Semarang", "Outbound Solo", "Paket Wisata Bromo", "Paket Wisata Gunung Bromo", "Tour Gunung Bromo", "Sunrise Point Bromo", "Bukit Teletabis Bromo", "Pasir Berbisik Bromo", "Padang Savana Bromo", "Hiace Sewa Magelang", "Tiket Wisata Bromo", "Jeep Wisata Bromo", "Tour Leader Bromo", "Dokumentasi Wisata Bromo", "Foto Video Drone Bromo", "Makan di Bromo", "Meeting Point Bromo", "Rest Area Sekar Pajang", "Terminal Salaman", "Teseh Tempuran Pakelan", "Artos", "PMI Muntilan", "Fly Over Jombor", "Paket Wisata Murah Bromo", "Biro Wisata Terbaik Magelang", "Rental Mobil Jogja", "Rental Mobil Semarang", "Rental Mobil Solo", "Jasa Event Organizer Magelang", "Jasa Wedding Organizer Magelang", "Manajemen Artis Magelang"],
  other: {
    seobility: '8f913b529fd27a93539c4f970ab452b1'
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },

  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    title: 'Event organizer dan Biro Perjalanan Wisata Jawa Tengah',
    description: 'Ahli dalam Event Organizer dan Biro Perjalanan Wisata, CV Elegan Prima Mandiri, Priyo Oemar Bakrie, Biro Perjalanan Wisata Magelang, Sewa Hiace, Outbound, Open trip Bromo, Wisata Antar Pulau',
    url: 'https://cveleganprimamandiri.vercel.app',
    siteName: 'CV Elegan Prima Magelang',
    images: [
      {
        url: 'https://cveleganprimamandiri.vercel.app/opengraph-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        <meta name="google-site-verification" content="Ugfk2Cb-kOIM3mlmaDR8nkUXt8kp4VOZ3_OPGroqQi8" />
      </Head>
      <body className={inter.className}>
        <header>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden w-full text-gray-600 md:flex md:items-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                </svg>
                <span className="mx-1 text-sm">Magelang</span>
              </div>
              <h1 className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                CV Elegan Prima Mandiri
              </h1>
              <div className="flex items-center justify-end w-full">
                <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>

                <div className="flex sm:hidden">
                  <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
              <div className="flex flex-col sm:flex-row">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
              </div>
            </nav>
            <div className="relative mt-6 max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>

              <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-200 mt-auto">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center flex-col sm:flex-row">
            <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">&copy; CV Elegan Prima Mandiri</a>
            <p className="py-2 text-gray-500 sm:py-0">Monglong Margoyoso Salaman Magelang</p>
          </div>
          <div className="container mx-auto px-6 py-3 flex justify-between items-center flex-col sm:flex-row">
            <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">eleganprimamandiri@gmail.com</a>
            <p className="py-2 text-gray-500 sm:py-0">+62 813 2929 5252</p>
          </div>
          <div className="container mx-auto px-6 py-3 flex justify-between items-center flex-col sm:flex-row">
            <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">Ikuti kami</a>
            <p className="py-2 text-gray-500 sm:py-0">@cveleganprima</p>
          </div>
          <div className="container mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-gray-500 text-sm">
              <h3>CV Elegan Prima</h3>
              <h3>Priyo Oemar Bakrie</h3>
              <h3>Biro Perjalanan Wisata Magelang</h3>
              <h3>Sewa Hiace</h3>
              <h3>Outbound</h3>
              <h3>Open trip Bromo</h3>
              <h3>Wisata Antar Pulau</h3>
              <h3>Outbound Magelang</h3>
              <h3>Capacity Building Magelang</h3>
              <h3>Character Building Magelang</h3>
              <h3>Leadership Training Magelang</h3>
              <h3>Fungame Magelang</h3>
              <h3>Event Organizer Magelang</h3>
              <h3>Artis Management Magelang</h3>
              <h3>Wedding Organizer Magelang</h3>
              <h3>Rent Car Magelang</h3>
              <h3>Harga Sewa Mobil Magelang</h3>
              <h3>Outbound Jogja</h3>
              <h3>Outbound Semarang</h3>
              <h3>Outbound Solo</h3>
              <h3>Paket Wisata Bromo</h3>
              <h3>Paket Wisata Gunung Bromo</h3>
              <h3>Tour Gunung Bromo</h3>
              <h3>Sunrise Point Bromo</h3>
              <h3>Bukit Teletabis Bromo</h3>
              <h3>Pasir Berbisik Bromo</h3>
              <h3>Padang Savana Bromo</h3>
              <h3>Hiace Sewa Magelang</h3>
              <h3>Tiket Wisata Bromo</h3>
              <h3>Jeep Wisata Bromo</h3>
              <h3>Tour Leader Bromo</h3>
              <h3>Dokumentasi Wisata Bromo</h3>
              <h3>Foto Video Drone Bromo</h3>
              <h3>Makan di Bromo</h3>
              <h3>Meeting Point Bromo</h3>
              <h3>Rest Area Sekar Pajang</h3>
              <h3>Terminal Salaman</h3>
              <h3>Teseh Tempuran Pakelan</h3>
              <h3>Artos</h3>
              <h3>PMI Muntilan</h3>
              <h3>Fly Over Jombor</h3>
              <h3>Paket Wisata Murah Bromo</h3>
              <h3>Biro Wisata Terbaik Magelang</h3>
              <h3>Rental Mobil Jogja</h3>
              <h3>Rental Mobil Semarang</h3>
              <h3>Rental Mobil Solo</h3>
              <h3>Jasa Event Organizer Magelang</h3>
              <h3>Jasa Wedding Organizer Magelang</h3>
              <h3>Manajemen Artis Magelang</h3>
            </div>
          </footer>
        </body>
    </html>
  );
}
