"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/footerbg.png')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl  mx-auto px-6 py-20">
        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* ABOUT */}
          <div>
            <h3 className="text-red-600 text-md font-bold tracking-[2px] mb-6">
              DISCLAIMER
            </h3>

            <p className="text-white text-sm leading-relaxed max-w-xs uppercase">
Promolecules supplements are for healthy adults and for educational purposes only, not medical advice. Consult a healthcare professional before use. Do not exceed the recommended dosage. Not intended to diagnose, treat, cure, or prevent any disease. Results may vary.          </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-red-600 text-md font-bold tracking-[2px] mb-6">
              QUICK LINKS
            </h3>

            <nav className="flex flex-col gap-3">
              <FooterLink href="/about" label="ABOUT US" />
              <FooterLink href="/contact-us" label="CONTACT" />
              <FooterLink href="/products" label="PRODUCTS" />
              <FooterLink href="/blogs" label="BLOGS" />
              <FooterLink href="/domestic" label="DOMESTIC" />
              <FooterLink href="/international" label="INTERNATIONAL" />
            </nav>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-red-600 text-md font-bold tracking-[2px] mb-6">
              CATEGORIES
            </h3>

            <nav className="flex flex-col gap-3">
              <FooterLink href="/products" label="ESSENTIAL" />
              <FooterLink href="/productdetailpage" label="PREWORKOUT" />
              <FooterLink href="/products" label="FAT BURNER" />
              <FooterLink href="/productdetailpage" label="PROTEIN" />
              <FooterLink href="/products" label="GAINER" />
              <FooterLink href="/products" label="TEST BOOSTER" />
              <FooterLink href="/merch" label="MERCHANDISE" />
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-red-600 text-md font-bold tracking-[2px] mb-6">
              CONTACT
            </h3>

            <div className="space-y-3 text-sm font-bold text-white">
               <div className="flex items-start gap-2">
                <span>📞</span>
                <span>+1 (786) 789-2121</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📧</span>
                <span>info@promolecules.com</span>
              </div>
             
              {/* <div className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  123 Fitness Avenue, <br /> Los Angeles, CA 90001, USA
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* BIG BRAND TEXT */}
        <div className="mt-20">
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="creepster-regular text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-red-700 tracking-wide "
          >
            PROMOLECULES™
          </motion.h2>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs tracking-wide text-gray-300">
              ©2026 PROMOLECULES™ ALL RIGHTS RESERVED.
            </p>

            <div className="flex gap-8">
              <FooterSmallLink href="/PrivacyPolicy" label="PRIVACY POLICY" />
              <FooterSmallLink
                href="/TermsConditions"
                label="TERMS OF SERVICE"
              />
              <FooterSmallLink href="/cookies-policy" label="COOKIE POLICY" />
            </div>

            <p className="text-xs text-gray-300 text-center md:text-right max-w-sm">
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

/* reusable link */

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-white text-sm font-semibold tracking-wide hover:text-red-600 transition"
    >
      {label}
    </Link>
  );
}

function FooterSmallLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold tracking-wider hover:text-red-600 transition"
    >
      {label}
    </Link>
  );
}
