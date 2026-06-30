import React from "react";
import Image from "next/image";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const points = [
  {
    icon: Leaf,
    title: "10g Liquid Glycerol",
    text: "Liquid Glycerol increases total body water and helps with hyperhydration by pulling water into muscle cells. More water means longer workouts, better endurance, and fuller-looking muscles.",
  },
  {
    icon: ShieldCheck,
    title: "Citrulline Malate 3000mg",
    text: "Citrulline Malate boosts nitric oxide production, which helps to improve blood circulation, oxygen delivery, vascularity, and explosive muscle pumps during training.",
  },
  {
    icon: Sparkles,
    title: "Advanced Electrolyte Blend",
    text: "Contains Sodium, Potassium, Magnesium Glycinate and Pink Himalayan Salt to support fluid balance, reduce muscle cramps and support muscle contractions.",
  },
];

export default function ImageContentSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg order-1">
          <Image
            src="/Promolecules/Hydrapump/hydrapump-image.jpeg"
            alt="Soursop fruit and wellness"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="order-2">
          <span className="inline-block text-red-700 font-semibold text-sm tracking-wide uppercase mb-3">
            About HYDRAPUMP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Why HydraPump+™ Works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
HydraPump+™ is a scientifically formulated blend of ingredients that work synergistically to optimise hydration, endurance, blood flow and muscle pumps.          </p>

          <div className="space-y-6 mb-8">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-red-50 text-red-700 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
<Link href={"/product/hydrapump/"}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition">
            Buy Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}