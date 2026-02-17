"use client";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import GrowthEvolution from "@/components/about/GrowthEvolution";
import JourneySection from "@/components/about/JourneySection";
import BlogsSection from "@/components/about/BlogsSection";

export default function Page() {
  return (
    <>
      <section className="relative w-full bg-black text-white flex items-center px-8 md:px-20 pt-26">
        {/* Back Button */}
        <div className="absolute top-6 right-6">
          <button className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition">
            <ArrowLeft size={18} className="text-white" />
          </button>
        </div>

        {/* Content Container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Big Gothic Heading */}
          <h1
            className="text-[40px] creepster-regular sm:text-[50px] md:text-[100px] lg:text-[130px] 
          font-extrabold leading-none tracking-tight"
          >
            WHERE IT ALL
          </h1>

          {/* Right Paragraph */}
          <p className="max-w-md text-xs md:text-sm anton-regular uppercase leading-relaxed tracking-wide text-gray-200">
            PROMOLECULES WAS FOUNDED WITH A CLEAR PURPOSE — TO REDEFINE SPORTS
            NUTRITION THROUGH SCIENCE, PURITY, AND PERFORMANCE. FROM THE VERY
            BEGINNING, THE BRAND FOCUSED ON CREATING SUPPLEMENTS THAT DELIVER
            REAL, MEASURABLE RESULTS, NOT JUST MARKETING PROMISES.
          </p>
        </div>
      </section>
      <section className=" w-full bg-black  flex items-center px-8 md:px-20 pt-2">
        {/* Content Container */}
        <div className="w-full flex flex-col md:flex-row items-center  gap-1">
          {/* Left Big Gothic Heading */}

          {/* Right Paragraph */}
          <p className="max-w-md text-sm md:text-sm anton-regular uppercase leading-relaxed tracking-wide text-gray-200">
            From the very beginning, the brand focused on creating supplements
            that deliver real measurable results, not just marketing promises
          </p>
          <h1
            className="text-[60px] text-red-800 creepster-regular sm:text-[80px] md:text-[120px] lg:text-[120px] 
          font-extrabold leading-none tracking-tight"
          >
            BEGAN
          </h1>
        </div>
      </section>
      <section className="relative w-full min-h-screen overflow-hidden">
        <Image
          src="/history.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
      </section>
      <BlogsSection />
      <JourneySection />
      <GrowthEvolution />
      <NewsletterSection />
    </>
  );
}
