"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import productsData from "@/data/productsdetail.json";

const products = productsData.products;
const categories = ["ALL", "PRE-WORKOUT", "FAT BURNER"];

function ProductCard({ product }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-70 blur transition-all duration-500" />

      <div className="relative bg-[#0d0d0d] border border-white/5 group-hover:border-red-600/40 rounded-2xl overflow-hidden transition-all duration-500">
        
        <div className="relative h-[220px] bg-gradient-to-br from-red-950/60 via-black to-black flex items-center justify-center overflow-hidden">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={280}
              height={260}
              className="object-contain z-10 group-hover:scale-110 transition-transform duration-500"
            />
          </Link>

          <div
            className={`absolute top-3 left-3 ${product.badgeColor} ${product.badgeText} text-[10px] font-black tracking-widest px-3 py-1 rounded-full`}
          >
            {product.badge}
          </div>

          <div className="absolute top-3 right-3 text-[10px] font-bold text-white/60 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
            {product.tag}
          </div>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <Link href={`/product/${product.slug}`}>
              <h3 className="text-red-700 font-black text-5xl creepster-regular text-center group-hover:text-red-400 transition-colors">
                {product.name}
              </h3>
            </Link>

            <p className="text-gray-500 text-xs tracking-widest mt-1 font-bold text-center">
              {product.category}
            </p>
          </div>

          <p className="text-gray-100 text-sm leading-relaxed tracking-wide anton-regular">
            {product.title}
          </p>

          <div className="border-t border-white/5" />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-red-500 font-black text-2xl">
              ${product.servings?.[0]?.price}
              </span>

              <span className="text-gray-600 text-xs line-through ml-2">
                ${product.originalPrice}
              </span>
            </div>

            <Link href={`/product/${product.slug}`}>
              <button className="bg-red-600 hover:bg-red-500 text-white text-xs font-black tracking-widest px-4 py-2 rounded-xl transition-all active:scale-95">
                BUY NOW
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ProductListClient() {

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

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-center text-7xl creepster-regular font-black text-red-600 mb-12">
          PRODUCTS
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mb-8">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-black tracking-widest px-5 py-2 rounded-lg border ${
                activeCategory === cat
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-white/10 text-gray-500 hover:border-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="flex gap-4 justify-center mb-10">

          <input
            type="text"
            placeholder="SEARCH..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-black border border-white/10 px-4 py-2 rounded-lg text-sm outline-none"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-black border border-white/10 px-4 py-2 rounded-lg text-sm"
          >
            <option value="DEFAULT">SORT</option>
            <option value="PRICE_LOW">PRICE LOW</option>
            <option value="PRICE_HIGH">PRICE HIGH</option>
          </select>

        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-4xl font-black creepster-regular">
              NO RESULTS
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}