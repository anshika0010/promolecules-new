"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CustomerReviews({ reviews }) {
  const [visibleCount, setVisibleCount] = useState(5); // show 5 reviews initially

  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-white p-10">No reviews found for this product.</p>
    );
  }

  const ratingBars = [
    { label: "5 STARS", value: 42, percent: 90 },
    { label: "4 STARS", value: 32, percent: 80 },
    { label: "3 STARS", value: 17, percent: 35 },
    { label: "2 STARS", value: 4, percent: 10 },
    { label: "1 STARS", value: 2, percent: 8 },
  ];

  const handleLoadMore = () => {
    setVisibleCount(reviews.length); // show all reviews
  };

  return (
    <section className="bg-black text-white py-16 px-3 lg:px-2 max-w-7xl mx-auto">
      {/* TITLE */}
      <h2 className="text-red-600 text-4xl md:text-6xl font-extrabold creepster-regular tracking-wide mb-10">
        CUSTOMER REVIEWS
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div>
         <div className="flex items-center gap-4 mb-1">
  <span className="text-5xl font-bold">4.5</span>

  <div className="flex text-red-600">
    {[...Array(5)].map((_, i) => {
      if (i < 4) {
        // Full star
        return <Star key={i} size={20} fill="currentColor" />;
      } else {
        // Half star using SVG clip
        return (
          <span key={i} className="relative inline-block" style={{ width: 20, height: 20 }}>
            {/* Empty star (background) */}
            <Star size={20} className="text-gray-600" fill="currentColor" />
            {/* Half filled star (foreground, clipped to left 50%) */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: "50%" }}
            >
              <Star size={20} fill="currentColor" className="text-red-600" />
            </span>
          </span>
        );
      }
    })}
  </div>

  <span className="text-gray-400 uppercase text-sm">
    Based on {reviews.length} Ratings
  </span>
</div>

          <p className="text-gray-500 text-sm mb-1">Rating since Dec 7, 2025</p>

          <p className="text-gray-400 text-sm mb-8">Top other brand 4.2 rating</p>
          {/* <Link
            href="https://cost2costsupplement.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 cursor-pointer">
              Write a Review
            </button>
          </Link> */}
        </div>

        {/* RIGHT SIDE RATING BARS */}
        <div className="space-y-4">
          {ratingBars.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-300">{item.label}</span>
              <div className="flex-1 bg-gray-700 h-3 rounded">
                <div
                  className="bg-red-600 h-3 rounded"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 w-6">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEW LIST */}
      <div className="mt-3 border-t border-gray-800">
        {reviews.slice(0, visibleCount).map((review, i) => (
          <div key={i} className="py-3 border-b border-gray-800">
            <p className="font-bold">{review.name}</p>
            <p className="text-gray-400 text-sm mb-1">{review.date}</p>

            <div className="flex gap-1 mb-1 text-red-600">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="font-bold mb-1 text-gray-200">
              {review.country}
            </p>
            <p className="text-gray-400 text-sm max-w-4xl leading-relaxed">
              {review.des}
            </p>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < reviews.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="flex items-center cursor-pointer gap-3 bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold px-7 py-2 rounded-full transition-all duration-300 text-sm tracking-widest group"
          >
            <span>VIEW MORE...</span>
            <div className="bg-red-600 group-hover:bg-white p-1 rounded-full transition-colors">
              <ChevronRight
                size={18}
                className="text-white group-hover:text-red-600"
              />
            </div>
          </button>
        </div>
      )}
    </section>
  );
}
