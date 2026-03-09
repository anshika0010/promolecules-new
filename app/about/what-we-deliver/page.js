"use client";
import WhatWeDeliver from "@/components/about/WhatWeDeliver";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Image */}
        <Image
          src="/whatwedeliver.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6">

          <h2 className="text-4xl creepster-regular sm:text-7xl lg:text-9xl font-extrabold tracking-widest uppercase">
            <span className="text-white">WHAT WE</span>{" "}
            <span className="text-red-600">DELIVER</span>
          </h2>

          <div className="mt-10 anton-regular text-lg sm:text-xl uppercase text-gray-300 flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl">
            <span>Professional Athletes</span>
            <span>Bodybuilders & Physique Athletes</span>
            <span>Powerlifters & Strength Trainers</span>
            <span>Gym Enthusiasts & Hardcore Trainers</span>
          </div>

        </div>

      </section>

      <WhatWeDeliver />
    </>
  );
}