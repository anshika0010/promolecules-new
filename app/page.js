import BlogsAndTestimonials from "@/components/BlogsSection";
import HeroSlider from "@/components/HeroSlider";
import NewsletterSection from "@/components/NewsletterSection";
import TrendingCategory from "@/components/TrendingCategory";
import UltraHighPerformanceSection from "@/components/UltraHighPerformanceSection";
import WarningTape from "@/components/WarningTape";
import WhoWeAreSection from "@/components/WhoWeAreSection";



export default function Home() {
  return (
    <>
      <HeroSlider/>
      <WhoWeAreSection />
      <UltraHighPerformanceSection />
      <WarningTape/>
      <TrendingCategory/>
      <BlogsAndTestimonials />
      <NewsletterSection />
    </>
  );
}
