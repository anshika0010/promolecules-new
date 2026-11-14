"use client";

import ContactForm from "@/components/ContactForm";
import React from "react";
import { useLocale } from "@/components/LocaleProvider";

export default function ContactheroSection() {
  const { t, lang, displayFont } = useLocale();
  const h = t.ui.contact_hero;
  const display = displayFont;




  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative  bg-cover bg-center flex items-center py-2 sm:py-4 md:py-10 mt-6 md:py-0"
        style={{ backgroundImage: "url('/candle.webp')" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full max-w-[1600px] mx-auto">

          <h4 className={`text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${display} uppercase`}>
            <span className="text-gray-200">{h.title[0]} </span>
            <span className="text-red-600">{h.title[1]}</span>
          </h4>

          <div className="mt-6">
            <p className="text-gray-300 luppercase text-md sm:text-lg md:text-xl lg:text-3xl font-bold anton-regular break-all">
              CONTACT@PROMOLECULES.COM
            </p>
          </div>

        
        </div>
      </section>


      {/* CONTACT FORM SECTION */}
   <ContactForm/>


{/* CTA SECTION */}
<section className="bg-black py-10 sm:py-14 md:py-16 px-4 border-t border-gray-800">
  <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
    <h2 className={`${display} uppercase 
      text-4xl
      xs:text-5xl
      sm:text-6xl
      md:text-7xl
      lg:text-8xl
      xl:text-9xl`}>
      <span className="text-gray-200">{h.cta[0]} </span>
      <span className="text-red-600">{h.cta[1]}</span>
    </h2>
  </div>  
</section>

    </>
  );
}

