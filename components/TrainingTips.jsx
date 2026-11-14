"use client";

import { motion } from "framer-motion";
import { Droplets, Sun, Moon, Mountain, Snowflake, Thermometer } from "lucide-react";
import { getCountryTips } from "@/data/countries";
import { useLocale } from "./LocaleProvider";

const TIP_ICONS = { hot: Sun, humid: Droplets, ramadan: Moon, altitude: Mountain, cold: Snowflake, generic: Thermometer };

/** Climate training tips. Which tips show per country is set in data/countries.js (COUNTRY_TIPS). */
export default function TrainingTips() {
  const { t, country, rich } = useLocale();
  const tips = getCountryTips(country?.code).map((key) => ({
    key,
    icon: TIP_ICONS[key],
    title: t.ui.tip_titles[key],
    text: t.tips[key],
  }));

  return (
    <section id="training-tips" className="bg-black py-16 sm:py-20 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
          <span className="w-8 h-px bg-red-400" />
          {t.ui.train_smart}
        </p>
        <h2 className="text-white font-black uppercase leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-12">
          {rich(t.local_h)}
        </h2>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {tips.map(({ key, icon: Icon, title, text }, i) => (
            <motion.div
              key={key}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8 overflow-hidden"
            >
              <span className="absolute -end-4 -bottom-6 text-[120px] font-black leading-none text-white/[0.03] select-none">
                0{i + 1}
              </span>
              <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center">
                <Icon size={24} className="text-red-500" />
              </span>
              <div className="relative">
                <h3 className="text-white font-black uppercase tracking-wide text-base sm:text-lg">{title}</h3>
                <p className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
