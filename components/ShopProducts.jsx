"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocale } from "./LocaleProvider";
import { PRODUCTS, getPrice } from "@/data/products";

/**
 * Shop page product list.
 * Heading, currency and prices follow the country subdomain (bz → Belize, BZD).
 */
export default function ShopProducts() {
  const { t, lang, country, fmt, rich, bidi } = useLocale();

  const formatPrice = (value) =>
    new Intl.NumberFormat(country?.hreflang || "en", { // e.g. ar-AE, es-MX, fa-IR
      style: "currency",
      currency: country.currency,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <section id="shop-products" className="bg-black py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-white font-black uppercase leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            {rich(t.shop_h)}
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
            {/* On the global site there is no currency, so only the first sentence is shown */}
            {country ? fmt(t.shop_p) : t.shop_p.split(/(?<=\.)\s/)[0]}
          </p>
        </div>

        {/* Cards */}
        {/* 3 cards on the first row, 2 centred below (lg+) */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {PRODUCTS.map((p, i) => {
            const price = country ? getPrice(country.code, p.slug) : null;
            return (
              <motion.div
                key={p.slug}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} flex flex-col rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden hover:border-red-500/50 transition-colors duration-300`}
              >
                <Link href={p.href} className="group relative block aspect-square overflow-hidden bg-[#111]">
                  <Image
                    src={p.image}
                    alt={`${p.name} – ${p.category}`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 start-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-red-400">
                    {t.ui.categories[p.categoryKey]}
                  </span>
                </Link>

                <div className="flex flex-col flex-1 p-5">
                  <Link href={p.href}>
                    <h3 className="text-white font-black text-lg tracking-wide hover:text-red-400 transition-colors">
                      {bidi(p.name)}
                    </h3>
                  </Link>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed flex-1">{bidi(t.pd[i])}</p>

                  <p className="mt-4 text-sm">
                    <span className="text-white/50">{t.price}: </span>
                    <span className="text-white font-bold">
                      {price != null ? formatPrice(price) : t.ui.on_request}
                    </span>
                  </p>

                  <Link
                    href={`/contact-us/?product=${encodeURIComponent(p.name.replace("™", ""))}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase py-3 transition-colors duration-200"
                  >
                    <MessageCircle size={14} />
                    {t.order}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
