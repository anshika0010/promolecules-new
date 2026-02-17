"use client";

import Image from "next/image";

import BlogGrid from "@/components/BlogGrid";


export default function page() {
  return (
    <>
     <section className="relative w-full min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <Image
        src="/bloghero.png"
        alt="Fitness Blog Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

   


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
          
          {/* LEFT TEXT */}
          <div className="max-w-md">
            <p className="text-xs sm:text-sm uppercase anton-regular font-bold  tracking-wider leading-relaxed text-white/90">
              The Promolecules blog is where performance meets mindset.
              Here, we share stories, ideas, and insights built around
              discipline, consistency, and the lifestyle of those who
              choose to push limits every day.
            </p>
          </div>

          {/* RIGHT SIDE HEADING + TEXT */}
          <div className="text-left lg:text-right space-y-6">
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase leading-tight">
              <span className="block text-white font-gothic tracking-widest">
                All Fitness
              </span>
              <span className="block text-red-600 font-gothic tracking-widest">
                Blogs
              </span>
            </h1>

            <p className="text-xs sm:text-sm uppercase anton-regular font-bold tracking-wider text-white/90 max-w-md ml-auto">
              The Promolecules blog reflects our culture – built on
              consistency, quality, and a no-compromise approach to
              performance and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
    <BlogGrid/>
    </>
  )}