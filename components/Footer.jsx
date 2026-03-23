"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/promolecules-footer-background.webp')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto   px-4 sm:px-6 lg:px-8 py-8 sm:py-8 lg:py-6">
        {/* GRID — stacks to 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
          {/* DISCLAIMER */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-red-600 text-base sm:text-lg xl:text-xl font-extrabold tracking-[2px] mb-4 sm:mb-6">
              DISCLAIMER
            </h3>
            <p className="global-text-style text-sm leading-relaxed">
              Promolecules supplements are for healthy adults and for
              educational purposes only, not medical advice. Consult a
              healthcare professional before use. Do not exceed the recommended
              dosage. Not intended to diagnose, treat, cure, or prevent any
              disease. Results may vary.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-red-600 text-base sm:text-lg xl:text-xl font-extrabold tracking-[2px] mb-4 sm:mb-6">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 global-text-style">
              <FooterLink href="/about" label="ABOUT US" />
              <FooterLink href="/contact-us" label="CONTACT" />
              <FooterLink href="/shop" label="PRODUCTS" />
              <FooterLink href="/blog" label="BLOGS" />
                <FooterLink href="/about/faq/" label="faq" />
              <FooterLink href="/domestic" label="DOMESTIC" />
              <FooterLink href="/international" label="INTERNATIONAL" />
            </nav>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-red-600 text-base sm:text-lg xl:text-xl font-extrabold tracking-[2px] mb-4 sm:mb-6">
              CATEGORIES
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3 global-text-style">
              <FooterLink href="/shop" label="ESSENTIAL" />
              <FooterLink href="/product/" label="PREWORKOUT" />
              <FooterLink href="/shop" label="FAT BURNER" />
              <FooterLink href="/shop" label="PROTEIN" />
              <FooterLink href="/shop" label="GAINER" />
              <FooterLink href="/shop" label="TEST BOOSTER" />
              <FooterLink href="/merch" label="MERCHANDISE" />
            </nav>
          </div>

          {/* CONTACT */}
          <div className="global-text-style">
            <h3 className="text-red-600 text-base sm:text-lg xl:text-xl font-extrabold tracking-[2px] mb-4 sm:mb-6">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm   ">
              <div>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  Phone
                </span>
                <p className="mt-0.5">+1 (786) 789-2121</p>
              </div>
              <div>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  Email
                </span>
                <p className="mt-0.5 break-all">info@promolecules.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BIG BRAND TEXT */}
        <div className="mt-14 sm:mt-16 lg:mt-10 overflow-hidden">
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="creepster-regular text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-red-700 tracking-wide leading-none"
          >
            PROMOLECULES™
          </motion.h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <p className="global-text-style text-xs sm:text-sm text-center lg:text-left">
              ©2026 PROMOLECULES™ ALL RIGHTS RESERVED.
            </p>

            {/* Policy links — wrap naturally on small screens */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 global-text-style">
              <FooterSmallLink href="/privacy-policy" label="PRIVACY POLICY" />
              <FooterSmallLink
                href="/terms-conditions"
                label="TERMS OF SERVICE"
              />
              <FooterSmallLink href="/cookies-policy" label="COOKIE POLICY" />
            </div>

            {/* Tagline */}
            <p className="global-text-style text-xs sm:text-sm text-center lg:text-right max-w-xs mx-auto lg:mx-0">
              PREMIUM SPORTS NUTRITION SUPPLEMENTS FOR ATHLETES AND FITNESS
              ENTHUSIASTS. SCIENCE BACKED FORMULAS FOR OPTIMAL PERFORMANCE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ── Reusable links ─────────────────────────────────────────── */

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

function FooterSmallLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold tracking-wider hover:text-red-600 transition-colors duration-200 whitespace-nowrap"
    >
      {label}
    </Link>
  );
}
