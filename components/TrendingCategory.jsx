import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrendingCategory() {
  const categories = [
     { title: "PRE-WORKOUT", desc: "Engineered stimulation systems designed to activate CNS, sharpen focus, and sustain strength output. Built for athletes who demand controlled intensity, not random caffeine spikes or underdosed performance formulas.", image: "/product1.png", hoverImage: "/hoverproduct2.png", link: "https://www.cost2costsupplement.com/product/warflex/", },
      { title: "FAT BURNER", desc: "Structured thermogenic blends supporting metabolic acceleration, energy expenditure, and disciplined fat-loss phases without chaotic stimulant overload or crash-driven rebound fatigue.", image: "/product2.png", hoverImage: "/hoverproduct.png", link: "https://www.cost2costsupplement.com/product/inpower-r/", }, 
      { title: "PRE-WORKOUT + ENERGY", desc: "Hybrid performance formulas combining structured stimulation and sustained energy architecture for athletes needing explosive output with endurance stability across long training sessions.", image: "/product3.png", hoverImage: "/hoverproduct3.png", link: "https://www.cost2costsupplement.com/product/promolecules-father-of-insane/", },
       { title: "MUSCLE PUMP", desc: "Advanced hydration and volumization systems enhancing intracellular expansion, vascularfullness, and muscular density without bloating, heaviness, or compromised performance output. ", image: "/product4.png", hoverImage: "/hoverproduct4.png", link: "https://www.cost2costsupplement.com/product/hydrapump/", }, { title: "MERCHANDISE", desc: "Performance-driven apparel and training essentials designed for serious gym culture,representing discipline, intensity, and the Promolecules mindset beyond supplementation. > PHARMA: Below is a structured website-ready format for each major Promolecules product.Tone: premium, disciplined, performance-focused — not exaggerated.", image: "/product5.png", hoverImage: "/hoverproduct5.png", link: "/merch" },
       ];
  return (
    <section className="relative w-full bg-black py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-30" />

      {/* Heading */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        
        {/* Left */}
        <div className="relative z-10 w-full lg:max-w-[50%]">
          <h2 className="creepster-regular text-red-600 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            leading-tight tracking-wide">
            TRENDINGS <br /> CATEGORY
          </h2>
        </div>

        {/* Right */}
        <div className="w-full lg:max-w-[40%]">
          <p className="font-extrabold uppercase text-white 
            text-xs sm:text-sm md:text-md leading-relaxed uppercase">
          In today’s fitness market, supplements are everywhere  but not all supplements are created
equal. Many low-cost brands compromise on ingredient purity, use under-dosed blends, or
source unverified raw materials that deliver no real results.<br></br>This is where Promolecules™ stands apart as a USA-quality supplement brand engineered for
serious athletes.


          </p>
        </div>
      </div>

      {/* Categories */} 
      <div className="relative z-10 mt-12">
        {categories.map((item, index) => (
          <Link
            key={index}
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="group flex flex-col lg:flex-row items-center 
              justify-between gap-6 lg:gap-4 
              border-b border-white/10 py-8
              transition-all duration-500 
              hover:bg-red-800/90 hover:rounded-xl cursor-pointer"
            >
              {/* Left: Image + Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">

                {/* Image */}
                <div className="relative 
                  w-full sm:w-[300px] md:w-[350px] lg:w-[400px] 
                  h-[200px] sm:h-[220px] md:h-[250px] lg:h-[270px] 
                  rounded-lg bg-black border border-white/10 overflow-hidden">
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={item.hoverImage}
                    alt={item.title}
                    fill
                    className="object-contain opacity-0 py-2 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* Text */}
                <div className="text-center sm:text-left">
                  <h3 className="creepster-regular text-red-600 
                    text-2xl sm:text-3xl md:text-4xl tracking-wider 
                    transition-colors duration-500 group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl 
                    text-xs sm:text-sm md:text-md 
                    uppercase font-extrabold text-white/70 leading-relaxed 
                    transition-colors duration-500 group-hover:text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <ArrowRight
                  className="text-white transition-transform duration-500 
                  group-hover:translate-x-3"
                  size={60}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
