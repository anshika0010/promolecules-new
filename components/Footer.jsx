"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t, lang, displayFont } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/promolecules-footer-background.webp')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-10">
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <h2 dir="ltr" className="creepster-regular text-red-600 text-4xl sm:text-5xl tracking-wide leading-none">
                PROMOLECULES<span className="text-lg sm:text-xl align-super">™</span>
              </h2>
            </Link>
            <p className="global-text-style mt-3 text-white/70">{t.foot_tag}</p>
          </div>

          {/* LINKS */}
          <nav aria-label="Footer" className="flex flex-col gap-2 global-text-style">
            {["/", "/shop", "/about", "/blog", "/contact-us"].map((href, i) => (
              <FooterLink key={href} href={href} label={t.nav[i]} />
            ))}
          </nav>

          {/* CONTACT */}
          <div className="global-text-style">
            <h3 className={`text-red-600 tracking-wide text-2xl xl:text-4xl mb-2 sm:mb-3 ${displayFont}`}>
              {t.nav[4]}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/60 text-xs uppercase tracking-widest">{t.f_email}</span>
                <p className="mt-0.5 break-all lowercase">info@promolecules.com</p>
              </div>
              <div>
                <span className="text-white/60 text-xs uppercase tracking-widest">{t.ui.social}</span>
                {[
                  ["INSTAGRAM", "https://www.instagram.com/promolecules/"],
                  ["FACEBOOK", "https://www.facebook.com/promolecules.official"],
                  ["YOUTUBE", "https://www.youtube.com/@Promolecules"],
                  ["PINTEREST", "https://in.pinterest.com/promolecules/"],
                ].map(([label, href]) => (
                  <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-red-600 transition-colors duration-200">
                    <span className="mt-0.5 break-all uppercase">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll To Top Button ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 border border-red-500/40 rounded-full shadow-lg shadow-red-900/40 transition-colors duration-200"
          >
            <ArrowUp
              size={20}
              className="text-white group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

/* ── Reusable links ── */

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-white text-sm font-semibold tracking-wide hover:text-red-600 transition-colors duration-200"
    >
      {label}
    </Link>
  );
}
