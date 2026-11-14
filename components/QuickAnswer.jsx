"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Flame, Clock, ChevronRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

/**
 * "Quick answer" block under the home hero.
 * Country name comes from the subdomain (bz.promolecules.com → "in Belize").
 */
export default function QuickAnswer() {
  const { t, fmt, rich, bidi } = useLocale();

  const products = [
    {
      name: "Father of Insane™",
      tag: t.ui.quick_tags[0],
      href: "/product/father-of-insane/",
      icon: Flame,
    },
    {
      name: "Warflex™",
      tag: t.ui.quick_tags[1],
      href: "/product/warflex/",
      icon: Zap,
    },
  ];

  return (
    <section id="quick-answer" className="relative bg-black py-1 sm:py-2 lg:py-2 px-5 sm:px-10 lg:px-16">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-10 lg:p-12"
      >
        <p className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4">
          <span className="w-8 h-px bg-red-400" />
          {t.quick_t}
        </p>

        <h2 className="text-white font-black uppercase leading-tight tracking-tight text-2xl sm:text-3xl lg:text-4xl">
          {rich(t.ui.quick_heading)}
        </h2>

        <p className="mt-5 text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed">
          {fmt(t.quick)}
        </p>

        {/* Product picks */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {products.map(({ name, tag, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 hover:border-red-500/50 hover:bg-red-500/5 px-5 py-4 transition-colors"
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-red-600/15 border border-red-500/30 flex items-center justify-center">
                <Icon size={20} className="text-red-500" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-white font-bold tracking-wide">{bidi(name)}</span>
                <span className="block text-white/50 text-xs sm:text-sm">{bidi(tag)}</span>
              </span>
              <ChevronRight size={18} className="rtl:rotate-180 text-white/40 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:text-red-400" />
            </Link>
          ))}
        </div>

        {/* Dosing tip */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-white/15 px-5 py-4">
          <Clock size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p className="text-white/70 text-sm">{t.ui.quick_tip}</p>
        </div>
      </motion.div>
    </section>
  );
}
