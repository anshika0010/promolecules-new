import ReturnExchangePolicy from "@/components/ReturnexchangePolicy";
 import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("returnPolicy");

 
export default function Page() {
         const jsonld = getJSONLD("returnPolicy");
    
    return (
          <>
         {jsonld && (
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: jsonld }}
         />
      )}
      <ReturnExchangePolicy/>
       </>
    )
}
  
