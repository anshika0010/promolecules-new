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
            Promolecules was founded to redefine sports nutrition through
            science, purity, and performance. The brand was created with a
            clear mission — to bridge the gap between advanced nutritional
            research and real-world athletic results. Every formula is designed
            with precision, using carefully selected, high-quality ingredients
            that support strength, endurance, recovery, and overall
            performance.
            <br /><br />
            Promolecules began with the belief that true performance nutrition
            must be backed by science, not hype. By focusing on research-driven
            formulations and high bioavailability ingredients, the brand
            delivers supplements that work at a cellular level — helping
            athletes train smarter, recover faster, and perform better.
          </p>
        </div>
      </div>

      {/* Bottom Subtle Divider */}
      <div className="mt-16 border-t border-gray-800"></div>

    </section>
  );
}
