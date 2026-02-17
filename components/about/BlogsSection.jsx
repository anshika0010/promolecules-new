"use client";

import React, { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsSection () {
  const scrollContainerRef = useRef(null);

  const blogs = [
    {
      id: 1,
      image: "/blog1.png",
      title:
        "THE POWER OF CONSISTENCY: HOW STAYING ON TRACK CAN TRANSFORM YOUR LIFE",
      description:
        "DISCOVER THE TRANSFORMATIVE POWER OF CONSISTENCY IN ACHIEVING YOUR HEALTH AND FITNESS GOALS. LEARN HOW TO BUILD SUSTAINABLE HABITS THAT LEAD TO LONG-TERM SUCCESS.",
      tag: "READ MORE",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "FUEL YOUR BODY: SECRETS OF PROPER NUTRITION",
      description:
        "NUTRITION IS POWER. LEARN HOW TO FUEL YOUR BODY WITH THE RIGHT NUTRIENTS, MAXIMIZE PERFORMANCE, AND UNLOCK YOUR FULL POTENTIAL WITH SCIENCE-BACKED NUTRITION STRATEGIES.",
      tag: "READ MORE",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "GET YOUR SLEEP: A CRUCIAL PIECE",
      description:
        "THE SECRET WEAPON BEHIND PEAK ATHLETIC PERFORMANCE IS QUALITY SLEEP. DISCOVER HOW PROPER REST IMPACTS YOUR RECOVERY, MUSCLE GROWTH, AND OVERALL PERFORMANCE.",
      tag: "READ MORE",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background Text Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <div className="text-white text-xs leading-relaxed p-8 whitespace-pre-wrap font-mono">
          {`PROMOLECULES™ PROMOLECULES™ PROMOLECULES™ PROMOLECULES™ PROMOLECULES™ PROMPROMOLECULES™OLECULES PROMOLECULES™
SUPPLEMENTS SUPPLEMENTS SUPPLEMENTS SUPPLEMENTS SUPPLEMENTS SUPPLEMENTS SUPPLEMENTS
FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS FITNESS
PERFORMANCE PERFORMANCE PERFORMANCE PERFORMANCE PERFORMANCE PERFORMANCE PERFORMANCE
STRENGTH STRENGTH STRENGTH STRENGTH STRENGTH STRENGTH STRENGTH STRENGTH STRENGTH
NUTRITION NUTRITION NUTRITION NUTRITION NUTRITION NUTRITION NUTRITION NUTRITION`.repeat(
            50,
          )}
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center">
            <motion.div
  initial={{ x: 200, opacity: 0 }}   // 👈 START position (right side)
  whileInView={{ x: 0, opacity: 1 }} // 👈 END position
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex flex-col items-center"
>
  <h2 className="creepster-regular text-red-600 text-9xl">
    BLOGS
  </h2>

  {/* Underline Effect */}
  <div className="h-1 bg-red-600 mt-1 w-full rounded-full" />
</motion.div>

          </div>

          <p className="text-white text-sm md:text-base tracking-wider max-w-4xl mx-auto font-light leading-relaxed">
            WELCOME TO PROMOLECULES™, THE NEXT EVOLUTION IN FITNESS SCIENCE –
            WHERE EVERY
            <br />
            FORMULA IS ENGINEERED WITH ONE GOAL: TO UNLOCK YOUR BODY'S FULL
            POTENTIAL.
          </p>
        </div>

        {/* Blog Cards Slider */}
        {/* Blog Cards Infinite Slider */}
        <div className="relative overflow-hidden">
          <div className="group">
            <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...blogs, ...blogs].map((blog, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] cursor-pointer"
                >
                  <div className="relative h-[300px] rounded-2xl overflow-hidden mb-4">
                    {/* Image */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-110 transition-all duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                      <h3 className="text-red-500 anton-regular text-lg font-bold leading-tight tracking-wide">
                        {blog.title}
                      </h3>
                      <p className="text-white/80 anton-regular text-xs leading-relaxed tracking-wide">
                        {blog.description}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center cursor-pointer gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm tracking-wider">
                    <span>{blog.tag}</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 ">
          <button className="flex items-center cursor-pointer gap-3 bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 text-sm tracking-widest group">
            <span>VIEW ALL</span>
            <div className="bg-red-600  group-hover:bg-white p-2 rounded-full transition-colors">
              <ChevronRight
                size={18}
                className="text-white group-hover:text-red-600"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};