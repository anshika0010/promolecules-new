"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  "View All",
  "Pre Workout",
  "Fat Burner",
  "General Tips",
  "Test Booster",
  "Muscle Gain",
  "Weight Loss",
];

const posts = [
  {
    id: 1,
    title: "DON’T GET SOFT",
   image: "/blog1.png",
    desc: "An effective pre workout formula to help you increase muscle mass.",
  },
  {
    id: 2,
    title: "THE BEST BICEP WORKOUT FOR MASS GAIN",
    image: "/blog2.png",
    desc: "Build bigger arms with this proven hypertrophy training method.",
  },
  {
    id: 3,
    title: "FIVE FORMS PLAYS A CRUCIAL ROLE",
    image: "/blog3.png",
    desc: "Pre workout supplements can help maximize your training.",
  },
  {
    id: 4,
    title: "PUMP-AFTER",
   image: "/blog3.png",
    desc: "Unlock insane muscle pumps with this advanced stack.",
  },
  {
    id: 5,
    title: "THE BEST CHEST WORKOUT FOR MASS",
   image: "/blog2.png",
    desc: "Advanced chest routines to build strength and volume.",
  },
  {
    id: 6,
    title: "THE BEST CHEST WORKOUT FOR MASS",
   image: "/blog1.png",
    desc: "Boost endurance and muscle density with smart training.",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider transition ${
                index === 0
                  ? "bg-red-600 text-white"
                  : "border border-white/20 text-white/70 hover:border-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden bg-black rounded-lg"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-600/60 mix-blend-multiply group-hover:bg-red-600/40 transition" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-xs font-bold uppercase mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-white/80 mb-4">
                  {post.desc}
                </p>
<Link href={"/blogs/blogdetail"}>                <button className="flex items-center gap-2 bg-red-600 text-xs px-4 py-1 rounded-full uppercase tracking-wide hover:bg-red-700 transition">
                  Read More
                  <ChevronRight size={14} />
                </button>
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-16 text-sm">
          <button className="text-white/50 hover:text-white">&lt;</button>

          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                num === 1
                  ? "bg-red-600 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}

          <span className="text-white/50">...</span>
          <button className="text-white/70 hover:text-white">29</button>

          <button className="text-white/50 hover:text-white">&gt;</button>
        </div>
      </div>
    </section>
  );
}
