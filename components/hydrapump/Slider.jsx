'use client';

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Hydrapump Blur Razz Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-bluerazz.jpeg",
    text:
      "Soursop is a rich source of natural antioxidants that support overall well-being and vitality. Incorporating Soursop into your wellness routine can help your body's natural defenses and promote a healthy lifestyle.",
  },
  {
    title: "Hydrapump Orange Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-orange.jpeg",
    text:
      "Soursop contains compounds studied for their ability to support healthy cell function, contributing to the maintenance of overall cellular well-being.",
  },
  {
    title: "Hydrapump Strawberry Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-strawberry.jpeg",
    text:
      "Soursop is rich in antioxidants and nutrients that naturally support your body's defenses. Your body with key elements that contribute to overall wellness and help maintain a balanced and healthy system.",
  },
    {
    title: "Hydrapump Sour Apple Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-sour-apple.jpeg",
    text:
      "Soursop is a rich source of natural antioxidants that support overall well-being and vitality. Incorporating Soursop into your wellness routine can help your body's natural defenses and promote a healthy lifestyle.",
  },
  {
    title: "Hydrapump Mint Mojito Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-mint-mojito.jpeg",
    text:
      "Soursop contains compounds studied for their ability to support healthy cell function, contributing to the maintenance of overall cellular well-being.",
  },
  {
    title: "Hydrapump Mango Pineapple Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-mango-pineapple.jpeg",
    text:
      "Soursop is rich in antioxidants and nutrients that naturally support your body's defenses. Your body with key elements that contribute to overall wellness and help maintain a balanced and healthy system.",
  },
    {
    title: "Hydrapump Juicy grapes Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-juicy-grapes.jpeg",
    text:
      "Soursop contains compounds studied for their ability to support healthy cell function, contributing to the maintenance of overall cellular well-being.",
  },
  {
    title: "Hydrapump Cherry Lemonade Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-cherry-lemonade.jpeg",
    text:
      "Soursop is rich in antioxidants and nutrients that naturally support your body's defenses. Your body with key elements that contribute to overall wellness and help maintain a balanced and healthy system.",
  },
    {
    title: "Hydrapump BubbleGum Flavour",
    image:
      "/Promolecules/Hydrapump/hydrapump-bubblegum.jpeg",
    text:
      "Soursop is rich in antioxidants and nutrients that naturally support your body's defenses. Your body with key elements that contribute to overall wellness and help maintain a balanced and healthy system.",
  },
  
];

function useSlidesPerView() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) setN(1);
      else if (window.innerWidth < 1024) setN(2);
      else setN(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return n;
}

export default function Slider() {
  const perView = useSlidesPerView();
  const maxIndex = Math.max(0, slides.length - perView);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const dragState = useRef({ startX: 0, dragging: false, delta: 0 });
  const [dragDelta, setDragDelta] = useState(0);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const goTo = (i) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
  };

  const onPointerDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    dragState.current.delta = x - dragState.current.startX;
    setDragDelta(dragState.current.delta);
  };
  const onPointerUp = () => {
    if (!dragState.current.dragging) return;
    const threshold = 60;
    if (dragState.current.delta < -threshold) goTo(index + 1);
    else if (dragState.current.delta > threshold) goTo(index - 1);
    dragState.current.dragging = false;
    dragState.current.delta = 0;
    setDragDelta(0);
  };

  const slideWidthPct = 100 / perView;
  const baseTranslate = -(index * slideWidthPct);
  const dragPct = trackRef.current
    ? (dragDelta / trackRef.current.offsetWidth) * 100
    : 0;

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-7.5xl mx-auto">
        <div className="relative">
          <div
            className="overflow-hidden select-none"
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-400 ease-out"
              style={{
                transform: `translateX(${baseTranslate + dragPct}%)`,
                transitionDuration: dragState.current.dragging ? "0ms" : "400ms",
              }}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ width: `${slideWidthPct}%` }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/4] group">
                    <img
                      src={s.image}
                      alt={s.title}
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="inline-block bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-md mb-3 uppercase">
                        {s.title}
                      </span>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            disabled={index === maxIndex}
            aria-label="Next slide"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-red-600" : "w-2 bg-emerald-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}