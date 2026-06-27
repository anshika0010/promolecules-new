import Preworkout from "@/components/Preworkout";
import Script from "next/script";
export const metadata = {
  title:
    "High Stim Pre-Workout | Best Pre Workout Supplement for Gym - Promolecules",

  description:
    "Promolecules High Stim Pre-Workout, a powerful pre workout supplement for gym performance, energy, focus, endurance, and big muscle pumps.",

  alternates: {
    canonical: "https://www.promolecules.com/high-stim-pre-workout",
  },

  authors: [
    {
      name: "Promolecules",
      url: "https://www.promolecules.com",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "High Stim Pre-Workout | Best Pre Workout Supplement | Promolecules",

    description:
      "Take your training to the next level with Promolecules High Stim Pre-Workout. Experience explosive energy, laser focus, endurance, strength, and big muscle pumps with our advanced pre workout supplement.",

    url: "https://www.promolecules.com/high-stim-pre-workout",

    siteName: "Promolecules",

    images: [
      {
        url: "https://www.promolecules.co.in/promolecules-logo.webp",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best High Stim Pre-Workout for Energy & Big Muscle Pumps",

    description:
      "Fuel every workout with Promolecules High Stim Pre-Workout. The ultimate pre workout supplement for gym performance, focus, strength, endurance, and maximum muscle pumps.",

    images: [
      "https://www.promolecules.co.in/promolecules-logo.webp",
    ],
  },
};


export default function HighstimPage() {

  return (
    <>
     <Script
  id="organization-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Promolecules",
      url: "https://www.promolecules.com",
      logo: "https://www.promolecules.co.in/promolecules-logo.webp",
      sameAs: [
        "https://www.instagram.com/promolecules/",
        "https://www.threads.com/@promolecules",
        "https://x.com/promolecules",
        "https://in.pinterest.com/promolecules/",
        "https://www.youtube.com/@Promolecules",
        "https://www.facebook.com/mypromolecules/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@promolecules.com",
        },
      ],
    }),
  }}
/>
    <Preworkout/>
    </>
  );
}