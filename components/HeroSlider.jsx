"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      productImage: "/thermo.png",
      title: "Thermo Nuke-XT",
      link: "https://www.cost2costsupplement.com/product/thermo-nuke-xt/",
      description:
        "THERMONUKE-R® BY PROMOLECULES™ IS A RUSSIAN INSPIRED PERFORMANCE FORMULA CREATED TO DRAMATICALLY ENHANCE ATP PRODUCTION, REDUCE FATIGUE, ACCELERATE OVERALL ATHLETIC OUTPUT.",
    },
    {
      id: 2,
      productImage: "/fatherofinsane.png",
      title: "FATHER OF INSANE",
      link: "https://www.cost2costsupplement.com/product/promolecules-father-of-insane/",
      description:
        "FATHER OF INSANE BY PROMOLECULES™ IS AN ULTRA HIGH-STIMULANT PRE-WORKOUT DESIGNED FOR EXPERIENCED ATHLETES WHO DEMAND EXTREME ENERGY, EXPLOSIVE STRENGTH, INTENSE FOCUS, AND UNSTOPPABLE ENDURANCE.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-10">
      {/* Background */}
      <div className="absolute flex items-center justify-center inset-0 z-0">
        <Image
          src="/heroimage.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10  flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 w-full">
          {/* Responsive Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-center">
            {/* Product Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden">
              <motion.div
                key={currentSlide} 
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1], 
                }}
              >
                <Image
                  src={slides[currentSlide].productImage}
                  alt={slides[currentSlide].title}
                  width={500}
                  height={600}
                  className="object-contain h-[350px] sm:h-[480px] lg:h-[580px] mt-10 lg:mt-20 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-3 text-center anton-regular font-extrabold lg:text-left">
              <motion.h1
                key={currentSlide}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1], 
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase anton-regular font-black text-white leading-tight lg:leading-none"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <p className="text-white/90 creepster-regular text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl lg:max-w-4xl mx-auto lg:mx-0 tracking-wide">
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
              <div className="pt-6 lg:pt-4 lg:mt-44 space-y-4">
                {slides.map(
                  (slide, index) =>
                    index !== currentSlide && (
                      <div
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl bg-white/10 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 shadow-lg rounded-tl-full">
                          <div className="w-20 sm:w-28 bg-white/20 rounded-tl-full flex items-center justify-center pl-6 sm:pl-14 pt-2 sm:pt-4">
                            <Image
                              src={slide.productImage}
                              alt={slide.title}
                              width={120}
                              height={150}
                              className="object-contain"
                            />
                          </div>

                          <div className="flex-1 text-center sm:text-right">
                            <p className="text-white text-xs sm:text-sm uppercase tracking-wide line-clamp-3">
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
