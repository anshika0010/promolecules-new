// app/about/history/page.js
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import HistoryClient from "./HistoryClient";

export const metadata = getSEOMetadata("history");

export default function HistoryPage() {
  const jsonld = getJSONLD("history");
  return <HistoryClient jsonld={jsonld} />;
}