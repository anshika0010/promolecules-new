"use client";

import { useState } from "react";
import ReviewModal from "./ReviewModal";
import CustomerReviews from "./CustomerReviews";
import ProductDetail from "./ProductDetail";

export default function ProductPageClient({ product }) {
  const [openReview, setOpenReview] = useState(false);

  return (
    <div className="">
      <ProductDetail product={product} />

      <CustomerReviews
        reviews={product.reviews}
        openModal={() => setOpenReview(true)}
      />

      <ReviewModal
        open={openReview}
        closeModal={() => setOpenReview(false)}
      />
    </div>
  );
}