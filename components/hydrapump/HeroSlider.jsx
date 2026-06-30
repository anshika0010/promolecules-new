"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    image: "/Promolecules/Hydrapump/hydrapump-banner-1.jpeg",
        title: "Boost your wellness routine",

  
  },
  {
    image: "/Promolecules/Hydrapump/hydrapump-banner-2.jpeg",
    eyebrow: "Limited time",
    title: "Boost your wellness routine",
    subtitle: "Save 20% on all Soursop bundles this week",
    cta: "View offer",
  },
  {
    image: "/Promolecules/Hydrapump/hydrapump-banner-3.jpeg",
    eyebrow: "Customer favorite",
    title: "Loved by thousands of happy customers",
    subtitle: "Real results, real stories, real Soursop",
    cta: "Read reviews",
  },
];

const AUTOPLAY_DELAY = 2000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % banners.length) + banners.length) % banners.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full aspect-[16/7] min-h-[320px]">
        {banners.map((banner, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous banner"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-gray-800 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next banner"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-gray-800 transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to banner ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}