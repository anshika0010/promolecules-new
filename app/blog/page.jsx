import BlogServer from "./BlogServer";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";
export const metadata = getSEOMetadata("blog");
export default function BlogPage() {
     const jsonld = getJSONLD("blog");
    
  return <>
  
     {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
  <BlogServer /> </>;
}