"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogClient({ blogs = [] }) {
  const [activeCategory, setActiveCategory] = useState("View All");

  const categories = [
    "View All",
    ...new Set(blogs.map((b) => b.category.name)),
  ];

  const filtered =
    activeCategory === "View All"
      ? blogs
      : blogs.filter((b) => b.category.name === activeCategory);

  return (
    <div className="bg-black text-[#f0ece4] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[50vh] lg:min-h-screen overflow-hidden text-white">
        <Image
          src="/promolecules-bloghero-benner-image.webp"
          alt="promolecules-bloghero-benner-image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[50vh] lg:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
            <div className="max-w-md">
              <p className="text-xs sm:text-sm uppercase font-bold tracking-wider leading-relaxed text-white/90">
                The Promolecules blog is where performance meets mindset.
              </p>
            </div>
            <div className="text-left lg:text-right space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase font-bold">
                <span className="block text-white tracking-widest">
                  All Fitness
                </span>
                <span className="block text-red-600 tracking-widest">
                  Blogs
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="w-full overflow-x-auto my-8">
        <div className="flex flex-nowrap justify-start md:justify-center gap-4 min-w-max px-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "border border-white/20 text-white/70 hover:border-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="px-6 lg:px-20 py-8">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="bg-[#111] group transition hover:-translate-y-1 flex flex-col shadow-md shadow-red-400"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={blog.featured_image || "/dummyimage.webp"}
                    alt={blog.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                    <span className="text-red-600">{blog.category.name}</span>
                    <span className="w-[3px] h-[3px] bg-gray-600 rounded-full"></span>
                    <span className="text-gray-500">
                      {formatDate(blog.publish_date)}
                    </span>
                  </div>

                  <h2 className="text-md font-bold group-hover:text-red-600 transition">
                    {blog.name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      By {blog.author?.name}
                    </p>

                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-black transition">
                      ↗
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {(Array.isArray(blog.tags)
                        ? blog.tags
                        : typeof blog.tags === "string"
                          ? blog.tags.split(",")
                          : []
                      ).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] border border-neutral-700 px-2 py-[1px] uppercase tracking-wider text-gray-500 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
