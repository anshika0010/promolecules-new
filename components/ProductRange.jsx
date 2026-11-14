"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PRODUCTS as products } from "@/data/products";
import { useLocale } from "./LocaleProvider";


export default function ProductRange() {
  const { t, bidi } = useLocale();
  return (
    <section id="product-range" className="bg-black py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flnal Assessment 1 (IA1) before theex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
              <span className="w-8 h-px bg-red-400" />
              {t.ui.our_formulas}
            </p>
            <h2 className="text-white font-black uppercase leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              {t.arsenal_h}
            </h2>
          </div>
          <Link
            href="/shop/"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors"
          >
            {t.view_all}
            <ChevronRight size={16} className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={p.href}
                className="group flex flex-col h-full rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#111]">
                  <Image
                    src={p.image}
                    alt={`${p.name} – ${p.category}`}
                    fill
                    sizes="(min-width:1280px) 20vw, (min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 start-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-red-400">
                    {t.ui.categories[p.categoryKey]}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-white font-black text-lg tracking-wide">{bidi(p.name)}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed flex-1">{bidi(t.pd[i])}</p>
                
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
