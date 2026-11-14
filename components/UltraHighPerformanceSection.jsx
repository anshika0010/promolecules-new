"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

const UltraHighPerformanceSection = () => {
  const { t, lang, displayFont } = useLocale();
  // "Why athletes choose Promolecules" → two lines, split before the last word
  const cut = t.why_h.lastIndexOf(" ");
  const [whyLine1, whyLine2] = [t.why_h.slice(0, cut), t.why_h.slice(cut + 1)];
  const headingFont = displayFont;
  const images = [
    { image: "/focus.jpg" },
    { image: "/energy.jpg" },
    { image: "/strength.jpg" },
  ];
  const features = t.why.map((w, i) => ({
    id: i + 1,
    title: w.title,
    description: w.text,
    image: images[i].image,
    alt: w.title,
  }));

  return (
    <section className="relative bg-black max-w-7xl mx-auto overflow-hidden py-4  lg:py-6">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Main Title */}
        <div className="flex justify-center text-center mb-12 sm:mb-16">
          <div className="relative flex flex-col items-center">
            <h1 className={`${headingFont} heading uppercase`}>
              {whyLine1}
            </h1>

            <div className="h-1 bg-red-600  w-24 sm:w-40 md:w-60 lg:w-full max-w-[900px] rounded-full" />

            <h3 className={`${headingFont} heading uppercase`}>
              {whyLine2}
            </h3>

            <div className="h-1 bg-red-600  w-16 sm:w-24 rounded-full" />
          </div>
        </div>

        

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="group relative">
              <div className="space-y-6 text-center">
                {/* ✅ Image FIRST */}
             <motion.div
  initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mx-auto w-full max-w-2xl"
>
  <div className="relative rounded-lg">
    <div className="relative bg-black  rounded-lg">
      <div className="relative aspect-[9/12] rounded-lg overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-red-900/20 to-transparent " />
      </div>
    </div>
  </div>
</motion.div>

                {/* ✅ Title */}
                <h3
                  className={`text-white uppercase ${headingFont} text-xl sm:text-xl md:text-2xl lg:text-3xl`}
                >
                  {feature.title}
                </h3>

                {/* ✅ Description */}
                <p className="global-text-style uppercase sm:text-xs md:text-sm leading-relaxed tracking-wider max-w-xs sm:max-w-sm mx-auto font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-24 sm:h-32 bg-red-600/5 blur-[100px]" />
    </section>
  );
};

export default UltraHighPerformanceSection;
