"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WarflexHero() {
  const [selectedFlavor, setSelectedFlavor] = useState("blue");

  const flavorData = {
    blue: {
      name: "BLUE RASPBERRY",
      image: "/warflexblue.png",
    },
    grapes: {
      name: "BLACK GRAPES",
      image: "/blackgrapes.png",
    },
    gummy: {
      name: "GUMMY CANDY",
      image: "/gummy.png",
    },
    punch: {
      name: "FRUIT PUNCH",
      image: "/fruit.png",
    },
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/backgroundblue.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* IMAGE LAYER (Behind Text) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
        <AnimatePresence >
          <motion.img
            key={selectedFlavor}
            src={flavorData[selectedFlavor].image}
            alt="Warflex Product"
              priority
            initial={{ x: "120vw", scale: 0.9, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            exit={{ x: "-150vw", scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute w-[700px] sm:w-[850px] md:w-[1000px] lg:w-[1150px]  "
          />
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-4 text-left">
          <h2 className="text-red-500 text-5xl sm:text-6xl md:text-7xl font-extrabold creepster-regular tracking-wider">
            WARFLEX™
          </h2>

          <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
            High Stim Test Booster Preworkout <br />
            Category: Preworkout
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg">
            BUY NOW
          </button>

          {/* FLAVOURS */}
          <div className="mt-8">
            <h3 className="text-red-500 text-4xl sm:text-5xl creepster-regular">
              FLAVOUR
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg sm:text-xl md:text-2xl font-bold uppercase">
              {Object.entries(flavorData).map(([key, value]) => (
                <li
                  key={key}
                  onClick={() => setSelectedFlavor(key)}
                  className={`cursor-pointer transition duration-300 hover:text-blue-400 ${
                    selectedFlavor === key && "text-blue-500"
                  }`}
                >
                  {value.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div />

        {/* RIGHT CONTENT */}
        <div className="text-white text-sm leading-relaxed space-y-4 max-w-md justify-self-end text-right">

          <p className="uppercase pl-10 tracking-widest anton-regular text-gray-300 text-xs sm:text-sm">
            WARFLEX™ is a powerful high stimulant pre-workout with boron
            citrate designed for advanced serious lifters seeking extreme
            energy, laser focus, explosive strength, and boosted performance
            for 8–10 hours.
          </p>

          <div className="flex items-center gap-4 mt-8 justify-end">
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
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  );
}