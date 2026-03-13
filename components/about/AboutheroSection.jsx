"use client";

import ContactForm from "@/components/ContactForm";
import React, { useState } from "react";

export default function AboutheroSection() {




  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[50vh] lg:min-h-[50vh] w-full bg-cover bg-center flex items-center py-16 mt-6 md:py-0"
        style={{ backgroundImage: "url('/candle.webp')" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">

          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase leading-tight">
            <span className="text-gray-200">Get In </span>
            <span className="text-red-600">Touch</span>
          </h1>

          <div className="mt-6">
            <h2 className="text-gray-300 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold anton-regular break-all">
              CONTACT@PROMOLECULES.COM
            </h2>
          </div>

          {/* LOWER INFO */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start pt-16 text-white">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl creepster-regular uppercase leading-snug text-gray-200">
                Let’s Make Something <br /> Amazing, Together
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-xs uppercase tracking-wider">

              <div>
                <h4 className="text-red-600 mb-3 text-xl font-bold">Strength</h4>
                <p className="global-text-style">
                  Engineered to amplify neurological drive and muscular output.
                </p>
              </div>

              <div>
                <h4 className="text-red-600 mb-3 text-xl font-bold">Design</h4>
                <p className="global-text-style">
                  Structured ingredient architecture balancing stimulation and endurance.
                </p>
              </div>

              <div>
                <h4 className="text-red-600 mb-3 text-xl font-bold">Development</h4>
                <p className="global-text-style">
                  Built through performance-first research and athlete testing.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CONTACT FORM SECTION */}
   <ContactForm/>


      {/* CTA SECTION */}
   <section className="bg-black py-6 px-4 border-t border-gray-800">
  <div className="max-w-7xl mx-auto creepster-regular text-center sm:text-left">
    
    <h2 className="uppercase tracking-wider leading-tight
      text-4xl 
      sm:text-5xl 
      md:text-6xl 
      lg:text-7xl 
      xl:text-8xl 
      2xl:text-9xl">

      <span className="text-gray-200 block sm:inline">
        Lets Start To
      </span>{" "}
      <span className="text-red-600 block sm:inline">
        Work
      </span>

    </h2>

  </div>
</section>

    </>
  );
}

