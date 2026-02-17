"use client";

import Image from "next/image";

export default function PerformanceShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)] opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* LEFT PANEL */}
        <div className="relative group">

          {/* Top Text */}
          <p className="top-4 left-4 text-[40px] md:text-lg text-white/80 uppercase leading-relaxed max-w-[600px] creepster-regular">
          a performance-driven nutrition brand built for individuals who refuse
average. We exist to fuel ambition, unlock physical potential, and support
those who train with purpose, discipline, and intensity. Our identity is rooted
in science-backed formulations, premium-quality ingredients, and a
relentless focus on results.
          </p>

          {/* Image */}
          <div className="relative h-[400px] w-full overflow-hidden">
            <Image
              src="/about1.png" 
              alt="Left Performance"
              fill
              className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
            />
          </div>

          {/* Bottom Caption */}
          <p className="absolute bottom-6 left-4 text-[10px] md:text-xs text-white uppercase tracking-widest">
            — We Are Performance First <br /> Nutrition
          </p>
        </div>

        {/* CENTER PANEL (MAIN FOCUS) */}
        <div className="relative group">

          <div className="relative h-[800px] w-full overflow-hidden shadow-2xl">
            <Image
              src="/about2.png" 
              alt="Center Athlete"
              fill
              className="object-cover brightness-90 group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Bottom Center Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-white uppercase tracking-widest text-center max-w-xs">
            — We Are Committed To Performance, <br />
            Quality, Transparency And Real Results
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative group">

          {/* Red Hexagon Outline */}
          <div className="absolute top-6 right-6 w-16 h-16 border-2 border-red-600 clip-hexagon opacity-80" />

          <div className="relative h-[400px] w-full overflow-hidden">
            <Image
              src="/about3.png" 
              alt="Right Performance"
              fill
              className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
            />
          </div>

          {/* Bottom Caption */}
          <p className="absolute bottom-6 left-4 text-[10px] md:text-xs text-white uppercase tracking-widest">
            — We Are A Strength Driven <br /> Community
          </p>
        </div>

      </div>
    </section>
  );
}
