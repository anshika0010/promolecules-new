import { fetchAllBlogs } from "@/lib/api";
import BlogDetailClient from "./BlogDetailClient";

// ✅ Build time pe saare slugs generate karo
export async function generateStaticParams() {
  try {
    const allBlogs = await fetchAllBlogs();
    return allBlogs.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  try {
    const allBlogs = await fetchAllBlogs(); // ✅ cached — dobara API call nahi hogi
    const blog = allBlogs.find((b) => b.slug === slug) ?? null;
    return <BlogDetailClient blog={blog} />;
  } catch (err) {
    console.error("Blog detail error:", err);
    return <BlogDetailClient blog={null} />;
  }
}