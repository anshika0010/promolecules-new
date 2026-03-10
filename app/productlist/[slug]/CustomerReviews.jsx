"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CustomerReviews({ openModal }) {

  const reviews = [
    {
      name: "PAUL",
      date: "03/02/25",
      rating: 5,
      title: "GREAT FOR HEALTH CONTROL.",
      text: "Since taking this I have noticed that I haven't been as hungry throughout the day. Overall, another great product",
    },
    {
      name: "ALEXIS",
      date: "03/02/25",
      rating: 5,
      title: "GLP1 CONTROL",
      text: "Control is the best name for a supplement like this, absolutely changed the game for my everyday life. If you're looking for a way to naturally keep cravings and appetite in check, I can't recommend enough.",
    },
    {
      name: "PAUL",
      date: "03/02/25",
      rating: 5,
      title: "GREAT FOR HEALTH CONTROL.",
      text: "Since taking this I have noticed that I haven't been as hungry throughout the day. Overall, another great product",
    },
    {
      name: "ALEXIS",
      date: "03/02/25",
      rating: 5,
      title: "GLP1 CONTROL",
      text: "Control is the best name for a supplement like this, absolutely changed the game for my everyday life. If you're looking for a way to naturally keep cravings and appetite in check, I can't recommend enough.",
    },
  ];

  const ratingBars = [
    { label: "5 STARS", value: 42, percent: 90 },
    { label: "4 STARS", value: 32, percent: 80 },
    { label: "3 STARS", value: 17, percent: 35 },
    { label: "2 STARS", value: 4, percent: 10 },
    { label: "1 STARS", value: 2, percent: 8 },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">

      {/* TITLE */}
      <h2 className="text-red-600 text-4xl font-extrabold tracking-wide mb-10">
        CUSTOMER REVIEWS
      </h2>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl font-bold">4.4</span>

            <div className="flex text-red-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <span className="text-gray-400 uppercase text-sm">
              Based on 98 Ratings
            </span>
          </div>

          <p className="text-gray-500 text-sm mb-1">
            Rating since Dec 7, 2025
          </p>

          <p className="text-gray-400 text-sm mb-8">
            Top brand 4.2 rating
          </p>

          <button
      onClick={openModal}
      className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
    >
      Write a Review
    </button>

        </div>

        {/* RIGHT SIDE RATING BARS */}
        <div className="space-y-4">

          {ratingBars.map((item, i) => (
            <div key={i} className="flex items-center gap-4">

              <span className="w-20 text-sm text-gray-300">
                {item.label}
              </span>

              <div className="flex-1 bg-gray-700 h-3 rounded">
                <div
                  className="bg-red-600 h-3 rounded"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>

              <span className="text-sm text-gray-400 w-6">
                {item.value}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* REVIEW LIST */}
      <div className="mt-16 border-t border-gray-800">

        {reviews.map((review, i) => (
          <div key={i} className="py-10 border-b border-gray-800">

            <p className="font-bold">{review.name}</p>

            <p className="text-gray-400 text-sm mb-3">
              {review.date}
            </p>

            <div className="flex gap-1 mb-3 text-red-600">
              {[...Array(review.rating)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="font-bold uppercase mb-2 text-gray-200">
              {review.title}
            </p>

            <p className="text-gray-400 text-sm max-w-4xl leading-relaxed">
              {review.text}
            </p>

          </div>
        ))}

      </div>

      {/* LOAD MORE BUTTON */}
 <div className="flex justify-center mt-12">
           <Link href={"#"}>
             <button className="flex items-center cursor-pointer gap-3 bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold px-7 py-2 rounded-full transition-all duration-300 text-sm tracking-widest group">
               <span>VIEW MORE...</span>
               <div className="bg-red-600 group-hover:bg-white p-1 rounded-full transition-colors">
                 <ChevronRight
                   size={18}
                   className="text-white group-hover:text-red-600"
                 />
               </div>
             </button>
           </Link>
         </div>

    </section>
  );
}