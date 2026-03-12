"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/productsdetail.json";
import { useSearchParams } from "next/navigation";

const products = productsData.products;
const categories = ["ALL", "PRE-WORKOUT", "FAT BURNER"];

function ProductCard({ product }) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-70 blur transition-all duration-500" />

      <div className="relative bg-[#0d0d0d] border border-white/5 group-hover:border-red-600/40 rounded-2xl overflow-hidden transition-all duration-500">
        {/* Image area */}
        <div className="relative h-[200px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-red-950/60 via-black to-black flex items-center justify-center overflow-hidden">
          <Link href={`/productlist/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={320}
              height={290}
              className="object-contain z-10 group-hover:scale-110 transition-transform duration-500"
            />
          </Link>

          {/* Badge */}
          <div
            className={`absolute top-3 left-3 ${product.badgeColor} ${product.badgeText} text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full z-20`}
          >
            {product.badge}
          </div>

          {/* Tag */}
          <div className="absolute top-3 right-3 text-[10px] font-bold text-white/60 bg-white/5 border border-white/10 px-2 py-1 rounded-full z-20">
            {product.tag}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
          <div>
            <Link href={`/productlist/${product.slug}`}>
              <h3 className="flex justify-center items-center text-red-700 font-black text-4xl sm:text-5xl creepster-regular leading-tight tracking-wide group-hover:text-red-400 transition-colors duration-300 text-center">
                {product.name}
              </h3>
            </Link>
            <p className="text-gray-500 text-[10px] sm:text-xs tracking-widest mt-0.5 font-bold text-center">
              {product.category}
            </p>
          </div>

          <p className="text-gray-100 text-xs sm:text-sm leading-relaxed tracking-wide anton-regular">
            {product.title}
          </p>

          <div className="border-t border-white/5" />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-red-500 font-black text-xl sm:text-2xl">
                ${product.price}
              </span>
              <span className="text-gray-600 text-xs line-through ml-2">
                ${product.originalPrice}
              </span>
            </div>
            <Link href={`/productlist/${product.slug}`}>
              <button className="relative overflow-hidden bg-red-600 hover:bg-red-500 text-white text-[10px] sm:text-[11px] font-black tracking-widest px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-300 active:scale-95">
                <span className="relative z-10 cursor-pointer">BUY NOW</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductList() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("DEFAULT");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) setActiveCategory(category);
  }, [searchParams]);

  const filtered = products
    .filter(
      (p) =>
        (activeCategory === "ALL" || p.category === activeCategory) &&
        (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "PRICE_LOW") return a.price - b.price;
      if (sortBy === "PRICE_HIGH") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-red-600/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.12),_transparent_60%)]" />

        <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none flex flex-col gap-3 pt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-4xl sm:text-6xl font-black text-white tracking-widest"
              style={{
                animation: `marquee ${18 + i * 3}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
              }}
            >
              PROMOLECULES™ &nbsp; SUPPLEMENTS &nbsp; DOMINATE &nbsp; PERFORM
              &nbsp; CONQUER &nbsp; PROMOLECULES™ &nbsp; SUPPLEMENTS &nbsp;
              DOMINATE &nbsp; PERFORM &nbsp; CONQUER &nbsp;
            </div>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 text-center">
          <p className="text-red-600 text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] font-bold mb-3 sm:mb-4">
            — PROMOLECULES™
          </p>
          <h1 className="text-white text-5xl sm:text-7xl lg:text-9xl creepster-regular font-black leading-none tracking-tight mb-3 sm:mb-4">
            CHOOSE YOUR
            <br />
            <span className="text-red-600">WEAPON</span>
          </h1>
          <p className="global-text-style max-w-xl mx-auto mt-3 sm:mt-4 text-[10px] sm:text-xs px-4">
            ELITE FORMULAS ENGINEERED FOR THOSE WHO REFUSE TO BE AVERAGE
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          
          {/* Mobile: stacked layout */}
          <div className="flex flex-col gap-3">
            
            {/* Category filters — scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-[11px] sm:text-sm md:text-base font-black tracking-widest px-3 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-red-600 border-red-600 text-white"
                      : "bg-transparent border-white/10 text-gray-500 hover:border-red-600/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search + Sort */}
            <div className="flex gap-2 sm:gap-3 items-center">
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white/2 border border-white/10 focus:border-red-600/50 text-white placeholder-gray-600 text-[11px] sm:text-sm tracking-widest px-3 sm:px-4 py-2 sm:py-3 rounded-lg outline-none transition-colors min-w-0"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#0d0d0d] border border-white/10 text-gray-400 text-[10px] sm:text-xs tracking-widest px-2 sm:px-4 py-2 sm:py-3 rounded-lg outline-none cursor-pointer flex-shrink-0"
              >
                <option value="DEFAULT">SORT BY</option>
                <option value="PRICE_LOW">PRICE: LOW</option>
                <option value="PRICE_HIGH">PRICE: HIGH</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 sm:py-24">
            <p className="text-red-600 text-3xl sm:text-4xl font-black creepster-regular">
              NO RESULTS
            </p>
            <p className="text-gray-600 text-[10px] sm:text-xs tracking-widest mt-2">
              TRY A DIFFERENT SEARCH
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}