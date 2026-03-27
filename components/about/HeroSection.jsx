"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto min-h-[50vh] lg:min-h-[100vh] pt-8 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/promolecules-who-we-are.webp"
        alt="promolecules-who-we-are"
        fill
        priority
        className="object-cover"
      />



      {/* Bottom Right Text */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 
                      max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl 
                      z-20 text-right px-2 sm:px-0">

        <h1 className="creepster-regular 
                       text-3xl sm:text-5xl md:text-7xl lg:text-8xl 
                       text-red-700 font-bold tracking-wide">
          WE ARE PROMOLECULES
        </h1>

        <p className="global-text-style
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