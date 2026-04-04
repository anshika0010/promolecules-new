import { fetchBlogs } from "@/lib/api";
import BlogClient from "./BlogClient";

export default async function BlogServer() {
  try {
    const response = await fetchBlogs(1); // ✅ cached 10 min
    return <BlogClient blogs={response?.data ?? []} />;
  } catch (err) {
    console.error("Blog list error:", err);
    return <BlogClient blogs={[]} />;
  }
}