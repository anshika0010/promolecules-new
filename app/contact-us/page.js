// app/contact-us/page.js
import ContactheroSection from "@/components/about/AboutheroSection";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("contact");

export default function ContactPage() {
  const jsonld = getJSONLD("contact");

  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      <ContactheroSection />
    </>
  );
}