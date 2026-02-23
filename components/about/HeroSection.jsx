"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-14 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/whoweare.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (optional but improves readability on small screens) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Bottom Right Text */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 
                      max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl 
                      z-20 text-right px-2 sm:px-0">

        <h1 className="creepster-regular 
                       text-3xl sm:text-5xl md:text-7xl lg:text-8xl 
                       text-red-700 font-bold leading-tight">
          WE ARE PROMECULES
        </h1>

        <p className="text-gray-300 mt-3 sm:mt-4 uppercase 
                      text-xs sm:text-sm md:text-base 
                      anton-regular font-bold 
                      leading-relaxed">
          a performance-driven nutrition brand built for individuals who refuse
          average. We exist to fuel ambition, unlock physical potential, and
          support those who train with purpose, discipline, and intensity. Our
          identity is rooted in science-backed formulations, premium-quality
          ingredients, and a relentless focus on results.
        </p>

      </div>
    </section>
  );
}