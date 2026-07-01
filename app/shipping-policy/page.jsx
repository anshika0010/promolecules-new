import ShippingPolicy from "@/components/ShippingPolicy";
 import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("shippingPolicy");
export default function Page() {
     const jsonld = getJSONLD("shippingPolicy");
    return (
       <>
         {jsonld && (
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: jsonld }}
         />
      )}
       <ShippingPolicy/>
       </>
    )
}
  
