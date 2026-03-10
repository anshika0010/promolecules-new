"use client";

import Image from "next/image";

export default function WhatWeDeliver() {
  return (
    <section className="bg-black text-white w-full border-t border-gray-800">
      
      

      {/* MIDDLE STATEMENT */}
      <div className="border-b border-gray-800 py-16 px-6 text-center">
        <p className="max-w-4xl mx-auto text-2xl sm:text-4xl font-extrabold leading-relaxed uppercase">
          Promocules is built for{" "}
          <span className="text-red-600">Individuals</span> who take their{" "}
          <span className="text-red-600">Fitness Seriously</span>. We serve a
          wide spectrum of people united by one goal —{" "}
          <span className="text-red-600">
            Better Performance
          </span>{" "}
          and{" "}
          <span className="text-red-600">
            Real Results
          </span>.
        </p>
      </div>

      {/* OUR SERVICES TITLE */}
      <div className="border-b border-gray-800 py-14 text-center">
        <h3 className="text-6xl sm:text-8xl creepster-regular font-extrabold uppercase tracking-widest">
          <span className="text-white">OUR</span>{" "}
          <span className="text-red-600">SERVICES</span>
        </h3>

        <p className="global-text-style mt-6 max-w-3xl mx-auto uppercase tracking-wide">
          At Promocules, our services go beyond selling supplements. We provide
          performance-driven nutrition solutions designed to support every
          stage of your fitness journey.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t  px-6 py-18 border-gray-800">
        
        {/* SERVICE 1 */}
        <div className="border-r border-b border-gray-800 p-10 text-center space-y-6">
          <h4 className="text-red-600 text-4xl creepster-regular font-extrabold uppercase">
            1. Performance Nutrition Solutions
          </h4>

          <p className="global-text-style leading-relaxed uppercase">
            We develop and deliver science-backed supplements focused on muscle
            growth & strength, energy, focus & endurance, and recovery.
            Each product is formulated for real training demands with
            effective dosing and premium ingredients.
          </p>

          <div className="relative h-60 w-full mt-6">
            <Image
              src="/whatwedeliverimg1.png"
              alt="Service 1"
              fill
              className="object-cover brightness-75"
            />
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="border-r border-b border-gray-800 p-10 text-center space-y-6">
          <h4 className="text-red-600 text-4xl creepster-regular font-extrabold uppercase">
            2. Research & Innovation
          </h4>

          <p className="global-text-style">
            Our team continuously studies emerging sports nutrition science to
            improve formulations. We embrace advanced ingredients,
            enhanced absorption, and innovation is at the core of everything we create.
          </p>

          <div className="relative h-60 w-full mt-6">
            <Image
              src="/whatwedeliverimg2.png"
              alt="Service 2"
              fill
              className="object-cover brightness-75"
            />
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="border-b border-gray-800 p-10 text-center space-y-6">
          <h4 className="text-red-600 text-4xl creepster-regular font-extrabold uppercase">
            3. Athlete & Trainers Support
          </h4>

          <p className="global-text-style">
            We support athletes, coaches, and fitness professionals by
            providing trusted performance nutrition, goal-specific supplement
            guidance, and ongoing product updates.
          </p>

          <div className="relative h-60 w-full mt-6">
            <Image
              src="/whatwedeliverimg3.png"
              alt="Service 3"
              fill
              className="object-cover brightness-75"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
