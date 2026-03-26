import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrendingCategory() {
  const categories = [
    {
      title: "PRE-WORKOUT",
      desc: "Engineered to boost focus, activate CNS, and sustain strength—without caffeine spikes or underdosed formulas.",
      image: "/father-of-insane-warflex-products.webp",
      hoverImage: "/promolecules0father-of-insane-warflex-combo-offers.webp",
      link: "/product/",
    },
    {
      title: "FAT BURNER",
      desc: "Supports metabolism, energy burn, and fat loss—without stimulant overload or crashes.",
      image: "/product2.webp",
      hoverImage: "/hoverproduct.webp",
      link: "/product/",
    },
    {
      title: "MUSCLE HYDRATION",
      desc: "Enhances hydration, muscle fullness, and density—without bloating or heaviness.",
      image: "/promolecules-hydrapump-new.webp",
      hoverImage: "/promolecules-hydrapump.webp",
      link: "/product/",
    },
    {
      title: "MERCHANDISE",
      desc: "Performance-driven apparel and training essentials designed for serious gym culture and representing discipline.",
      image: "/father-of-insane-fusion-merch-product.webp",
      hoverImage: "/father-of-insane-fusion.webp",
      link: "/merch",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto bg-black py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-30" />

      {/* Heading */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
        {/* Left */}
        <div className="relative z-10 w-full lg:max-w-[50%]">
          <h2 className="creepster-regular heading leading-none text-center">
            TRENDING <br /> CATEGORY
          </h2>
        </div>

        {/* Right — hidden on mobile */}
        <div className="hidden md:block max-w-6xl mx-auto lg:max-w-[40%]">
          <p className="global-text-style uppercase text-justify">
            In today's fitness market, supplements are everywhere but not all
            supplements are created equal. Many low-cost brands compromise on
            ingredient purity, use under-dosed blends, or source unverified raw
            materials that deliver no real results.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 mt-8 space-y-0">
        {categories.map((item, index) => (
          <Link
            key={index}
            href={item.link || "#"}
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="group relative flex items-center justify-between 
                border-b border-white/10 overflow-hidden py-3 sm:py-4
                transition-all duration-500 hover:rounded-xl cursor-pointer
                gap-3 sm:gap-4"
            >
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <Image
                  src="/promolecules-productcardbg.webp"
                  alt="hover bg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Left: Image */}
              <div
                className="relative flex-shrink-0
                  w-[90px] h-[90px]
                  sm:w-[160px] sm:h-[140px]
                  md:w-[240px] md:h-[170px]
                  lg:w-[280px] lg:h-[190px]
                  rounded-lg border border-white/10 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <Image
                  src={item.hoverImage}
                  alt={item.title}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              {/* Middle: Text */}
              <div className="flex flex-col justify-center flex-1 min-w-0 px-1 sm:px-3">
                <h3
                  className="creepster-regular text-red-600 
                    text-lg xs:text-xl sm:text-3xl md:text-4xl tracking-wider
                    transition-colors duration-500 group-hover:text-white
                    leading-tight"
                >
                  {item.title}
                </h3>

                <p
                  className="mt-1 sm:mt-2 
                    global-text-style leading-relaxed
                    transition-colors duration-500 group-hover:text-white
                    text-xs sm:text-sm md:text-base
                    line-clamp-2 sm:line-clamp-3"
                >
                  {item.desc}
                </p>
              </div>

              {/* Right: Arrow */}
              <div className="flex-shrink-0 pr-1 sm:pr-2">
                <ArrowRight
                  className="text-white 
                    w-5 h-5 
                    sm:w-7 sm:h-7 
                    md:w-10 md:h-10 
                    lg:w-14 lg:h-14
                    transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}