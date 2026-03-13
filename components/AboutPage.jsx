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

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/promolecules/" },
  { name: "Facebook", url: "https://www.facebook.com/promolecules.official" },
  { name: "Twitter", url: "https://x.com/promolecules" },
  { name: "YouTube", url: "https://www.youtube.com/@Promolecules" },
  { name: "Pinterest", url: "https://www.pinterest.com/promolecules/" },
];

const AboutPage = () => {

  
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-10">

      {/* Background Image */}
      <Image
        src="/about.png"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20">

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-14">

          {headings.map((item, index) => (
            <div key={index} className="relative group w-full overflow-hidden">

              {/* Marquee Hover Strip */}
              <div className="absolute -top-12 md:-top-16 left-0 w-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

                {/* Edge Gradients */}
                <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="marquee-wrapper whitespace-nowrap">
                  <span className="marquee-text text-xs sm:text-sm md:text-base">
                    {item.title} • {item.title} • {item.title} • {item.title} •
                  </span>
                  <span className="marquee-text text-xs sm:text-sm md:text-base">
                    {item.title} • {item.title} • {item.title} • {item.title} •
                  </span>
                </div>
              </div>

              {/* Heading Row */}
              <Link
                href={item.url}
                className="flex items-center justify-center md:justify-between gap-4 group"
              >

                <h2
                  className="
                  anton-regular
                  text-red-600
                  uppercase
                  font-black
                  leading-[0.9]
                  tracking-wide
                  text-[26px]
                  sm:text-[40px]
                  md:text-[60px]
                  lg:text-[80px]
                  xl:text-[100px]
                  text-center md:text-left
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:blur-sm
                  group-hover:opacity-40
                  "
                >
                  {item.title}
                </h2>

                {/* Arrow Icon */}
                <ArrowRight
                  size={60}
                  className="
                  text-red-600
                  hidden md:block
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:translate-x-4
                  "
                />

              </Link>
            </div>
          ))}

        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center md:justify-between gap-3 sm:gap-5 text-white uppercase tracking-widest">

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
              anton-regular
              font-bold
              transition
              text-xs sm:text-sm md:text-lg lg:text-xl
              hover:text-red-500
              "
            >
              {social.name} ↗
            </a>
          ))}

        </div>
      </div>

    </section>
  );
};

export default AboutPage;