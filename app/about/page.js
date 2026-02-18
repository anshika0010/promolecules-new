"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

const headings = [
  { title: "WHO WE ARE", url: "/about/who-we-are" },
  { title: "WHAT WE DELIVER", url: "/about/what-we-deliver" },
  { title: "HISTORY", url: "/about/history" },
  { title: "FAQ", url: "/about/faq" },
];

const WhoWeAreSection = () => {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
        
        {/* Background */}
        <Image
          src="/about.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Center Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto py-12 sm:py-16">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">

            {headings.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="group w-full flex items-center justify-center md:justify-between"
              >
                {/* Heading */}
                <p
                  className="
                  anton-regular 
                  text-red-600 
                  uppercase 
                  font-black 
                  tracking-wide
                  leading-[0.9]
                  text-[24px]
                  xs:text-[30px]
                  sm:text-[42px]
                  md:text-[48px]
                  lg:text-[70px]
                  xl:text-[90px]
                  transition-all duration-300
                  group-hover:text-white
                  text-center md:text-left
                  break-words
                  "
                >
                  {item.title}
                </p>

                {/* Arrow */}
                <ArrowRight
                  className="
                  text-red-600 
                  group-hover:text-white 
                  transition-all duration-300 
                  group-hover:translate-x-3
                  hidden md:block
                  shrink-0
                  "
                  size={50}
                />
              </Link>
            ))}

          </div>
        </div>

        {/* Bottom Social Links */}
     {/* Bottom Social Links */}
<div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10">
  <div
    className="max-w-7xl mx-auto px-4 sm:px-6 
    flex flex-wrap justify-center md:justify-between 
    gap-4 sm:gap-6 
    text-white tracking-widest uppercase"
  >
    {[
      { name: "Instagram", url: "https://instagram.com/yourusername" },
      { name: "Facebook", url: "https://facebook.com/yourusername" },
      { name: "Twitter", url: "https://twitter.com/yourusername" },
      { name: "YouTube", url: "https://youtube.com/@yourchannel" },
      { name: "Pinterest", url: "https://pinterest.com/yourusername" },
    ].map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
        anton-regular 
        font-bold 
        cursor-pointer 
        transition
        text-base sm:text-lg md:text-xl lg:text-2xl
        hover:text-red-500
        "
      >
        {social.name} ↗
      </a>
    ))}
  </div>
</div>

      </section>

      <NewsletterSection />
    </>
  );
};

export default WhoWeAreSection;
