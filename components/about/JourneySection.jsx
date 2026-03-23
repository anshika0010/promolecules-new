export default function JourneySection() {
  return (
    <section className="max-w-7xl mx-auto bg-black text-white px-3 md:px-4 py-6">
      
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
   
          <p className="text-red-600 creepster-regular uppercase text-2xl sm:text-3xl  md:text-4xl  tracking-wider font-semibold leading-relaxed">
            Born From Science Built <br />
            For Performance
          </p>
 

        {/* Right Description */}
        <div>
          <p className="global-text-style tracking-wide">
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
