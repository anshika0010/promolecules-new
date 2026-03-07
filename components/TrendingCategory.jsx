import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrendingCategory() {

  const categories = [
       { title: "PRE-WORKOUT", desc: "Engineered stimulation systems designed to activate CNS, sharpen focus, and sustain strength output. Built for athletes who demand controlled intensity, not random caffeine spikes or underdosed performance formulas.", image: "/product1.png", hoverImage: "/hoverproduct2.webp", link: "https://www.cost2costsupplement.com/product/warflex/", },
       { title: "FAT BURNER", desc: "Structured thermogenic blends supporting metabolic acceleration, energy expenditure, and disciplined fat-loss phases without chaotic stimulant overload or crash-driven rebound fatigue.", image: "/product2.png", hoverImage: "/hoverproduct.webp", link: "https://www.cost2costsupplement.com/product/inpower-r/", }, 
       { title: "PRE-WORKOUT + ENERGY", desc: "Hybrid performance formulas combining structured stimulation and sustained energy architecture for athletes needing explosive output with endurance stability across long training sessions.", image: "/product3.png", hoverImage: "/hoverproduct3.webp", link: "https://www.cost2costsupplement.com/product/promolecules-father-of-insane/", },
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
  src="/productcardbg.png"
  alt="hover bg"
  fill
  className="object-cover"
/>

          {/* optional dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Left: Image + Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">

          {/* Image */}
          <div
            className="relative 
            w-full sm:w-[200px] md:w-[300px] lg:w-[300px] 
            h-[150px] sm:h-[170px] md:h-[200px] lg:h-[200px] 
            rounded-lg border border-white/10 overflow-hidden"
          >
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
    text-xs sm:text-sm md:text-md 
    uppercase font-extrabold text-white/70 leading-relaxed 
    transition-colors duration-500 group-hover:text-white"
  >
    {item.desc}
  </p>
</div>
        
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <ArrowRight className="text-white" size={60} />
        </div>
      </div>
    </Link>
  ))}
</div>

    </section>
  );

}
