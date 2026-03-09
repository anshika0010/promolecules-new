import Blogs from "@/components/Blogs";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/TestimonialsSection";
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
      <Blogs/>
      <Testimonials/>
    
    </>
  );
}
