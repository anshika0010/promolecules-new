"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
export default function ProductInformation() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "STYLE",
      content:
        "Oversized streetwear fit with bold skull graphic print. Designed for a strong and confident look.",
    },
    {
      title: "MATERIAL & CARE",
      content:
        "100% Premium Cotton. Machine wash cold. Do not bleach. Iron inside out.",
    },
    {
      title: "MEASUREMENTS",
      content:
        "Available in S, M, L, XL. Relaxed fit. Please refer to size chart for exact measurements.",
    },
    {
      title: "FEATURES & SPECS",
      content:
        "High-quality screen print, breathable fabric, durable stitching, and fade-resistant design.",
    },
  ];

    const ratings = [
    { stars: 5, count: 42 },
    { stars: 4, count: 32 },
    { stars: 3, count: 17 },
    { stars: 2, count: 4 },
    { stars: 1, count: 2 },
  ]
  const totalRatings = 98;
  return (
    <>
    <div className="w-full bg-black text-white py-16 px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest creepster-regular mb-10">
        <span className="text-white">PRODUCT </span>
        <span className="text-red-600">INFORMATION</span>
      </h2>

      {/* Accordion */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-t border-gray-700 pt-6">
            
            {/* Title Row */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg md:text-xl font-semibold tracking-wide">
                {item.title}
              </span>

              <span className="text-2xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">
                {item.content}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
     <div className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/review-bg.jpg" // put inside public/images
        alt="background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Title */}
        <h2 className="text-3xl md:text-4xl creepster-regular font-extrabold text-red-600 tracking-widest mb-6">
          LOOKING FOR SPECIAL INFO ?
        </h2>

        {/* Search Box */}
        <div className="w-full border border-gray-600 rounded-lg px-6 py-4 flex justify-between items-center text-gray-400 mb-14 backdrop-blur-md bg-black/40">
          <span className="uppercase tracking-wide text-sm md:text-base">
            Ask Rufus or search reviews and Q&A
          </span>
          <span className="text-xl">→</span>
        </div>

        {/* Customer Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-8">
              CUSTOMER REVIEWS
            </h3>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl font-bold">4.7</span>
              <FaStar className="text-yellow-400 text-xl" />
              <span className="text-gray-400 text-sm uppercase">
                Based on 98 ratings
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Rating since Dec 7, 2025
            </p>

            <p className="text-gray-500 text-sm uppercase">
              Top Brand 4.2 Rating
            </p>
          </div>

          {/* RIGHT SIDE - Progress Bars */}
          <div className="space-y-6">
            {ratings.map((item) => {
              const percentage = (item.count / totalRatings) * 100;

              return (
                <div key={item.stars} className="flex items-center gap-6">
                  
                  {/* Star Label */}
                  <span className="w-20 text-sm uppercase text-gray-300">
                    {item.stars} Stars
                  </span>

                  {/* Progress Bar */}
                  <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  {/* Count */}
                  <span className="w-8 text-sm text-gray-400 text-right">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
