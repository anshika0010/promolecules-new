'use client';
import TrendingCategory from "@/components/TrendingCategory";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDetailHero from "@/components/ProductDetailhero";

const sections = [
  {
    title: "DESCRIPTION",
    content:
      "In the world of pre-workouts, one formula has quietly gained a reputation for delivering the kind of explosive performance that cheap brands can only dream of: WARFLEX™ by Promolecules™.",
  },
  {
    title: "KEY BENEFITS",
    content:
      "• Intense long-lasting energy\n• Increased strength & endurance\n• Enhanced mental focus\n• Improved muscle pumps\n• Faster workout recovery",
  },
  {
    title: "WHY CHOOSE US",
    content:
      "Our formula includes premium-grade ingredients, clinically backed dosages, and zero unnecessary fillers. Designed for advanced lifters who demand maximum results.",
  },
  {
    title: "WHAT TO AVOID",
    content:
      "Avoid combining with other high-caffeine products. Do not exceed recommended dosage. Not suitable for beginners or individuals sensitive to stimulants.",
  },
  {
    title: "SUPPLEMENT FACTS",
    content:
      "Serving Size: 1 Scoop (5g)\nServings Per Container: 35\nCaffeine Content: High\nContains Boron Citrate and performance-enhancing compounds.",
  },
];


const WarflexHero = () => {
    const [openIndex, setOpenIndex] = useState(null);
 


  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>

<ProductDetailHero/>

    <section
      className="relative w-full min-h-screen bg-cover bg-center text-white py-20 px-6 md:px-16"
      style={{
        backgroundImage: "url('/candle.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEFT IMAGE CARD */}
          <div className=" rounded-xl shadow-2xl w-[350px]">
            <img
              src="/warflex3.png" 
              alt="Warflex"
              className="w-full object-contain"
            />
          </div>

          {/* RIGHT ACCORDION */}
        <div className="md:col-span-2 space-y-6">
  {sections.map((section, index) => (
    <div key={index} className="border-b border-gray-700 pb-4">
      <button
        onClick={() => toggleSection(index)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-red-600 creepster-regular text-3xl font-bold tracking-widest">
          {section.title}
        </span>

        <ChevronRight
          className={`transition-transform duration-300 ${
            openIndex === index ? "rotate-90" : ""
          }`}
        />
      </button>

      {openIndex === index && (
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          {section.content}
        </p>
      )}
    </div>
  ))}
</div>

        </div>

       
        <div className="mt-20 border-t border-gray-700 pt-10">
         

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-[90px] md:text-[100px] creepster-regular text-red-600 tracking-wider leading-none">
                HOW TO USE
              </h2>

              <ul className="mt-8 space-y-4 text-gray-200 font-semibold text-sm">
                <li>• BEGIN WITH ½ SCOOP IN 4–6 OZ WATER TO ASSESS TOLERANCE</li>
                <li>• AFTER TOLERANCE, TAKE 1 FULL SCOOP IN 8–10 OZ WATER</li>
                <li>• CONSUME 30 MINUTES BEFORE WORKOUT</li>
                <li>• DO NOT EXCEED 1 SCOOP PER DAY</li>
              </ul>
            </div>

            {/* RIGHT IMAGE WITH SMOKE EFFECT */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 blur-2xl"></div>

              <img
                src="/warflex2.png" // 🔥 Replace with tilted jar image
                alt="Warflex Tilted"
                className="w-[400px]  drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <TrendingCategory/>
    </>
  );
};

export default WarflexHero;
