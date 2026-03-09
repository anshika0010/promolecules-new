"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import productsData from "@/data/productsdetail.json";
import ReviewModal from "./ReviewModal";
import CustomerReviews from "./CustomerReviews";
import ProductDetail from "./ProductDetail";

export default function ProductPage() {
  const [openReview, setOpenReview] = useState(false);

  const params = useParams();

  const product = productsData.products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return <div className="text-white p-10">Product Not Found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />

      <CustomerReviews openModal={() => setOpenReview(true)} />

      <ReviewModal
        open={openReview}
        closeModal={() => setOpenReview(false)}
      />
    </div>
  );
}