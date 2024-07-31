import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
    default: "Event organizer dan Biro Perjalanan Wisata Jawa Tengah",
  },
  description: "Ahli dalam Event Organizer dan Biro Perjalanan Wisata",
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
