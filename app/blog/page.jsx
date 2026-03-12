"use client";

import { useEffect, useState } from "react";
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

export default function BlogPage() {
    const [categories, setCategories] = useState([]);
const [activeCategory, setActiveCategory] = useState("View All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "https://blogs-backend-l1z4.onrender.com/api/posts"
      );

      const data = await res.json();
      const blogData = data.posts || data;

      setBlogs(blogData);

      // Extract unique categories
      const uniqueCategories = [
        "View All",
        ...new Set(blogData.map((b) => b.category?.name).filter(Boolean)),
      ];

      setCategories(uniqueCategories);

    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);



  return (
    <div className="bg-[#0a0a0a] text-[#f0ece4] min-h-screen">
      <Navbar />

      {/* HERO */}
<section className="relative w-full min-h-[50vh] lg:min-h-screen overflow-hidden text-white">
  <Image
    src="/bloghero.webp"
    alt="Fitness Blog Hero"
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl creepster-regular uppercase leading-tight font-bold">
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
      <section className="px-6 lg:px-20 py-14">

        {loading && (
          <p className="text-gray-400">Loading blogs...</p>
        )}

        <div className="grid lg:grid-cols-3 gap-6">

          {blogs?.map((blog, i) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="bg-[#111] group transition hover:-translate-y-1 flex flex-col"
            >

              {/* IMAGE */}
              <div
            className="relative overflow-hidden aspect-video">
              
                <Image
                  src={""}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-3 flex-1">

                {/* META */}
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="text-red-600">
                    {blog.category?.name}
                  </span>

                  <span className="w-[3px] h-[3px] bg-gray-600 rounded-full"></span>

                  <span className="text-gray-500">
                    {formatDate(blog.createdAt)}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-md lg:text-md font-bold group-hover:text-red-600 transition">
                  {blog.title}
                </h2>

                {/* EXCERPT */}
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* TAGS */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {blog.tags?.map((tag) => (
                      <span
                        key={tag.name}
                        className="text-[10px] border border-neutral-700 px-2 py-[2px] uppercase tracking-wider text-gray-500 rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-black transition">
                    ↗
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}