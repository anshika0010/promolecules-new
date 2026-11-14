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
        src="/candle.webp" 
        alt="background"
        fill
        className="object-cover"
      />

 

      <div className="relative z-10 max-w-7xl mx-auto">



    
      </div>
    </div>
    </>
  );
}
