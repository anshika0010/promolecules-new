"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UltraHighPerformanceSection = () => {
  const features = [
    {
      id: 1,
      title: " FOCUS",
      description:
        "RAZOR FOCUS IS A HEIGHTENED LEVEL OF MENTAL SHARPNESS THAT IMPROVES CONCENTRATION, DECISION-MAKING, AND COGNITIVE EXECUTION DURING PEAK PERFORMANCE.",
      image: "/skeleton1.png",
      alt: "Razor Focus Skeleton",
    },
    {
      id: 2,
      title: " ENERGY",
      description:
        "EXTREME ENERGY IS A HIGH-INTENSITY SURGE OF POWER DESIGNED TO MAXIMIZE STRENGTH, ENDURANCE, FOCUS, AND PERFORMANCE WHEN THE BODY DEMANDS MORE.",
      image: "/skeleton2.png",
      alt: "Extreme Energy Skeleton",
    },
    {
      id: 3,
      title: "STREGNTH ",
      description:
        "STRENGTH & STAMINA REFERS TO THE COMBINED CAPACITY TO GENERATE MAXIMUM FORCE WHILE SUSTAINING PHYSICAL EFFORT OVER EXTENDED PERIODS.",
      image: "/skeleton3.png",
      alt: "Strength and Stamina Anatomy",
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">

        {/* Main Title */}
        <div className="flex justify-center text-center mb-12 sm:mb-16">
          <div className="relative flex flex-col items-center">

            <h2

              className="creepster-regular text-red-600 
              text-3xl 
              sm:text-5xl 
              md:text-6xl 
              lg:text-7xl 
              xl:text-8xl 
              leading-tight"
            >
              ULTRA-HIGH-PERFORMANCE
            </h2>

            <div className="h-1 bg-red-600 mt-2 w-24 sm:w-40 md:w-60 lg:w-full max-w-[900px] rounded-full" />

            <h2
              className="creepster-regular text-red-600 
              text-3xl 
              sm:text-5xl 
              md:text-6xl 
              lg:text-7xl 
              xl:text-8xl 
              mt-2"
            >
              FORMULA
            </h2>

            <div className="h-1 bg-red-600 mt-3 w-16 sm:w-24 rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">

          {features.map((feature) => (
            <div key={feature.id} className="group relative">

              <div className="space-y-6 text-center">

                {/* Feature Title */}
                <h3
                  className="text-white uppercase creepster-regular 
                  text-2xl 
                  sm:text-3xl 
                  md:text-4xl 
                  lg:text-5xl"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-[10px] sm:text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-xs sm:max-w-sm mx-auto font-light">
                  {feature.description}
                </p>

                {/* Image Card */}
               <motion.div
  initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md"
>
                  <div className="relative px-6 sm:px-10 lg:px-16 rounded-lg">
                    <div className="relative bg-black p-1 rounded-lg">

                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          className="object-contain transition-all duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-red-900/20 to-transparent mix-blend-multiply" />
                      </div>

                    </div>
                  </div>

                </motion.div>

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
