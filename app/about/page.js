"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const headings = [
  { title: "WHO WE ARE", url: "/about/who-we-are" },
  { title: "WHAT WE DELIVER", url: "/about/what-we-deliver" },
  { title: "HISTORY", url: "/about/history" },
  { title: "FAQ", url: "/about/faq" },
];

const WhoWeAreSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4">
      
      {/* Background Image */}
      <Image
        src="/about.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto py-12">
        <div className="flex flex-col items-center gap-2 md:gap-3">

          {headings.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="group w-full flex items-center justify-center md:justify-between gap-1"
            >
              {/* Heading */}
              <p
                className="
                anton-regular 
                cursor-pointer
                text-red-600 
                uppercase 
                font-black 
                tracking-wide
                leading-[0.9]
                text-[27px] 
                sm:text-[40px] 
                md:text-[40px] 
                lg:text-[70px] 
                xl:text-[90px]
                transition-all duration-300
                group-hover:text-white
                text-center md:text-left
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
                "
                size={60}
              />
            </Link>
          ))}

        </div>
      </div>

      {/* Bottom Social Links */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center md:justify-between gap-4 text-white text-[10px] sm:text-xs tracking-widest uppercase">
          {["Instagram", "Facebook", "Twitter", "YouTube", "Pinterest"].map(
            (social, index) => (
              <span
                key={index}
                className="hover:text-red-500 text-2xl anton-regular font-bold cursor-pointer transition"
              >
                {social} ↗
              </span>
            )
          )}
        </div>
      </div>

    </section>
  );
};

export default WhoWeAreSection;
