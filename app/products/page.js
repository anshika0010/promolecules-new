"use client";

import { useState } from "react";
import TrendingCategory from "@/components/TrendingCategory";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Rotate3D } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const products = [
    {
      title: "Warflex",
      image: "/warflex.png",
      price: "$-1899",
      description:
        "Warflex promotes muscle gains via an ultra high-stimulant pre-workout engineered for serious athletes who need extreme energy and endurance.",
      thumbnail: "/fatherofinsane.png",
    },
    {
      title: "Father of Insane",
      image: "/fatherof.png",
      price: "$-1599",
      description:
        "Nitrox boosts explosive power and stamina with advanced nitric oxide technology.",
      thumbnail: "/thumbnail2.png",
    },
    {
      title: "Inpower-R",
      image: "/inopower.png",
      price: "$-2099",
      description:
        "Beast Mode delivers insane pumps and unstoppable workout intensity.",
      thumbnail: "/thumb3.png",
    },
    {
      title: "Thermo Nuke XT",
      image: "/thermonuke.png",
      price: "$-1799",
      description:
        "Alpha Rage fuels your body with clean energy and laser focus.",
      thumbnail: "/thumb4.png",
    },
    {
      title: "Hydrapump+",
      image: "/hydra.png",
      price: "$-1799",
      description:
        "Alpha Rage fuels your body with clean energy and laser focus.",
      thumbnail: "/thumb5.png",
    },
  ];

  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <>
<section
  className="relative w-full bg-black text-white overflow-hidden bg-cover bg-center bg-no-repeat pt-4"
  style={{ backgroundImage: "url('/smoke.gif')" }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-6 sm:space-y-8 w-full text-center lg:text-left">

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold creepster-regular text-red-600 uppercase">
            {activeProduct.title}
          </h1>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg uppercase leading-relaxed font-bold">
            {activeProduct.description}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-500">
            {activeProduct.price}
          </h2>

          <Link href={"/products/productdetailpage"}>
            <button className="bg-red-600 mt-4 hover:bg-red-700 transition px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Buy Now →
            </button>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* THUMBNAILS */}
      <div className="relative z-10 pt-6">
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
          {products.map((product, index) => {
            const isActive = activeProduct.title === product.title;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveProduct(product)}
                className={`relative 
                  w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 
                  transition cursor-pointer rounded-lg
                  ${
                    isActive
                      ? "shadow-[0_0_25px_rgba(220,38,38,0.9)] scale-110 opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }
                  border`}
              >
                <Image
                  src={product.thumbnail}
                  alt="Thumbnail"
                  fill
                  className="object-contain p-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 relative w-full mt-10 lg:mt-0 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.image}
          initial={{ opacity: 1, x: "40vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: "-90vw" }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={activeProduct.image}
            alt="Product"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
</section>

      <TrendingCategory />
    </>
  );
}
