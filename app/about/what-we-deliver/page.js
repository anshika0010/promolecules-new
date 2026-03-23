// app/about/what-we-deliver/page.js
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import WhatWeDeliverClient from "./WhatWeDeliverClient";

export const metadata = getSEOMetadata("whatWeDeliver");

export default function WhatWeDeliverPage() {
  const jsonld = getJSONLD("whatWeDeliver");
  return <WhatWeDeliverClient jsonld={jsonld} />;
}