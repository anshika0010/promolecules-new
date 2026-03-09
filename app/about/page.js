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
 
   

        {/* Center Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto py-12 sm:py-16">
          <div className="flex flex-col items-center gap-8">

            {headings.map((item, index) => (
              <div key={index} className="relative group w-full overflow-hidden">

                {/* 🔥 Marquee Strip */}
                <div className="absolute -top-16 left-0 w-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

                  {/* Edge Fade */}
                  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

                  <div className="marquee-wrapper whitespace-nowrap">
                    <span className="marquee-text">
                      {item.title} &nbsp; • &nbsp; {item.title} &nbsp; • &nbsp; {item.title} &nbsp; • &nbsp;
                    </span>
                    <span className="marquee-text">
                      {item.title} &nbsp; • &nbsp; {item.title} &nbsp; • &nbsp; {item.title} &nbsp; • &nbsp;
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <Link
                  href={item.url}
                  className="group w-full flex items-center justify-center md:justify-between"
                >
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
                    group-hover:blur-sm
                    group-hover:opacity-40
                    text-center md:text-left
                    break-words
                    "
                  >
                    {item.title}
                  </p>

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
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Social Links */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10">
          <div
            className="max-w-7xl mx-auto  sm:px-1 
            flex flex-wrap justify-center md:justify-between 
            gap-4 sm:gap-6 
            text-white tracking-widest uppercase"
          >
            {[
              { name: "Instagram", url: "https://www.instagram.com/promolecules/" },
              { name: "Facebook", url: "https://www.facebook.com/promolecules.official" },
              { name: "Twitter", url: "https://x.com/promolecules" },
              { name: "YouTube", url: "https://www.youtube.com/@Promolecules" },
              { name: "Pinterest", url: "https://www.pinterest.com/promolecules/" },
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

    </>
  );
};

export default WhoWeAreSection;
