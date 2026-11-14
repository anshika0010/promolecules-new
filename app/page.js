import Blogs from "@/components/Blogs";
import HomeFAQ from "@/components/HomeFAQ";
import TrainingTips from "@/components/TrainingTips";
import CountryHero from "@/components/CountryHero";
import PromoleculesSection from "@/components/PromoleculesSection";
import Testimonials from "@/components/TestimonialsSection";
import TrendingCategory from "@/components/TrendingCategory";
import UltraHighPerformanceSection from "@/components/UltraHighPerformanceSection";
import WarningTape from "@/components/WarningTape";
import QuickAnswer from "@/components/QuickAnswer";
import ProductRange from "@/components/ProductRange";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

// ✅ Yeh Next.js automatically <head> mein inject kar deta hai
export const metadata = getSEOMetadata("home");

export default function Home() {
  const jsonld = getJSONLD("home");



  return (
    <>
      {/* ✅ JSON-LD Structured Data (Google ke liye) */}
      {jsonld && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />
    )}

      <CountryHero />
      <QuickAnswer />
      <ProductRange />
      <UltraHighPerformanceSection />
      {/* <WarningTape /> */}
      {/* <TrendingCategory /> */}
      <TrainingTips />
      <Blogs/>
      <HomeFAQ />
      {/* <Testimonials /> */}
      {/* <PromoleculesSection/>s */}
    </>
  );
}