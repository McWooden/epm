import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://epm-three.vercel.app'),
  title: {
    template: "%s - Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
    default: "Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
  },
  description: "Ahli dalam Event Organizer dan Biro Perjalanan Wisata",
  twitter: {
    card: 'summary_large_image'
  },
  verification: {
    google: 'Ugfk2Cb-kOIM3mlmaDR8nkUXt8kp4VOZ3_OPGroqQi8',
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
