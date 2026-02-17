import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "PRE-WORKOUT",
    desc: "Pre-workout is the ultimate performance catalyst designed to ignite explosive energy, razor-sharp focus, extreme strength, and unstoppable stamina before training.",
    image: "/product1.png",
    hoverImage: "/hoverproduct2.png",
    link: "https://www.cost2costsupplement.com/product/warflex/",
  },
  {
    title: "FAT BURNER",
    desc: "A fat burner is a metabolic support supplement designed to enhance energy, thermogenesis, and fat utilization alongside regular training and nutrition.",
    image: "/product2.png",
    hoverImage: "/hoverproduct.png",
    link: "https://www.cost2costsupplement.com/product/inpower-r/",
  },
  {
    title: "PRE-WORKOUT + ENERGY",
    desc: "Pre-workout + energy is a high-intensity performance formula engineered to deliver explosive power, unleash extreme energy, sharpen laser-focused concentration.",
    image: "/product3.png",
    hoverImage: "/hoverproduct3.png",
    link: "https://www.cost2costsupplement.com/product/promolecules-father-of-insane/",
  },
  {
    title: "MUSCLE PUMP",
    desc: "Muscle pump is the intense, skin-splitting feeling of muscles swelling with blood, oxygen, and nutrients during a workout.",
    image: "/product4.png",
    hoverImage: "/hoverproduct4.png",
    link: "https://www.cost2costsupplement.com/product/hydrapump/",
  },
  {
    title: "MERCHANDISE",
    desc: "Premium merchandise represents high-performance, science-driven fitness lifestyle gear built to reflect power, precision, and dominance.",
    image: "/product5.png",
    hoverImage: "/hoverproduct5.png",
  },
];

export default function TrendingCategory() {
  return (
    <section className="relative w-full bg-black py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle background grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_60%)] opacity-30" />

      {/* Heading */}
      <div className="flex items-center justify-between gap-10">
        {/* Left */}
        <div className="relative z-10 max-w-[50%]">
          <h2 className="creepster-regular text-red-600 text-7xl leading-tight tracking-wide">
            TRENDINGS
            <br />
            CATEGORY
          </h2>
        </div>

        {/* Right */}
        <div className="max-w-[40%]">
          <p className="font-extrabold uppercase text-white text-md">
            Driven by innovation, we offer trend-leading supplement products
            built on high-performance promecules designed for strength, stamina,
            focus, and recovery—crafted to meet modern fitness demands
            worldwide.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 ">
       {categories.map((item, index) => (
  <Link
    key={index}
    href={item.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div
      className="group flex items-center justify-between gap-4 border-b border-white/10 
      transition-all duration-500 hover:bg-red-800/90 hover:rounded-xl cursor-pointer"
    >
      {/* Left: Image + Text */}
      <div className="flex items-center gap-4 min-w-[200px]">
        {/* Image */}
        <div className="relative h-[270px] w-[400px] rounded-lg bg-black border border-white/10 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition-opacity rounded-lg
            duration-500 group-hover:opacity-0"
          />
          <Image
            src={item.hoverImage}
            alt={item.title}
            fill
            className="object-contain opacity-0 py-2 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Text */}
        <div>
          <h3
            className="creepster-regular text-red-600 text-4xl tracking-wider 
            transition-colors duration-500 group-hover:text-black"
          >
            {item.title}
          </h3>
          <p
            className="mt-2 max-w-xl text-md uppercase font-extrabold text-white/70 leading-relaxed 
            transition-colors duration-500 group-hover:text-white/90"
          >
            {item.desc}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <ArrowRight
          className="text-white transition-transform duration-500 
          group-hover:translate-x-3 px-4"
          size={90}
        />
      </div>
    </div>
  </Link>
))}

      </div>
    </section>
  );
}
