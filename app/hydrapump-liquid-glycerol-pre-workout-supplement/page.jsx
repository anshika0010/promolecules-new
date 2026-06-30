import BenefitsSection from "@/components/hydrapump/BenefitsSection";
import FaqSection from "@/components/hydrapump/FaqSection";
import HeroSlider from "@/components/hydrapump/HeroSlider";
import HydraPumpHero from "@/components/hydrapump/HydraPumpHero";
import ImageContentSection from "@/components/hydrapump/ImageContentSection";
import Slider from "@/components/hydrapump/Slider";

export const metadata = {
  title: "HydraPump+ Liquid Glycerol Pre Workout Supplement | Promolecules",
  description:
    "HydraPump+ by Promolecules is an advanced Liquid Glycerol Pre Workout Supplement with 10g Liquid Glycerol, 3g Citrulline Malate & electrolytes for rapid hydration, extreme muscle pumps, better endurance, nitric oxide support, improved blood flow, and zero sugar performance.",

  alternates: {
    canonical:
      "https://www.promolecules.com/hydrapump-liquid-glycerol-pre-workout-supplement",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Promolecules",
      url: "https://www.promolecules.com",
    },
  ],

  openGraph: {
    title:
      "HydraPump+ Liquid Glycerol Pre Workout | Maximum Hydration & Extreme Muscle Pumps",
    description:
      "Train harder with HydraPump+™ featuring 10g Liquid Glycerol, 3000mg Citrulline Malate, and advanced electrolytes. Experience rapid hydration, explosive muscle pumps, enhanced endurance, improved blood flow, zero sugar, and zero bloating. Available in 8 delicious flavours.",
    url: "https://www.promolecules.com/hydrapump-liquid-glycerol-pre-workout-supplement",
    siteName: "Promolecules",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://www.promolecules.co.in/promolecules-logo.webp",
        width: 1200,
        height: 630,
        alt: "HydraPump+ Liquid Glycerol Pre Workout",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "HydraPump+™ Liquid Glycerol Pre Workout Supplement | Promolecules",
    description:
      "HydraPump+ delivers rapid hydration, extreme muscle pumps, nitric oxide support, and longer endurance with 10g Liquid Glycerol, Citrulline Malate, and electrolytes.",
    images: [
      "https://www.promolecules.co.in/promolecules-logo.webp",
    ],
  },
};

export default function HighstimPage() {
  return (
    <>
      <HeroSlider />
      <HydraPumpHero />
      <BenefitsSection />
      <Slider />
      <ImageContentSection />
      <FaqSection />
    </>
  );
}