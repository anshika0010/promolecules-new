import Link from "next/link";
import React from "react";

export default function HydraPumpHero() {
  return (
    <section className="relative  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-400 font-bold text-sm tracking-[0.2em] uppercase">
                Promolecules™
              </span>

              <span className="h-px w-10 bg-red-400/60"></span>

              <span className="text-white/70 text-sm tracking-wide uppercase">
                Liquid Glycerol with Citrulline
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-extrabold text-white leading-[0.95] mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                HydraPump<span className="text-red-400">+</span>
              </span>
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {[
                "Quick Hydration",
                "Extreme Muscle Pumps",
                "Endurance Performance",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white font-semibold mb-4">
              Train harder, recover faster & get skin-splitting muscle pumps.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              The advanced Liquid Glycerol with Citrulline Malate formula is
              built for athletes, bodybuilders, runners, and fitness
              enthusiasts. It delivers superior hydration, better nitric oxide
              production, improved endurance, and lasting muscle fullness.
            </p>

            <p className="text-white/80 leading-relaxed mb-10">
              Unlike regular hydration products, HydraPump+™ contains 10g
              Liquid Glycerol, 3g Citrulline Malate and quality electrolytes
              that help muscles retain water, increase blood flow, prevent
              dehydration and optimise workout performance.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="border border-white/20 bg-white/5 backdrop-blur rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold text-red-400">10g</h3>
                <p className="text-xs uppercase text-white/70">
                  Liquid Glycerol
                </p>
              </div>

              <div className="border border-white/20 bg-white/5 backdrop-blur rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold text-red-400">3g</h3>
                <p className="text-xs uppercase text-white/70">
                  Citrulline Malate
                </p>
              </div>

              <div className="border border-white/20 bg-white/5 backdrop-blur rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold text-red-400">+</h3>
                <p className="text-xs uppercase text-white/70">
                  Electrolytes
                </p>
              </div>
            </div>

            {/* Button */}
            <Link href={"/product/hydrapump/"}>
            <button className="bg-red-400 hover:bg-red-300 text-black font-bold px-8 py-4 rounded-xl transition">
              Shop HydraPump+™
            </button></Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              <img
                src="/Promolecules/Hydrapump/hydrapump listing image 4.jpg.jpeg"
                alt="HydraPump+"
                className="relative z-10 w-full max-w-md lg:max-w-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}