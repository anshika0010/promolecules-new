"use client";

import { useState } from "react";

export default function ReviewModal({ open, closeModal }) {

  const [rating, setRating] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[90%] md:w-[500px] p-6 rounded-xl relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-2 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Write a Review</h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />

          {/* Rating */}
          <div className="flex gap-2 text-2xl">
            {[1,2,3,4,5].map((star)=>(
              <span
                key={star}
                onClick={()=>setRating(star)}
                className={`cursor-pointer ${star <= rating ? "text-yellow-500":"text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            rows="4"
            className="w-full border p-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded"
          >
            Submit Review
          </button>

        </form>

      </div>
    </div>
  );
}