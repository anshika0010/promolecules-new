// app/about/what-we-deliver/page.js
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import WhatWeDeliverClient from "./WhatWeDeliverClient";

export const metadata = getSEOMetadata("what-we-deliver");

export default function WhatWeDeliverPage() {
  const jsonld = getJSONLD("what-we-deliver");
  return <WhatWeDeliverClient jsonld={jsonld} />;
}