import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About Promolecules – #1 highstim PreWorkout and Supplements",
  description:
    "Learn about Promolecules, the innovators behind Warflex Preworkout. Science-backed, performance based supplements trusted across UAE, Russia, Saudi Arabia & India.",
  metadataBase: new URL("https://www.promolecules.com"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Promolecules – #1 highstim PreWorkout and Supplements",
    description:
      "Learn about Promolecules, the innovators behind Warflex Preworkout.",
    url: "https://www.promolecules.com/about",
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
    title: "About Promolecules – #1 highstim PreWorkout and Supplements",
    description:
      "Learn about Promolecules, the innovators behind Warflex Preworkout.",
    images: ["https://www.promolecules.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Promolecules",
            url: "https://www.promolecules.com/about",
            logo: "https://www.promolecules.com/logo.png",
            sameAs: [
              "https://www.instagram.com/promolecules/",
              "https://www.threads.com/@promolecules",
              "https://x.com/promolecules",
              "https://in.pinterest.com/promolecules/",
              "https://www.youtube.com/@Promolecules",
              "https://www.facebook.com/promolecules.official",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@promolecules.com",
              },
            ],
          }),
        }}
      />
        <AboutPage/>
    </>
  );
}