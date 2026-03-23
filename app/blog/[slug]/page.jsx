import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  const res = await fetch(
    "https://blogs-backend-l1z4.onrender.com/api/posts"
  );

  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <BlogDetailClient slug={slug} />;
}