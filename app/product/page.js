// app/shop/page.js
import { Suspense } from "react";
import ProductListClient from "./ProductListClient";
import Preloader from "@/components/Preloader";
import { getSEOMetadata, getJSONLD } from "@/lib/seo";

export const metadata = getSEOMetadata("product");

export default function Page() {
  const jsonld = getJSONLD("product");

  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      <Suspense fallback={<div className="text-white p-10"><Preloader /></div>}>
        <ProductListClient />
      </Suspense>
    </>
  );
}