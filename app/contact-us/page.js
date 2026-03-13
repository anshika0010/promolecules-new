import ContactheroSection from "@/components/about/ContactheroSection";

export const metadata = {
  title: "Contact Promolecules | Global Supplement Queries",
  description:
    "Contact Promolecules for orders, distributors, wholesale & support. Serving athletes in UAE, Russia, Qatar, Iran, Saudi Arabia & India with premium Warflex Preworkout.",
  metadataBase: new URL("https://www.promolecules.com"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Promolecules | Global Supplement Queries",
    description:
      "Contact Promolecules for orders, distributors, wholesale & support.",
    url: "https://www.promolecules.com/contact",
    siteName: "Promolecules",
    images: [
      {
        url: "https://www.promolecules.com/logo.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "Promolecules",
    title: "Contact Promolecules | Global Supplement Queries",
    description:
      "Contact Promolecules for orders, distributors, wholesale & support.",
    images: ["https://www.promolecules.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactheroSection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Promolecules",
            url: "https://www.promolecules.com/contact",
          }),
        }}
      />
    </>
  );
}