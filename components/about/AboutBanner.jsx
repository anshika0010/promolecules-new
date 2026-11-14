"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

/** Top banner for the About page. */
export default function AboutBanner() {
  const { t } = useLocale();
  return (
    <section className="relative w-full h-[45vh] min-h-[320px] sm:h-[55vh] lg:h-[65vh] flex items-end overflow-hidden bg-black">
      <Image
        src="/promolecules-about-background-image.webp"
        alt="Athlete lit in red – Promolecules sports nutrition"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_75%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
          <Link href="/" className="hover:text-white transition-colors">{t.ui.home}</Link>
          <ChevronRight size={12} className="rtl:rotate-180" />
          <span className="text-red-400">{t.ui.about}</span>
        </nav>

        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black uppercase leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-7xl"
        >
          {/* Last word ("Promolecules" / "بروموليكيولز") in red, in every language */}
          {t.about_h.slice(0, t.about_h.lastIndexOf(" ") + 1)}
          <span className="text-red-500">{t.about_h.slice(t.about_h.lastIndexOf(" ") + 1)}</span>
        </motion.h1>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-white/70 text-sm sm:text-base lg:text-lg"
        >
          {t.foot_tag}
        </motion.p>
        </div>
      </div>
    </section>
  );
}
