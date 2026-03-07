import React from "react";

export default function ContactHero() {
  return (
    <>
      <section
        className="relative min-h-screen w-full bg-cover bg-center flex items-center py-16 md:py-0"
        style={{
          backgroundImage: "url('/candle.webp')",
        }}
      >
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
                    and sustained performance without chaotic overstimulation.
                  </p>
                </div>

                <div>
                  <h4 className="text-red-600 mb-3 text-sm font-semibold">
                    Design
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs uppercase">
                    Formulated with structured ingredient architecture balancing
                    stimulation, hydration, and endurance.
                  </p>
                </div>

                <div>
                  <h4 className="text-red-600 mb-3 text-sm font-semibold">
                    Development
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-[11px] sm:text-xs">
                    Built through performance-first research and athlete testing
                    focused on stability and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative w-full min-h-screen bg-black text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-10">
              <div>
                <h1 className="text-6xl md:text-8xl anton-regular font-bold uppercase">
                  JUST
                </h1>
                <h1 className="text-6xl md:text-8xl anton-regular font-bold uppercase">
                  SEND IT.
                </h1>
              </div>

              <div className="w-24 h-[2px] bg-gray-500"></div>

              <div className="grid grid-cols-2 gap-8 text-xs text-gray-400 uppercase tracking-wider">
                <p>
                  Connect with Promolecules™ for product guidance,
                  collaboration inquiries, or performance support.
                </p>
                <p>
                  Reach us via email, official social platforms, or
                  authorized distribution partners.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="space-y-6">
              <InputField label="FULL NAME" />
              <InputField label="PHONE NO." />
              <InputField label="GMAIL" />

              <div>
                <label className="block text-xs text-gray-400 mb-2 tracking-widest">
                  SUBJECT
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <button className="bg-red-600 w-full flex items-center justify-center hover:bg-red-700 transition-all px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider gap-3">
                Send Message
                <span className="text-lg">➤</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* CTA */}
        <div className="bg-black py-16 px-7">
          <div className="max-w-9xl creepster-regular mx-auto flex items-center">
            <h2 className="text-7xl md:text-9xl uppercase tracking-wider">
              <span className="text-gray-200">Lets Start To </span>
              <span className="text-red-600">Work</span>
            </h2>

            <span className="text-red-600 text-7xl md:text-9xl cursor-pointer ml-6">
              ↗
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function InputField({ label }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-2 tracking-widest">
        {label}
      </label>
      <input
        type="text"
        className="w-full bg-black/60 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600"
      />
    </div>
  );
}