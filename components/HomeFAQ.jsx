"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ShieldAlert } from "lucide-react";
import { useLocale } from "./LocaleProvider";

/** Home page FAQ accordion. First question adapts to the country subdomain. */
export default function HomeFAQ() {
  const { t, fmt } = useLocale();
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = t.faq.map((f) => ({ q: fmt(f.q), a: f.a }));

  return (
    <section id="faq" className="bg-black py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-px bg-red-400" />
            {t.ui.faq_kicker}
            <span className="w-8 h-px bg-red-400" />
          </p>
          <h2 className="text-white font-black uppercase leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            {t.faq_h}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 ${
                  open ? "border-red-500/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-start"
                >
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">{f.q}</h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      open ? "rotate-45 bg-red-600 border-red-600 text-white" : "border-white/20 text-white/70"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 text-white/70 text-sm sm:text-base leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-dashed border-white/15 px-5 py-4">
          <ShieldAlert size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            {t.safety}
          </p>
        </div>
      </div>
    </section>
  );
}
