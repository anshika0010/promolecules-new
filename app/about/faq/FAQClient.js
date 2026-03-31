// app/about/faq/FAQClient.js  ← yeh nayi file banao same folder mein
"use client";
import ComparisonSection from "@/components/about/ComparisonSection";
import FAQSection from "@/components/about/FAQSection";
import Image from "next/image";

export default function FAQClient({ jsonld }) {
  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      <section className="relative max-w-full mx-auto min-h-[50vh] lg:min-h-[100vh] overflow-hidden text-white lg:pt-1 sm:mt-0">
        {/* Background Image */}
        <Image
          src="/promolecules-faq-banner.webp"
          alt="Background"
          fill
          className="absolute inset-0 w-full h-full object-fit"
        />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-6 py-3 max-w-9xl mx-auto flex flex-col justify-center min-h-[50vh] lg:min-h-[100vh]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl creepster-regular">
                WHY{" "}
                <span className="text-red-600 relative inline-block">
                  PROMOLECULES
                  <span className="absolute creepster-regular -top-2 -right-4 md:-right-5 text-sm md:text-base lg:text-lg">
                    TM
                  </span>
                </span>{" "}
                STANDS ABOVE EVERY CHEAP SUPPLEMENT BRAND
              </h1>

              <p className="mt-6 text-gray-300 anton-regular font-semibold text-xs md:text-base max-w-2xl leading-relaxed uppercase">
                The global supplement market suffers from what we call formula
                degradation syndrome where products lose effectiveness within
                3–14 days.
              </p>
            </div>
          </div>

          {/* Bottom FAQ Subtitle */}
          <div className="mt-10 md:mt-0 md:absolute bottom-6 right-16 text-right">
            <div className="relative flex justify-center md:justify-end sm:justify-center">
              <h3 className="text-[200px] md:text-[160px] lg:text-[200px] creepster-regular text-red-600 opacity-90 leading-none">
                FAQ
              </h3>
            </div>
            <h3 className="text-md md:text-4xl anton-regular font-bold uppercase">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400 text-xs lg:text-md font-bold anton-regular uppercase tracking-wide">
              Answer all frequently asked questions. Still confused?
            
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
      <ComparisonSection />
    </>
  );
}
