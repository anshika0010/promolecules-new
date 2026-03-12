"use client";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import GrowthEvolution from "@/components/about/GrowthEvolution";
import JourneySection from "@/components/about/JourneySection";
import Blogs from "@/components/Blogs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero + BG Image Combined Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/history.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />


        

        {/* Back Button */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
          <Link href={"/about"} >         <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition">
            <ArrowLeft size={16} className="text-white" />
          </button>
          </Link>
 
        </div>

        {/* Hero Content — on top of image */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-10 sm:pb-14">
          
          {/* Top: Heading + Paragraph */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 mt-4">
            {/* Big Gothic Heading */}
            <h1 className="text-[56px] xs:text-[64px] sm:text-[72px] md:text-[88px] lg:text-[110px] creepster-regular font-extrabold leading-none tracking-tight text-white flex-1">
              WHERE IT ALL{" "}
              <span className="text-red-600">BEGINNING</span>
            </h1>

            {/* Right Paragraph */}
            <p className="w-full md:max-w-md text-xs sm:text-sm md:text-sm anton-regular uppercase leading-relaxed tracking-wide text-gray-200">
              Promolecules™ was not created to follow the supplement trend
              cycle. It was born from frustration inside real gym environments —
              where serious lifters were forced to choose between two extremes:
              underdosed "safe" formulas that barely activate performance.
            </p>
          </div>

          {/* Bottom: Subtitle */}
          <div className="mt-auto pt-10">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl anton-regular uppercase leading-relaxed tracking-wide text-gray-200">
              Promolecules™ – History & Reason Behind the Formulation
            </p>
          </div>
        </div>
      </section>

      <Blogs />
      <JourneySection />
      <GrowthEvolution />
    </>
  );
}