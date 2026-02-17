import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GrowthEvolution() {
  const [active, setActive] = useState(null);

  const faqs = [
    "WHEN WAS PROMOLECULES FOUNDED?",
    "WHY WAS PROMOLECULES CREATED?",
    "WHAT PROBLEM DID PROMOLECULES AIM TO SOLVE?",
    "HOW HAS PROMOLECULES EVOLVED OVER TIME?",
    "WHAT HAS REMAINED CONSTANT SINCE THE BEGINNING?",
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-6 md:px-16 py-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          {/* Top Description */}
          <p className="text-gray-400 text-xs md:text-sm uppercase leading-relaxed tracking-wide mb-10 max-w-lg">
            WHAT BEGAN AS A FOCUSED PERFORMANCE NUTRITION CONCEPT HAS GROWN INTO
            AN INTERNATIONAL SPORTS NUTRITION BRAND. TODAY, PROMOLECULES SERVES
            FITNESS COMMUNITIES ACROSS MULTIPLE GLOBAL MARKETS, EARNING TRUST
            THROUGH CONSISTENT QUALITY, TRANSPARENCY, AND RESULTS.
          </p>

          {/* Divider Line */}
          <div className="border-t border-gray-800 mb-6"></div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-4 border-b border-gray-800 group"
                >
                  <span className="text-red-600 font-semibold tracking-wide text-sm md:text-base">
                    {item}
                  </span>

                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      active === index
                        ? "rotate-90 text-red-600"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                {/* Optional expandable content */}
                {active === index && (
                  <div className="text-gray-400 text-sm py-4">
                    This is sample answer content. Replace with actual brand
                    story information.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Gothic Heading */}
          <h2 className="text-red-600 creepster-regular text-4xl md:text-6xl font-bold text-right mb-8">
            GROWTH & EVOLUTION
          </h2>

          {/* Image Box */}
          <div className="relative w-full h-[450px] bg-gradient-to-b from-red-900/40 to-black overflow-hidden">
            <img
              src="/history2.png" // 👈 replace with your image
              alt="Growth"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
