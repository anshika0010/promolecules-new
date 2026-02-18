"use client";

import React, { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogsSection = () => {
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

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "WHEY ALWAYS GAVE ME GAS AND HEAVINESS, BUT PROMIXED FEELS SUPER LIGHT. ABSORBS FAST AND TASTES GREAT. PERFECT FOR MY PLANT PHASE.",
      author: "ROHIT S.",
      role: "GYM ENTHUSIAST",
    },
    {
      id: 2,
      quote:
        "I DON'T TAKE WHEY. THIS BEEF PROTEIN SOLVED EVERYTHING. 30 G COMPLETE PROTEIN, NO DAIRY, NO BLOAT. IT FITS MY KETO, HITS MY MACROS, AND TASTES PRETTY CLEAN.",
      author: "FAUZAN K.",
      role: "ATHLETE",
    },
    {
      id: 3,
      quote:
        "THE BEST PRE-WORKOUT I'VE EVER TRIED. INTENSE FOCUS, MASSIVE PUMPS, AND INCREDIBLE ENERGY THAT LASTS THE ENTIRE WORKOUT. NO CRASH AFTERWARDS.",
      author: "SARAH M.",
      role: "POWERLIFTER",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative bg-black py-14 sm:py-16 md:py-20 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/gym-background.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="space-y-6 text-center lg:text-left">
            
            <div className="flex justify-center lg:justify-start mb-10 sm:mb-12 md:mb-16">
              <div className="flex flex-col items-center lg:items-start">
                
                <h2 className="creepster-regular text-red-700 
                  text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                  WHAT OUR CUSTOMERS
                </h2>

                <h2 className="creepster-regular text-red-700 
                  text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                  FORMULA
                </h2>

              </div>
            </div>

            <p className="text-white 
              text-xs sm:text-sm tracking-wider 
              max-w-md mx-auto lg:mx-0 font-light">
              PROMOLECULES™ FUELS THE RITUAL – BUILT FOR THOSE WHO TRAIN HARDER,
              GO FURTHER AND NEVER BACK DOWN.
            </p>

            {/* Arrows */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={prevTestimonial}
                className="bg-red-600 hover:bg-red-700 p-3 sm:p-4 rounded-full transition-colors"
              >
                <ChevronLeft size={20} className="text-white sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="bg-red-600 hover:bg-red-700 p-3 sm:p-4 rounded-full transition-colors"
              >
                <ChevronRight size={20} className="text-white sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="relative 
            h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] 
            overflow-hidden group">
            
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 h-full w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <div className="flex gap-6 sm:gap-8 w-max animate-testimonial hover:pause-animation">
              
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 
                    w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]
                    h-[320px] sm:h-[360px] md:h-[390px] lg:h-[420px]"
                >
                  <div className="bg-gradient-to-br from-red-900/40 to-red-950/60 
                    backdrop-blur-sm border-2 border-red-600/30 
                    rounded-3xl p-6 sm:p-7 lg:p-8 space-y-5 sm:space-y-6">

                    <Quote size={36} className="text-red-600 sm:w-12 sm:h-12" />

                    <p className="text-white 
                      text-xs sm:text-sm leading-relaxed 
                      tracking-wide font-light">
                      {testimonial.quote}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white font-bold 
                        text-base sm:text-lg tracking-wider">
                        {testimonial.author}
                      </p>
                      <p className="text-red-600 
                        text-xs sm:text-sm tracking-wider font-semibold">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button className="flex items-center gap-3 
            bg-transparent border-2 border-red-600 
            hover:bg-red-600 text-white font-bold 
            px-6 sm:px-10 py-3 sm:py-4 
            rounded-full transition-all duration-300 
            text-xs sm:text-sm tracking-widest group">

            <span>VIEW ALL</span>

            <div className="bg-red-600 group-hover:bg-white 
              p-1.5 sm:p-2 rounded-full transition-colors">
              <ChevronRight
                size={16}
                className="text-white group-hover:text-red-600 sm:w-[18px] sm:h-[18px]"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};


// Combined Export Component
const BlogsAndTestimonials = () => {
  return (
    <>
      <BlogsSection />
      <TestimonialsSection />
    </>
  );
};

export default BlogsAndTestimonials;
