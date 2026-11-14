"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

/**
 * Home hero with a background image.
 * Text adapts to the country subdomain: bz.promolecules.com → "in Belize".
 * On the main (global) site it falls back to "worldwide".
 */
export default function CountryHero() {
  const { t, fmt, rich } = useLocale();

  const fadeUp = (delay = 0) => ({
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-black">
      {/* ── Background image ── */}
      <Image
        src="/homebgimg.jpeg"
        alt="Promolecules pre-workout supplements and athlete training"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] lg:object-center"
      />
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-black/90 via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[2000px] mx-auto px-5 sm:px-10 lg:px-16 py-24">
        <div className="max-w-4xl">
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-px bg-red-400" />
            {t.kicker}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-white font-black uppercase  leading-[1.05] tracking-tight text-3xl sm:text-5xl lg:text-6xl"
          >
            {rich(t.h1, "text-red-500", "worldwide")}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 sm:mt-6 text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
          >
            {fmt(t.hero_p)}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/shop/"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              {t.cta_shop}
              <ChevronRight size={16} className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 rounded-full transition-all duration-200"
            >
              {t.cta_about}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
