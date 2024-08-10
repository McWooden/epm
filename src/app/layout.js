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
  description: "Ahli dalam Event Organizer dan Biro Perjalanan Wisata",
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
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    title: 'Event organizer dan Biro Perjalanan Wisata Jawa Tengah',
    description: 'Ahli dalam Event Organizer dan Biro Perjalanan Wisata',
    url: 'https://cveleganprimamandiri.vercel.app',
    siteName: 'CV Elegan Prima Magelang',
    images: [
      {
        url: 'https://cveleganprimamandiri.vercel.app/opengraph-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="Ugfk2Cb-kOIM3mlmaDR8nkUXt8kp4VOZ3_OPGroqQi8" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
