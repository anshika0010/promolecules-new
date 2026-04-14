"use client";

import Image from "next/image";

export default function WhatWeDeliver() {
  const services = [
    {
      number: "1",
      title: "Performance Nutrition Solutions",
      desc: "We develop and deliver science-backed supplements focused on muscle growth & strength, energy, focus & endurance, and recovery. Each product is formulated for real training demands.with premium ingredients.",
      image: "/promolecules-whatwedeliverim.webp",
    },
    {
      number: "2",
      title: "Research & Innovation",
      desc: "Our team continuously studies emerging sports nutrition science to improve formulations. We embrace advanced ingredients, enhanced absorption, and innovation is at the core of everything we create.",
      image: "/promolecules-whatwedeliverimg.webp",
    },
    {
      number: "3",
      title: "Athlete & Trainers Support",
      desc: "We support athletes, coaches, and fitness professionals by providing trusted performance nutrition, goal-specific supplement guidance, and ongoing product updates.",
      image: "/promolecules-what-we-deliverim.webp",
    },
  ];

  return (
    <>
    <section className="bg-black text-white max-w-7xl mx-auto border-t border-gray-800">

      {/* MIDDLE STATEMENT */}
      <div className="border-b border-gray-800 py-6 sm:py-8 px-1 sm:px-3 text-center">
        <p className="max-w-5xl mx-auto 
          text-base xs:text-sm sm:text-sm md:text-sm lg:text-md 
          font-bold leading-relaxed uppercase">
          Promolecules is built for{" "}
          <span className="text-red-600">Individuals</span> who take their{" "}
          <span className="text-red-600">Fitness Seriously</span>. We serve a
          wide spectrum of people united by one goal —{" "}
          <span className="text-red-600">Better Performance</span>{" "}
          and{" "}
          <span className="text-red-600">Real Results</span>.
        </p>
      </div>
      </section>
<section className="bg-black text-white max-w-full mx-auto ">
      {/* OUR SERVICES TITLE */}
      <div className="border-b border-gray-800 py-3 sm:py-4 w-full text-center px-4">
        <h3 className="creepster-regular heading">
          <span className="text-white">OUR</span>{" "}
          <span className="text-red-600">SERVICES</span>
        </h3>

        <p className="global-text-style mt-4 sm:mt-6 max-w-3xl mx-auto uppercase tracking-wide
          text-[5px] sm:text-xs md:text-base px-2">
          At Promolecules, our services go beyond selling supplements. We provide
          performance-driven nutrition solutions designed to support every
          stage of your fitness journey.
        </p>
      </div>

{/* SERVICES GRID */}
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800 px-0 mb-4 md:mb-16 w-full">
  {services.map((service, index) => (
    <div
      key={index}
      className={`
        group
        p-6 sm:p-8 md:p-10 text-center space-y-4 sm:space-y-6
        border-b border-gray-800
        transition-all duration-500
        hover:bg-gradient-to-b hover:from-red-950/60 hover:via-red-900/30 hover:to-transparent
        ${index < services.length - 1 ? "md:border-r" : ""}
      `}
    >
      {/* Number + Title */}
      <h4 className="text-red-600 creepster-regular uppercase
        text-xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl
        transition-all duration-300
        group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400
      ">
        {service.number}. {service.title}
      </h4>

      {/* Description */}
      <p className="global-text-style transition-colors duration-300 group-hover:text-red-100">
        {service.desc}
      </p>

      {/* Image */}
      <div className="relative w-full 
        h-[180px] xs:h-[200px] sm:h-[220px] md:h-[200px] lg:h-[240px] xl:h-[260px]
        mt-2 rounded-lg overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-all duration-500 saturate-0 brightness-75 group-hover:saturate-100 group-hover:brightness-50"
        />
       
      </div>
    </div>
  ))}
</div>
    </section>
    </>
  );
}