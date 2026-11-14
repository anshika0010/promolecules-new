import AboutBanner from "@/components/about/AboutBanner";
import AboutIntro from "@/components/about/AboutIntro";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
export const metadata = getSEOMetadata("about");


export default function Page() {
   const jsonld = getJSONLD("about");
  return (
    <>


       {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      
        <AboutBanner />
        <AboutIntro />
    </>
  );
}