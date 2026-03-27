export default function JourneySection() {
  return (
    <section className="max-w-7xl mx-auto bg-black text-white px-4 sm:px-6 md:px-8 py-10 sm:py-14">

      {/* Main Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="creepster-regular text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] leading-tight">
          <span className="text-white">THE JOURNEY BEHIND </span>
          <span className="text-red-600">PROMOLECULES</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-start">

        {/* Red Tagline — visible on ALL screens now */}
        <p className="text-red-600 creepster-regular uppercase text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] tracking-wider leading-snug">
          Born From Science <br className="hidden sm:block" />
          Built For Performance
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed tracking-wide">
          Promolecules™ was not created to follow the supplement trend cycle.
          It was born from frustration inside real gym environments where serious
          lifters were forced to choose between two extremes: underdosed "safe"
          formulas that barely activate performance, or reckless high-stim
          products that spike energy but crash hard.
        </p>

      </div>

      {/* Divider */}
      <div className="mt-10 sm:mt-14 border-t border-gray-800" />

    </section>
  );
}