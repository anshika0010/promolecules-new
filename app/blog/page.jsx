// app/blog/page.js
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import BlogClient from "./BlogClient";

export const metadata = getSEOMetadata("blog");

export default function BlogPage() {
  const jsonld = getJSONLD("blog");
  return <BlogClient jsonld={jsonld} />;
}