// app/product/page.js
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import ProductClient from "./ProductClient";

export const metadata = getSEOMetadata("shop");

export default function ProductPage() {
  const jsonld = getJSONLD("shop");
  return <ProductClient jsonld={jsonld} />;
}