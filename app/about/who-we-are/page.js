// app/about/who-we-are/page.js
import HeroSection from "@/components/about/HeroSection";
import MoreInformationSection from "@/components/about/MoreInformationSection";
import PerformanceShowcase from "@/components/about/PerformanceShowcase";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("who-we-are");

export default function Page() {
  const jsonld = getJSONLD("who-we-are");

  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      <HeroSection />
      <PerformanceShowcase />
      <MoreInformationSection />
    </>
  );
}