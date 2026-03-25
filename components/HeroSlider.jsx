"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    productImage: "/thermo.webp",
    title: "Inopower-r",
    backgroundImage: "/promolecules-inpower-r-banner.webp",
    link: "/product/inopower-r/",
    description:
      "INOPOWER-R:Clean energy without caffeine dependency Built on ATP energy system Supports endurance at cellular level.",
  },
  {
    id: 2,
    productImage: "/father-of-insane-pre-workout-65-Servings.webp",
    title: "FATHER OF INSANE",
    backgroundImage: "/father-of-insane-pre-workout-banner.webp",
    link: "/product/father-of-insane/",
    description:
      "Promolecules' Father of Insane is an extremely high-stim pre-workout supplement that offers incredible energy, explosive strength, laser-like focus, and incredible endurance.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[50vh] lg:min-h-[100vh] w-full overflow-hidden pt-4">
      {/* Background */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={slides[currentSlide].backgroundImage}
          alt="Background"
          width={1200}
          height={600}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Product Image */}
            <div className="relative h-[100px] sm:h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden"></div>

            {/* Content */}
            <div className="space-y-4 text-center anton-regular font-extrabold lg:text-left">
              <motion.h1
                key={currentSlide}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl creepster-regular sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <p className="hidden md:block  global-text-style    max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                {slides[currentSlide].description}
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href={slides[currentSlide].link}
                  className="group flex items-center gap-2 bg-black border-2 border-white/30 hover:border-white/60 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-white/5"
                >
                  <span className="font-bold text-sm tracking-wider">
                    BUY NOW
                  </span>
                  <div className="bg-white/20 group-hover:bg-white/30 p-2 rounded-full transition-colors">
                    <ChevronRight size={14} />
                  </div>
                </Link>
              </div>

    {/* Mini Slides */}
<div className="pt-3 lg:pt-10 space-y-4">
  {slides.map(
    (slide, index) =>
      index !== currentSlide && (
        <div
          key={slide.id}
          onClick={() => setCurrentSlide(index)}
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex flex-row items-center gap-3 sm:gap-4 rounded-xl rounded-l-full bg-white/10 backdrop-blur-md px-3 sm:px-5 py-3 sm:py-4 shadow-lg">
            
            {/* Image - Left Side */}
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ml-2">
              <Image
                src={slide.productImage}
                alt={slide.title}
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            {/* Text - Right Side */}
            <div className="flex-1 min-w-0">
              <p className="global-text-style line-clamp-2 text-left text-xs sm:text-sm md:text-base leading-relaxed">
                {slide.description}
              </p>
            </div>

          </div>
        </div>
      ),
  )}
</div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
