"use client";

import Image from "next/image";

export default function PerformanceShowcase() {
  return (
    <section className="relative w-full bg-black overflow-hidden">


      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 py-6">

        {/* ── IMAGES ROW ── all 3 in one line at all screen sizes */}
        <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-end">

          {/* LEFT IMAGE */}
          <div className="relative group overflow-hidden">
            <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/5]">
              <Image
                src="/about1.png"
                alt="Left Performance"
                fill
                className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
              />
            </div>
          </div>

          {/* CENTER IMAGE — taller */}
          <div className="relative group overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-[2/3] sm:aspect-[3/5] md:aspect-[1/2]">
              <Image
                src="/about2.png"
                alt="Center Athlete"
                fill
                className="object-cover brightness-90 group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group overflow-hidden">
            {/* Hexagon accent — hidden on very small screens */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-red-600 opacity-80 z-10"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
            <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/5]">
              <Image
                src="/about3.png"
                alt="Right Performance"
                fill
                className="object-cover brightness-75 group-hover:brightness-100 transition duration-500"
              />
            </div>
          </div>

        </div>

        {/* ── TEXT ROW — below all images ── */}
        <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 sm:mt-6 md:mt-8">

          {/* LEFT TEXT */}
          <div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base text-white uppercase leading-relaxed creepster-regular">
              Stop chasing the "clown energy" of over-caffeinated gimmicks. Promolecules is performance-engineered CNS activation, not just a chaotic stimulant spike. Our Half-Scoop Protocol delivers controlled aggression and focus-locking for 3-hour elite sessions.
            </p>
            <p className="mt-2 sm:mt-3 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-red-500 uppercase tracking-widest">
              — We Are Performance First<br className="hidden sm:block" /> Nutrition
            </p>
          </div>

          {/* CENTER TEXT */}
          <div className="text-center">
            <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base text-white uppercase leading-relaxed creepster-regular">
              Engineered for the disciplined. This is the Father of performance architecture — built for those who demand more from every session.
            </p>
            <p className="mt-2 sm:mt-3 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-red-500 uppercase tracking-widest">
              — Committed To Performance,<br className="hidden sm:block" /> Quality &amp; Real Results
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-right">
            <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base text-white uppercase leading-relaxed creepster-regular">
              More than a product — a culture of strength. Join a community built on discipline, grit, and the relentless pursuit of elite performance.
            </p>
            <p className="mt-2 sm:mt-3 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-red-500 uppercase tracking-widest">
              — We Are A Strength Driven<br className="hidden sm:block" /> Community
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}