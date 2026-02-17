'use client';
import TrendingCategory from "@/components/TrendingCategory";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "DESCRIPTION",
    content:
      "WARFLEX™ is a high-stimulant pre-workout formula designed for serious athletes. It delivers extreme energy, enhanced focus, and explosive performance for intense training sessions.",
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
    const [selectedFlavor, setSelectedFlavor] = useState("blue");

  const flavorImages = {
    blue: "/warflexblue.png",
    grapes: "/blackgrapes.png",
    gummy: "/gummy.png",
    punch: "/fruit.png",
  };
 

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
   <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/backgroundblue.png')",
      }}
    >
      {/* Dark Overlay */}
    
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-2 text-left">
          <h2 className="text-red-500 text-6xl font-extrabold creepster-regular tracking-wider">
            WARFLEX™
          </h2>

          <div className="text-sm uppercase tracking-widest text-gray-300">
            High Stim Test Booster Preworkout <br />
            Category: Preworkout
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg">
            BUY NOW
          </button>

          {/* Flavours */}
          <div className="mt-8">
            <h3 className="text-red-500 text-6xl creepster-regular">
              FLAVOUR
            </h3>

            <ul className="space-y-2 text-gray-300 text-2xl font-bold uppercase">
              <li
                onClick={() => setSelectedFlavor("blue")}
                className={`cursor-pointer hover:text-blue-500 ${
                  selectedFlavor === "blue" && "text-blue-700"
                }`}
              >
                BLUE RASPBERRY
              </li>

              <li
                onClick={() => setSelectedFlavor("grapes")}
                className={`cursor-pointer hover:text-blue-400 ${
                  selectedFlavor === "grapes" && "text-blue-400"
                }`}
              >
                BLACK GRAPES
              </li>

              <li
                onClick={() => setSelectedFlavor("gummy")}
                className={`cursor-pointer hover:text-blue-400 ${
                  selectedFlavor === "gummy" && "text-blue-400"
                }`}
              >
                GUMMY CANDY
              </li>

              <li
                onClick={() => setSelectedFlavor("punch")}
                className={`cursor-pointer hover:text-blue-400 ${
                  selectedFlavor === "punch" && "text-blue-400"
                }`}
              >
                FRUIT PUNCH
              </li>
            </ul>
          </div>
        </div>

        {/* CENTER PRODUCT IMAGE */}
     {/* CENTER PRODUCT IMAGE */}
<div className="flex justify-center items-center relative overflow-hidden">
  <AnimatePresence >
    <motion.img
      key={selectedFlavor}
      src={flavorImages[selectedFlavor]}
      alt="Warflex"
      initial={{ x: "40vw", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-40vw", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-[900px] md:w-[900px] max-w-none "
    />
  </AnimatePresence>
</div>


        {/* RIGHT CONTENT */}
        <div className="text-white text-sm leading-relaxed space-y-2 max-w-md ml-[30px]">
          <p className="uppercase tracking-widest anton-regular  text-gray-300">
            WARFLEX™ is a powerful high stimulant pre-workout with boron
            citrate designed for advanced serious lifters seeking extreme
            energy, laser focus, explosive strength, and boosted performance
            for 8–10 hours.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="bg-black/50 border border-gray-600 px-4 py-2 text-center">
              <p className="text-xs text-gray-400">Serving Size</p>
              <p className="text-xl font-bold">35</p>
            </div>

            <div className="bg-black/50 border border-gray-600 px-4 py-2 text-center">
              <p className="text-xs text-gray-400">Scoops</p>
              <p className="text-xl font-bold">05</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Shadow */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </section>


    <section
      className="relative w-full min-h-screen bg-cover bg-center text-white py-20 px-6 md:px-16"
      style={{
        backgroundImage: "url('/candle.png')",
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
