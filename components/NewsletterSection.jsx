"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Subscribe email:", email);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Successfully subscribed!");
    }, 1000);
  };

  return (
 <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/10" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      
      {/* Left Side - Image */}
      <div className="flex items-center justify-center lg:justify-start">
        <Image
          src="/newsletterimage.png"
          alt="Logo"
          width={220}
          height={80}
          className="w-36 sm:w-48 lg:w-[200px] h-auto"
          priority
        />
      </div>

      {/* Right Side */}
      <div className="space-y-6 sm:space-y-8 lg:pl-16 text-center lg:text-left">
        
        {/* Title */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center lg:items-start"
        >
          <h2 className="creepster-regular text-red-600 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            SUBSCRIBE-TO
          </h2>

          <h2 className="creepster-regular text-red-600 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            PROMOLECULES™
          </h2>
        </motion.div>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base font-bold tracking-wide max-w-lg leading-relaxed mx-auto lg:mx-0">
          YOUR INSIDE SCOOP ON WHAT'S NEW, WHAT'S NEXT,
          <br className="hidden sm:block" />
          AND WHAT'S BACK IN STOCK.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-lg mx-auto lg:mx-0">
          
          {/* Email Input */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-[2px] sm:p-[3px] rounded-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              required
              className="w-full bg-black text-white placeholder-red-600/80 px-5 sm:px-6 py-4 sm:py-5 rounded-xl focus:outline-none font-bold tracking-widest text-xs sm:text-sm"
            />
            <button
              type="button"
              className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-500 transition-colors"
            >
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.98] text-black font-black px-6 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-200 text-base sm:text-xl tracking-widest shadow-2xl shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "JOINING..." : "JOIN NOW"}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default NewsletterSection;
