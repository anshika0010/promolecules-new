import ContactSection from "@/components/ContactSection";
import React from "react";

export default function ContactHero() {
  return (
    <>
      <section
        className="relative min-h-screen w-full bg-cover bg-center flex items-center py-16 md:py-0"
        style={{
          backgroundImage: "url('/candle.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          {/* Main Heading */}
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase leading-tight">
            <span className="text-gray-200">Get In </span>
            <span className="text-red-600">Touch</span>
          </h1>

          {/* Email Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-6">
            <h2 className="text-gray-300 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold anton-regular break-all">
              CONTACT@PROMOLECULES.COM
            </h2>

            {/* Arrow */}
            <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-black font-bold w-fit px-2">
              ↗
            </span>
          </div>

          {/* Lower Section */}
          <section className="relative bg-transparent w-full pt-16 md:pt-24 text-white">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl creepster-regular uppercase leading-snug text-gray-200">
                  Let’s Make Something <br />
                  Amazing, Together
                </h2>
              </div>

              {/* RIGHT SIDE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-xs uppercase tracking-wider">
                <div>
                  <h4 className="text-red-600 mb-3 text-sm font-semibold">
                    Strength
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
                    Engineered to amplify neurological drive, muscular output,
                    and sustained performance without chaotic overstimulation or
                    short-lived stimulant crashes.
                  </p>
                </div>

                <div>
                  <h4 className="text-red-600 mb-3 text-sm font-semibold">
                    Design
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
                    Formulated with structured ingredient architecture balancing
                    stimulation, hydration, and endurance for disciplined,
                    measurable training progression.
                  </p>
                </div>

                <div>
                  <h4 className="text-red-600 mb-3 text-sm font-semibold">
                    Development
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
                    Built through performance-first research, athlete testing,
                    and calculated formulation refinement focused on stability,
                    effectiveness, and real-world gym demands. 
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
