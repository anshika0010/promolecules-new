const BASE_URL = "https://magnus.cost2costsupplement.com/api/v1";
const HEADERS = {
  "x-tenant": "promolecules.com",
  "Content-Type": "application/json",
};

// ✅ Blog list — 10 min cache
export async function fetchBlogs(page = 1) {
  const res = await fetch(`${BASE_URL}/blogs?page=${page}`, {
    headers: HEADERS,
    next: {
      revalidate: 600, // 10 minutes
      tags: [`blogs-page-${page}`], // tag se manually revalidate bhi kar sakte ho
    },
  });

  if (!res.ok) throw new Error(`Failed to fetch blogs page ${page}`);
  return res.json();
}

// ✅ All blogs (detail page ke liye) — 10 min cache
export async function fetchAllBlogs() {
  const [res1, res2] = await Promise.all([
    fetch(`${BASE_URL}/blogs?page=1`, {
      headers: HEADERS,
      next: { revalidate: 300, tags: ["all-blogs"] },
    }),
    fetch(`${BASE_URL}/blogs?page=2`, {
      headers: HEADERS,
      next: { revalidate: 300, tags: ["all-blogs"] },
    }),
  ]);

  const [json1, json2] = await Promise.all([res1.json(), res2.json()]);
  return [...(json1?.data ?? []), ...(json2?.data ?? [])];
}

// ✅ Single blog by slug — 1 hour cache
export async function fetchBlogBySlug(slug) {
  const allBlogs = await fetchAllBlogs();
  return allBlogs.find((b) => b.slug === slug) ?? null;
}