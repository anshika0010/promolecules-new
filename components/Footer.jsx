'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/footerbg.png')" }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider mb-6">
              <span className="text-white">PREMIUM SPORTS NUTRITION</span>
              <br />
              <span className="text-white">SUPPLEMENTS FOR </span>
              <span className="text-red-600">ATHLETES</span>
              <br />
              <span className="text-red-600">AND FITNESS ENTHUSIASTS.</span>
              <br />
              <span className="text-white">SCIENCE BACKED FORMULAS</span>
              <br />
              <span className="text-white">FOR OPTIMAL PERFORMANCE</span>
            </h3>

            <div className="space-y-2 pt-8">
              <p className="text-red-600 font-bold text-xs tracking-wider">CONTACT INFO:</p>
             
              <p className="text-white text-sm font-light">+91 120 480 8353</p>
              <p className="text-white text-sm font-light">CONTACT@PROMOLECULES.COM</p>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-red-600 font-bold text-xs tracking-wider mb-6">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/about" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                ABOUT US
              </Link>
              <Link 
                href="/contact" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                CONTACT
              </Link>
              <Link 
                href="/products" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                PRODUCTS
              </Link>
              <Link 
                href="/blogs" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                BLOGS
              </Link>
              <Link 
                href="/domestic" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                DOMESTIC
              </Link>
                <Link 
                href="/international" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                INTERNATIONAL
              </Link>
            </nav>
          </div>

          {/* Column 3 - Categories */}
          <div className="space-y-4">
            <h3 className="text-red-600 font-bold text-xs tracking-wider mb-6">
              CATEGORIES
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/products" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                ESSENTIAL
              </Link>
              <Link 
                href="/productdetailpage" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                PREWORKOUT
              </Link>
              <Link 
                href="/products/fat-burner" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                FAT BURNER
              </Link>
              <Link 
                href="productdetailpage" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                PROTEIN
              </Link>
              <Link 
                href="/products/gainer" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                GAINER
              </Link>
              <Link 
                href="/products" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                TEST-BOOSTER
              </Link>
              <Link 
                href="/merch" 
                className="text-white text-lg font-bold hover:text-red-600 transition-colors duration-200 tracking-wide"
              >
                MERCHANDISE
              </Link>
            </nav>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-red-600 font-bold text-xs tracking-wider mb-6">
              SIGN UP FOR OUR NEWSLETTER TO GET LATEST
              <br />
              INSIGHTS AND UPDATES
            </h3>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <p className="text-white text-xs tracking-wider font-semibold">
                ENTER YOUR EMAIL
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-transparent border-2 border-white/30 text-white placeholder-gray-400 px-6 py-3 rounded-full focus:outline-none focus:border-red-600 transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors duration-200 text-sm tracking-wider"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Large Logo */}
        <div className="mb-12">
                 <div className="relative flex flex-col items-start">
<motion.h2 initial={{ x: 200, opacity: 0 }}   // 👈 START position (right side)
  whileInView={{ x: 0, opacity: 1 }} // 👈 END position
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }} className="creepster-regular text-red-700 pl-10 text-9xl scale-x-110 tracking-wide">
  PROMOLECULES™
</motion.h2>
              </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-white text-xs tracking-wide">
              ©2026 PROMOLECULES™ ALL RIGHTS RESERVED.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-8">
              <Link 
                href="/PrivacyPolicy" 
                className="text-white text-xs hover:text-red-600 transition-colors tracking-wider font-semibold"
              >
                PRIVACY POLICY
              </Link>
              <Link 
                href="/TermsConditions" 
                className="text-white text-xs hover:text-red-600 transition-colors tracking-wider font-semibold"
              >
                TERMS OF SERVICE
              </Link>
              <Link 
                href="/cookies-policy " 
                className="text-white text-xs hover:text-red-600 transition-colors tracking-wider font-semibold"
              >
                COOKIE POLICY
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-white text-xs tracking-wide text-right max-w-sm">
              PREMIUM SPORTS NUTRITION SUPPLEMENTS FOR ATHLETES
              <br />
              AND FITNESS ENTHUSIASTS SCIENCE BACKED FORMULAS
              <br />
              FOR OPTIMAL PERFORMANCE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;