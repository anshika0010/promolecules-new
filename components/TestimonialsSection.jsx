"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      id: 1,
      quote:
        "Clean energy, insane focus, zero crash. Promolecules actually feels engineered, not overhyped like most gym supplements available today.",
      author: "ROHIT S.",
      role: "GYM ENTHUSIAST",
    },
    {
      id: 2,
      quote:
        "Half scoop was enough for my session. Strong activation without jitters. Definitely not beginner stuff, serious performance formula.",
      author: "FAUZAN K.",
      role: "ATHLETE",
    },
    {
      id: 3,
      quote:
        "Pump felt dense and controlled, not bloated. Strength stayed consistent till last set. Very impressed with formulation quality.",
      author: "SARAH M.",
      role: "POWERLIFTER",
    },
    {
      id: 4,
      quote:
        "High stim but surprisingly balanced. No anxiety spike, no harsh crash. Workout intensity stayed sharp and focused throughout.",
      author: "JAMES T.",
      role: "CROSSFIT ATHLETE",
    },
    {
      id: 5,
      quote:
        "Tried many pre-workouts before, but this feels structured. Energy layered, smooth and powerful. Built for disciplined lifters only.",
      author: "MIKE R.",
      role: "BODYBUILDER",
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length
    );
  };

  const visibleCards = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="relative bg-black py-12 sm:py-14 md:py-16 overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="creepster-regular text-red-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                WHAT OUR
              </h2>
              <h2 className="creepster-regular text-red-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                CUSTOMERS  SAY
              </h2>
              
            </div>

            <p className="global-text-style max-w-md mx-auto lg:mx-0">
              PROMOLECULES™ FUELS THE RITUAL – BUILT FOR THOSE WHO TRAIN
              HARDER, GO FURTHER AND NEVER BACK DOWN.
            </p>

            {/* Arrows */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-red-600 hover:bg-red-700 cursor-pointer active:scale-95 p-3 sm:p-4 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / 2) === i
                        ? "w-6 bg-red-600"
                        : "w-2 bg-red-600/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-red-600 hover:bg-red-700 active:scale-95 cursor-pointer p-3 sm:p-4 rounded-full transition-all duration-200"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Side - Two Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -100, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {visibleCards.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-900/40 to-red-950/60 backdrop-blur-sm border-2 border-red-600/30 rounded-3xl p-6 sm:p-7 space-y-5 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]"
                  >
                    <div className="space-y-4">
                      <Quote size={36} className="text-red-600" />
                      <p className="global-text-style">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white font-bold text-base sm:text-lg tracking-wider">
                        {testimonial.author}
                      </p>
                      <p className="global-text-style">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;