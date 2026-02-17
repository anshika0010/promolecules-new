"use client";
import { motion } from "framer-motion";

import React from "react";
import { ArrowRight } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="relative min-h-[300px] bg-black flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/dark-candle.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-4 space-y-16 sm:space-y-24 lg:space-y-64 text-center lg:text-left">

            <div className="max-w-[380px] mx-auto lg:mx-0">
              <p className="text-white/90 text-xs sm:text-sm leading-[1.6] tracking-[0.08em] font-bold uppercase transition-all duration-300 hover:scale-[1.07] hover:text-white">
                PROMOLECULES™ is a performance-driven supplement brand created for
                those who demand more from their body. We combine science-backed
                formulations...
              </p>
            </div>

            <div className="max-w-[280px] mx-auto lg:mx-0 lg:ml-16">
              <p className="text-white/90 text-xs sm:text-xs leading-[1.6] tracking-[0.08em] font-bold uppercase transition-all duration-300 hover:scale-[1.07] hover:text-white">
                PROMOLECULES™ is a performance-driven supplement brand created for
                those who demand more from their body. We combine science-backed
                formulations...
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">

            {/* Title */}
            <div className="relative flex flex-col items-center">
             <motion.h2
  initial={{ x: 300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="creepster-regular text-red-600 
    text-[20px] 
    sm:text-[50px] 
    md:text-[80px] 
    lg:text-[120px] 
    xl:text-[140px] 
    leading-none text-center"
>
  WHO-WE-ARE
</motion.h2>

              <div className="h-1 bg-red-600 
                w-[200px] 
                sm:w-[350px] 
                md:w-[500px] 
                lg:w-[650px] 
                xl:w-[700px] 
                rounded-full" />
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
              <p className="text-white font-bold text-xs sm:text-xs md:text-base lg:text-md leading-relaxed tracking-wide ">
                PROMOLECULES™ IS A PERFORMANCE-DRIVEN SUPPLEMENT BRAND CREATED FOR
                THOSE WHO DEMAND MORE FROM THEIR BODY. WE COMBINE SCIENCE-BACKED
                FORMULATIONS WITH PRECISION NUTRITION TO DELIVER CLEAN,
                EFFECTIVE, AND RELIABLE SUPPLEMENTS. BUILT ON TRANSPARENCY,
                QUALITY, AND RESULTS, PROMOLECULES™ EXISTS TO FUEL STRENGTH, FOCUS,
                AND CONSISTENCY—AT THE MOLECULAR LEVEL.
              </p>

              {/* Button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <button className="group flex items-center gap-4 border-2 border-white/20 hover:border-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:bg-red-600/10">
                  <span className="font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
                    View More
                  </span>
                  <div className="bg-white/10 group-hover:bg-red-600 p-2 sm:p-2.5 rounded-full transition-all duration-300">
                    <ArrowRight
                      size={18}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default WhoWeAreSection;
