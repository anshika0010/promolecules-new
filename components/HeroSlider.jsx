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
    title: "Thermo-nuke-xt",
    backgroundImage: "/promolecules-thermo-nuke-xt.webp",
    link: "/product/thermo-nuke-xt/",
    description:
      "Burn stubborn fat faster with thermogenic power, boost metabolism, increase sweat, maintain energy, and dominate cutting phase workouts daily.",
  },
  {
    id: 2,
    productImage: "/hydra.webp",
    title: "Hydrapump+",
    backgroundImage: "/promolecules-hydrapump-img.webp",
    link: "/product/hydrapump/",
    description:
      "Experience liquid glycerol pump, extreme muscle fullness, rapid hydration, enhanced vascularity, and endurance without caffeine for peak performance every workout",
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
    
    {/* Background - Full Screen */}
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2"  
    >
      <Image
        src={slides[currentSlide].backgroundImage}
        alt="Background"
        fill        
        priority
        className="object-cover"
      />
    </motion.div>
      {/* Hero Content */}
      <div className="relative z-10 flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Product Image */}
            <div className="relative h-[100px] sm:h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden"></div>

            {/* Content */}
            <div className="space-y-4 text-center anton-regular font-extrabold lg:text-left">
              <motion.p
                key={currentSlide}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl creepster-regular sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white "
              >
                {slides[currentSlide].title}
              </motion.p>

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
<div className="pt-3 lg:pt-10 space-y-3">
  {slides.map(
    (slide, index) =>
      index !== currentSlide && (
        <div
          key={slide.id}
          onClick={() => setCurrentSlide(index)}
          className="cursor-pointer transition-all duration-300 active:scale-95 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3 pr-4 rounded-r-2xl rounded-l-full border border-white/15 bg-white/7 backdrop-blur-md">
            
            {/* Circular Image */}
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 bg-white/10 overflow-hidden">
              <Image
                src={slide.productImage}
                alt={slide.title}
                fill
                priority
                className="object-contain p-1.5"
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0 py-3">
              <p className="creepster-regular text-red-500 text-sm sm:text-base font-bold uppercase tracking-wide truncate">
                {slide.title}
              </p>
              <p className="text-white/55 text-[11px] sm:text-xs leading-snug line-clamp-2 mt-0.5">
                {slide.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
              <ChevronRight size={12} className="text-white/60" />
            </div>

          </div>
        </div>
      )
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
