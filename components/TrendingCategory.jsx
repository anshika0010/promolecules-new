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
      title: "Muscle Hydration",
      desc: "Enhances hydration, muscle fullness, and density—without bloating or heaviness.",
      image: "/promolecules-hydrapump-products.webp",
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
    <section className="relative max-w-7xl mx-auto bg-black py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-30" />

      {/* Heading */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        {/* Left */}
        <div className="relative z-10 w-full lg:max-w-[50%]">
          <h2
            className="creepster-regular heading
    leading-none text-center"
          >
            TRENDING <br /> CATEGORY
          </h2>
        </div>

        {/* Right */}
        <div className="max-w-6xl mx-auto lg:max-w-[40%]">
          <p className=" hidden md:block global-text-style uppercase justify-text">
            In today’s fitness market, supplements are everywhere but not all
            supplements are created equal. Many low-cost brands compromise on
            ingredient purity, use under-dosed blends, or source unverified raw
            materials that deliver no real results.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 mt-8">
        {categories.map((item, index) => (
          <Link
            key={index}
            href={item.link || "#"}
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="group relative flex items-center justify-between 
        border-b border-white/10  overflow-hidden
        transition-all duration-500 hover:rounded-xl cursor-pointer"
            >
              {/* HOVER BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 -z-10"
              >
                <Image
                  src="/promolecules-productcardbg.webp"
                  alt="hover bg"
                  fill
                  className="object-cover"
                />

                {/* optional dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Left: Image + Text */}
              <div className="flex flex-col sm:flex-row  gap-2 ">
                {/* Image */}
                <div
                  className="relative 
           sm:w-[200px] md:w-[300px] lg:w-[300px] 
            h-[150px] sm:h-[170px] md:h-[200px] lg:h-[200px] 
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
                {/* Text */}
                <div className="flex flex-col justify-center ">
                  <h3
                    className="creepster-regular text-red-600 
    text-2xl sm:text-3xl md:text-4xl tracking-wider pt-4
    transition-colors duration-500 group-hover:text-white"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 max-w-2xl 
    global-text-style leading-relaxed 
    transition-colors duration-500 group-hover:text-white"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <ArrowRight className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
