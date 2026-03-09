import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import WhatsAppButton from "@/components/WhatsAppButton";

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

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="-Nzqg4zKaGYSw33Qtk0AMnjC5G9iAjXDRxC1n_qQOC8"
        />

        {/* Pinterest Verification */}
        <meta
          name="p:domain_verify"
          content="1e55fe6d40f8636b71b612318fdcb624"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Creepster&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSW5C2PC');`,
          }}
        />
      </head>

      <body className={`${geistMono.variable} antialiased`}>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSW5C2PC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="pt-[50px] bg-black">
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </div>

      </body>
    </html>
  );
}