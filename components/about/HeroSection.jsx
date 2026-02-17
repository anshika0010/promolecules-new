"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen pt-14   overflow-hidden">
      {/* Background Image */}
      <Image
        src="/whoweare.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-fit h-full"
      />

      {/* Bottom Right Text */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 max-w-6xl z-20 text-right ">
        <h1 className=" creepster-regular text-red-700 text-6xl md:text-8xl font-bold leading-tight">
          WE ARE PROMECULES
        </h1>

        <p className="text-gray-300 mt-4 uppercase text-md anton-regular font-bold md:text-base max-w-6xl">
          a performance-driven nutrition brand built for individuals who refuse
          average. We exist to fuel ambition, unlock physical potential, and
          support those who train with purpose, discipline, and intensity. Our
          identity is rooted in science-backed formulations, premium-quality
          ingredients, and a relentless focus on results.{" "}
        </p>
      </div>
    </section>
  );
}
