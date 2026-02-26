import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GrowthEvolution() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "WHEN WAS PROMOLECULES FOUNDED?",
      answer:
        "Promolecules™ was founded in the early 2020s during a period when high-stimulant supplements were rapidly gaining popularity but lacked structured formulation. It emerged in response to growing demand for stronger yet more intelligently engineered performance systems.",
    },
    {
      question: "WHY WAS PROMOLECULES CREATED?",
      answer:
        "Promolecules™ was created to challenge the industry’s habit of underdosing key ingredients or overdosing caffeine for marketing impact. The goal was to build performance supplements that deliver real intensity through structured formulation, not hype-driven stimulation.",
    },
    {
      question: "WHAT PROBLEM DID PROMOLECULES AIM TO SOLVE?",
      answer:
        "The brand aimed to solve three core issues: hidden proprietary blends, chaotic stimulant crashes, and inconsistent batch quality. Promolecules™ focused on creating disciplined, bioengineered formulas that provide controlled activation, sustained output, and transparent positioning for serious athletes.",
    },
    {
      question: "HOW HAS PROMOLECULES EVOLVED OVER TIME?",
      answer:
        "Promolecules™ began with ultra high-stim performance systems and expanded into hybrid pre-workouts, thermogenics, stimulant-free ATP enhancers, hydration-based pump systems, and protein support. The evolution reflects a broader performance ecosystem rather than a single product category.",
    },
    {
      question: "WHAT HAS REMAINED CONSTANT SINCE THE BEGINNING?",
      answer:
        "What has remained constant is the principle of structured intensity. Promolecules™ continues to prioritize controlled stimulation, athlete-focused positioning, transparent messaging about product strength, and performance systems built for progression — not casual consumption",
    },
  ];

  return (

    <section className="relative w-full min-h-screen bg-black text-white px-6 md:px-16 py-20 overflow-hidden">

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          {/* Top Description */}
          <p className="text-gray-400 text-xs md:text-sm uppercase leading-relaxed tracking-wide mb-10 max-w-lg">
            The brand’s first focus was neurological activation — understanding
            how the central nervous system responds to layered stimulant
            delivery rather than single-source caffeine overload. This led to
            the development of multi-phase stimulation systems seen in products
            like Father of Insane™, where intensity is engineered, not randomly
            increased.
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
                    {item.question}
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
                  <div className="text-gray-400 text-sm py-4 leading-relaxed">
                    {item.answer}
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
