import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Promolecules",
  description: "promolecules",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Creepster&family=Permanent+Marker&display=swap"
    rel="stylesheet"
  />
</head>
      <body
        className={` ${geistMono.variable} antialiased`}
      >
        <div className="pt-[50px] bg-black">        <Navbar/>
        {children}
        <Footer/>
        </div>
 
      </body>
    </html>
  );
}
