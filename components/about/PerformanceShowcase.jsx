"use client";

import Image from "next/image";

export default function PerformanceShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)] opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center">
        <div className="relative group">
          {/* Top Text */}
          <p className="mb-6 text-lg sm:text-xl md:text-lg lg:text-xl text-white uppercase leading-relaxed max-w-full creepster-regular">
            a performance-driven nutrition brand built for individuals who refuse
            average. We exist to fuel ambition, unlock physical potential, and support
            those who train with purpose, discipline, and intensity. Our identity is rooted
            in science-backed formulations, premium-quality ingredients, and a
            relentless focus on results.
          </p>
          {/* Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
            <Image
              src="/about1.png"
              alt="Left Performance"
              fill
              className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
            />
          </div>

          {/* Bottom Caption */}
          <p className="absolute bottom-4 sm:bottom-6 left-4  text-[9px] sm:text-[10px] md:text-xs text-white uppercase tracking-widest">
            — We Are Performance First <br /> Nutrition
          </p>
        </div>

        {/* CENTER PANEL */}
        <div className="relative group">

          <div className="relative  h-[400px] sm:h-[550px] md:h-[700px] lg:h-[800px]  w-full overflow-hidden shadow-2xl">
            <Image
              src="/about2.png"
              alt="Center Athlete"
              fill
              className="object-cover brightness-90 group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Bottom Caption */}
          <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] md:text-xs text-white uppercase tracking-widest text-center max-w-[200px] sm:max-w-xs">
            — We Are Committed To Performance, <br />
            Quality, Transparency And Real Results
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative group">
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6  w-12 h-12 sm:w-16 sm:h-16 border-2 border-red-600 clip-hexagon opacity-80" />
          <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
            <Image
              src="/about3.png"
              alt="Right Performance"
              fill
              className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
            />
          </div>
          <p className="absolute bottom-4 sm:bottom-6 left-4 text-[9px] sm:text-[10px] md:text-xs text-white uppercase tracking-widest">
            — We Are A Strength Driven <br /> Community
          </p>
        </div>

      </div>
    </section>
  );
}