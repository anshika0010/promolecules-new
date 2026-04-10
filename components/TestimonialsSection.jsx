"use client";

import React, { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const dragStartX = useRef(null);
  const isDragging = useRef(false);

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

  // ── Mouse handlers ──
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) {
      isDragging.current = true;
    }
  };

  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextTestimonial() : prevTestimonial();
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    dragStartX.current = null;
    isDragging.current = false;
  };

  // ── Touch handlers ──
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextTestimonial() : prevTestimonial();
    }
    dragStartX.current = null;
  };

  // Shared arrows JSX — reused in both positions
  const ArrowControls = () => (
    <div className="flex items-center gap-4">
      <button
        onClick={prevTestimonial}
        className="bg-red-600 hover:bg-red-700 cursor-pointer active:scale-95 p-3 sm:p-4 rounded-full transition-all duration-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
          (_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === i
                  ? "w-6 bg-red-600"
                  : "w-2 bg-red-600/30"
              }`}
            />
          )
        )}
      </div>

      <button
        onClick={nextTestimonial}
        className="bg-red-600 hover:bg-red-700 active:scale-95 cursor-pointer p-3 sm:p-4 rounded-full transition-all duration-200"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} className="text-white" />
      </button>
    </div>
  );

  return (
    <section className="relative bg-black py-2 sm:py-4 md:py-6 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="creepster-regular heading leading-none">
                WHAT OUR
              </h2>
              <h2 className="creepster-regular heading leading-none">
                CUSTOMERS SAY
              </h2>
            </div>

            <p className="global-text-style max-w-md mx-auto lg:mx-0 text-sm sm:text-sm md:text-lg">
              PROMOLECULES™ FUELS THE RITUAL – BUILT FOR THOSE WHO TRAIN HARDER,
              GO FURTHER AND NEVER BACK DOWN.
            </p>

            {/* Arrows — visible on sm and above (tablet + desktop), hidden on mobile */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start">
              <ArrowControls />
            </div>
          </div>

          {/* Right Side — draggable + swipeable */}
          <div className="flex flex-col gap-4">
            <div
              className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction * 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction * -100, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 md:gap-6"
                  drag={false}
                >
                  {visibleCards.map((testimonial, index) => (
                    <div
                      key={index}
                      className="
                        bg-gradient-to-br from-red-900/40 to-red-950/60
                        backdrop-blur-sm border-2 border-red-600/30 rounded-2xl md:rounded-3xl
                        p-3 sm:p-4 md:p-6 lg:p-8
                        flex flex-col justify-between
                        min-h-[200px] sm:min-h-[240px] md:min-h-[300px] lg:min-h-[340px]
                        space-y-2 md:space-y-4
                        pointer-events-none
                      "
                    >
                      <div className="space-y-2 md:space-y-4">
                        <Quote size={24} className="text-red-600 md:w-9 md:h-9" />
                        <p className="global-text-style text-xs sm:text-sm md:text-base leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </div>

                      <div className="pt-2 md:pt-4 border-t border-white/10">
                        <p className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wider">
                          {testimonial.author}
                        </p>
                        <p className="global-text-style text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows — visible on mobile only (below cards), hidden on sm and above */}
            <div className="flex sm:hidden justify-center">
              <ArrowControls />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;