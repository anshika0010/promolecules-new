import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="-Nzqg4zKaGYSw33Qtk0AMnjC5G9iAjXDRxC1n_qQOC8"
        />
        <meta name="msvalidate.01" content="3D8DB2D729E6AD52E55F3CC39AC38797" />
        <meta name="yandex-verification" content="de6e1736200df180" />

        {/* Pinterest Verification */}
        <meta
          name="p:domain_verify"
          content="1e55fe6d40f8636b71b612318fdcb624"
        />

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LJDV8SJ');`,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LJDV8SJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PreloaderWrapper>
          <div className="pt-[50px] bg-black">
            <Navbar />

            {/* MAIN CONTENT */}
            <main id="main-content">{children}</main>

            <WhatsAppButton />
            <Footer />
          </div>
        </PreloaderWrapper>
      </body>
    </html>
  );
}