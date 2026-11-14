"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, ShieldCheck, Trophy, ChevronRight } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

/** About text section. The last paragraph adapts to the country subdomain ("in Belize"). */
export default function AboutIntro() {
  const { t, fmt } = useLocale();
  const icons = [Dumbbell, ShieldCheck, Trophy];
  const blocks = t.about.map((text, i) => ({
    icon: icons[i],
    title: t.ui.about_titles[i],
    text: fmt(text),
  }));

  return (
    <section id="about-intro" className="bg-black py-12 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-8 sm:mb-10">
          <span className="w-8 h-px bg-red-400" />
          {t.ui.who_we_are}
        </p>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {blocks.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8"
            >
              <span className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center mb-5">
                <Icon size={22} className="text-red-500" />
              </span>
              <h3 className="text-white font-black uppercase tracking-wide text-base sm:text-lg">{title}</h3>
              <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <Link
            href="/contact-us/"
            className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-full transition-colors duration-200"
          >
            {t.ui.contact}
            <ChevronRight size={16} className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
