"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // ✅ FIX 1

const WhoWeAreSection = () => {
  return (
    <section className="relative min-h-[300px] bg-black flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/dark-candle.webp"
          alt="Dark candle background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left */}
          <div className="lg:col-span-4 space-y-16 sm:space-y-24 lg:space-y-40 text-center lg:text-left">

            <div className="max-w-[380px] mx-auto lg:mx-0 hover:scale-[1.05] transition">
              <h2 className="text-red-600 font-extrabold text-xl"> {/* ✅ contrast fix */}
                No Secrets. Just Pure Power.
              </h2>

              <p className="text-white/90 uppercase text-xs leading-[1.6] tracking-[0.08em] font-bold">
                Every product meets high USA quality standards and uses clear
                component lists and clinical doses.
              </p>
            </div>

            <div className="max-w-[300px] mx-auto lg:mx-0 lg:ml-16 hover:scale-[1.05] transition">
              <h2 className="text-red-600 font-extrabold text-xl">
                Train. Fuel. Dominate.
              </h2>

              <p className="text-white/90 uppercase text-xs leading-[1.6] tracking-[0.08em] font-bold">
                Promolecules™ is a high-end sports nutrition brand for serious athletes.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">

            {/* Title */}
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0 }}   // ✅ FIX animation
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="creepster-regular text-red-600 
                  text-[30px] sm:text-[32px] md:text-[60px] lg:text-[90px] xl:text-[90px] 
                  leading-tight text-center"
              >
                WHO-WE-ARE
              </motion.h1>

              <div className="h-1 bg-red-500 w-[200px] sm:w-[350px] md:w-[500px] lg:w-[650px] xl:w-[700px] rounded-full" />
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
              <p className="text-white/90 uppercase text-xs leading-[1.6] tracking-[0.08em] font-bold">
                Promolecules™ focuses on performance and helps you push limits.
              </p>

              {/* CTA */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <Link
                  href="/about"
                  aria-label="View more about us"
                  className="group flex items-center gap-4 border-2 border-white/20 hover:border-red-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-600/10"
                >
                  <span className="font-bold text-xs tracking-[0.15em] uppercase">
                    View More
                  </span>

                  <div className="bg-white/10 group-hover:bg-red-600 p-2 rounded-full transition">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Ambient Lights (reduced blur) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-[60px]" />

    </section>
  );
};

export default WhoWeAreSection;