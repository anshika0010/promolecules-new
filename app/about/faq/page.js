// app/about/faq/page.js  ← yeh file replace karo
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import FAQClient from "./FAQClient"; 

export const metadata = getSEOMetadata("faq");

export default function Page() {
  const jsonld = getJSONLD("faq");
  return <FAQClient jsonld={jsonld} />;
}