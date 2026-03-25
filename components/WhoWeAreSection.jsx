"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WhoWeAreSection = () => {
  return (
    <section className="w-full bg-black overflow-hidden py-2 sm:py-4 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title Block */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="creepster-regular heading leading-tight"
          >
            WHO-WE-ARE
          </motion.h1>

          <div className="h-1 bg-red-500 w-[100px] sm:w-[250px] md:w-[300px] lg:w-[450px] rounded-full mt-2" />

          <p className="global-text-style mt-4 max-w-xl px-4">
            Promolecules™ focuses on performance and helps you push limits.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2 md:gap-8 items-center sm:items:center">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:scale-[1.03] transition-transform duration-300 px-2"
          >
         <div className="hidden lg:block">
  <h2 className="text-red-600 font-extrabold text-2xl mb-3">
    Train. Fuel. Dominate.
  </h2>
  <p className="global-text-style leading-relaxed">
    Promolecules™ is a high-end sports nutrition brand for serious athletes.
  </p>
</div>
          </motion.div>

          {/* CTA — center column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Link
              href="/about/who-we-are/"
              aria-label="View more about us"
              className="group flex items-center gap-4 border-2 border-white/20 hover:border-red-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-600/10"
            >
              <span className="font-bold text-xs tracking-[0.15em] uppercase">
                View More
              </span>
              <div className="bg-white/10 group-hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2 */}
        <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="hidden lg:block hover:scale-[1.03] transition-transform duration-300 px-2"
>
  <h2 className="text-red-600 font-extrabold text-2xl mb-3">
    No Secrets. Just Pure Power.
  </h2>
  <p className="global-text-style leading-relaxed">
    Every product meets high USA quality standards and uses clear component lists and clinical doses.
  </p>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;