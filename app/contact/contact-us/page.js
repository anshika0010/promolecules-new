import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <>
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/candle.png')", // replace with your image path
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Main Heading */}
        <h1 className="text-white text-6xl md:text-8xl creepster-regular uppercase">
          <span className=" text-gray-200">Get In </span>
          <span className="text-red-600 ">Touch</span>
        </h1>

        {/* Email */}
        <div className="flex items-center gap-4 mt-6">
          <h2 className="text-gray-300 text-4xl md:text-5xl font-bold anton-regular">
            CONTACT@PROMOLECULES.COM
          </h2>

          {/* Arrow */}
          <span className="text-red-600 text-5xl md:text-6xl bg-black font-bold">
            ↗
          </span>
        </div>

          <section className="relative bg-transparent w-full py-24 text-white overflow-hidden">
      
  

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl creepster-regular uppercase  leading-snug text-gray-200">
            Let’s Make Something <br />
            Amazing, Together
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-xs uppercase tracking-wider">
          
          <div>
            <h4 className="text-red-600 mb-4 text-sm font-semibold">
              Strength
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Promolecules is crafted for athletes who demand pure,
              powerful, and clean nutrition — a protein source that
              delivers maximum strength.
            </p>
          </div>

          <div>
            <h4 className="text-red-600 mb-4 text-sm font-semibold">
              Design
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Formulated with hydrolysed beef peptides, it fuels faster
              recovery and optimized performance.
            </p>
          </div>

          <div>
            <h4 className="text-red-600 mb-4 text-sm font-semibold">
              Development
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Lean muscle growth and peak performance, making it the
              perfect choice for anyone serious about strength and
              results.
            </p>
          </div>

        </div>
      </div>
    </section>
      </div>
    </section>
  
    <ContactSection/>
    </>
  );
}
