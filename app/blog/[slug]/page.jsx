"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        "https://blogs-backend-l1z4.onrender.com/api/posts"
      );

      const data = await res.json();

      const found = data.find((p) => p.slug === slug);
      setBlog(found);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <div className="text-white p-20">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO IMAGE */}
      <div className="relative w-full h-[500px]">
        <Image
          src={""}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        <div className="text-gray-400 mb-10">
          {new Date(blog.createdAt).toDateString()}
        </div>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </div>
  );
}