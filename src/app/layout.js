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
  openGraph: {
    title: 'Event organizer dan Biro Perjalanan Wisata Jawa Tengah',
    description: 'Ahli dalam Event Organizer dan Biro Perjalanan Wisata',
    url: 'https://cveleganprimamandiri.vercel.app',
    siteName: 'CV Elegan Prima Magelang',
    images: [
      {
        url: 'https://cveleganprimamandiri.vercel.app/opengraph.png', // Must be an absolute URL
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
