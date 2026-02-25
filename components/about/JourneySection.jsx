export default function JourneySection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-20">
      
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl sm:text-4xl creepster-regular md:text-6xl font-bold tracking-wide"
       
        >
          <span className="text-white">
            THE JOURNEY BEHIND{" "}
          </span>
          <span className="text-red-600">
            PROMOLECULES
          </span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Red Tagline */}
        <div>
          <p className="text-red-600 uppercase text-sm tracking-wider font-semibold leading-relaxed">
            Born From Science Built <br />
            For Performance
          </p>
        </div>

        {/* Right Description */}
        <div>
          <p className="text-gray-300 uppercase text-xs md:text-sm leading-relaxed tracking-wide">
           Promolecules™ was not created to follow the supplement trend cycle. It was born from frustration inside real gym environments where serious lifters were forced to choose between two extremes: underdosed “safe” formulas that barely activate performance, or reckless high-stim products that spike energy but crash hard.

The founders observed a clear pattern in the industry:
• Excess caffeine marketed as “strong”
• Proprietary blends hiding real dosages
• Short-term hype replacing long-term progression

          </p>
        </div>
      </div>

      {/* Bottom Subtle Divider */}
      <div className="mt-16 border-t border-gray-800"></div>

    </section>
  );
}
