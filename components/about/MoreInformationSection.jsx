"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const infoLinks = [
  "OUR IDENTITY",
  "OUR MISSION",
  "OUR VISION",
  "WHY GENESIS",
];

export default function MoreInformationSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/dark-candle.png"   // 🔥 replace with your background image
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-1/2 h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/body.png"  
            alt="Gym Athlete"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/1 text-white">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase mb-10">
            MORE INFORMATION
          </h2>

          {/* Divider */}
          <div className="space-y-6">
            {infoLinks.map((item, index) => (
              <div
                key={index}
                className="group flex items-center justify-between border-b border-white/20 pb-4 cursor-pointer"
              >
                <span className="text-red-600 creepster-regular text-2xl tracking-wider uppercase transition duration-300 group-hover:text-white">
                  {item}
                </span>

                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-white transition duration-300">
                  <ArrowRight
                    size={16}
                    className="text-white group-hover:text-red-600"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
