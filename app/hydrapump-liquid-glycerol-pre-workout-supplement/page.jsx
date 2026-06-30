import BenefitsSection from "@/components/hydrapump/BenefitsSection";
import FaqSection from "@/components/hydrapump/FaqSection";
import HeroSlider from "@/components/hydrapump/HeroSlider";
import HydraPumpHero from "@/components/hydrapump/HydraPumpHero";
import ImageContentSection from "@/components/hydrapump/ImageContentSection";
import Slider from "@/components/hydrapump/Slider";


export default function HighstimPage() {

  return (
<>
<HeroSlider/>
<HydraPumpHero/>
    <BenefitsSection/>
  <Slider/>
  <ImageContentSection/>
  <FaqSection/>
    </>
  );
}