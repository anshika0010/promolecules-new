import Blogs from "@/components/Blogs";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/TestimonialsSection";
import TrendingCategory from "@/components/TrendingCategory";
import UltraHighPerformanceSection from "@/components/UltraHighPerformanceSection";
import WarningTape from "@/components/WarningTape";
import WhoWeAreSection from "@/components/WhoWeAreSection";

export const metadata = {
  title: "Promolecules | Premium Preworkout & Supplements",
  description:
    "Buy high-performance pre workout supplements created by the makers of Warflex. Premium sports nutrition available online in UAE, Russia, India and worldwide at the best prices.",
  metadataBase: new URL("https://www.promolecules.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Promolecules | Premium Preworkout & Supplements",
    description:
      "Buy high-performance pre workout supplements created by the makers of Warflex.",
    url: "https://www.promolecules.com/",
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
    title: "Promolecules | Premium Preworkout & Supplements",
    description:
      "Buy high-performance pre workout supplements created by the makers of Warflex.",
    images: ["https://www.promolecules.com/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhoWeAreSection />
      <UltraHighPerformanceSection />
      <WarningTape />
      <TrendingCategory />
      <Blogs />
      <Testimonials />
    </>
  );
}