import productsData from "@/data/productsdetail.json";
import ProductPageClient from "./ProductPageClient";

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ SEO — har product ka alag metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsData.products.find((p) => p.slug === slug);

  if (!product?.seo) {
    return {
      title: "Product | Promolecules™",
      description: "Premium supplements by Promolecules.",
    };
  }

  const seo = product.seo;

  const robotsObj = {};
  seo.robots?.split(",").forEach((r) => {
    const key = r.trim();
    if (key === "noindex") robotsObj.index = false;
    else if (key === "nofollow") robotsObj.follow = false;
    else if (key === "index") robotsObj.index = true;
    else if (key === "follow") robotsObj.follow = true;
  });

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.og?.title,
      description: seo.og?.description,
      url: seo.og?.url,
      siteName: seo.og?.site_name,
      images: seo.og?.image ? [{ url: seo.og.image }] : [],
      locale: seo.og?.locale,
      type: seo.og?.type || "website",
    },
    twitter: {
      card: seo.twitter?.card || "summary_large_image",
      site: seo.twitter?.site,
      title: seo.twitter?.title,
      description: seo.twitter?.description,
      images: seo.twitter?.image ? [seo.twitter.image] : [],
    },
    robots: robotsObj,
    authors: seo.author ? [{ url: seo.author }] : [],
    other: {
      "geo.region": seo.geo?.region,
      "geo.placename": seo.geo?.placename,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = productsData.products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-white p-10">Product Not Found</div>;
  }

  // JSON-LD structured data
  const jsonld = product?.seo?.ldjson
    ? JSON.stringify(product.seo.ldjson)
    : null;

  return (
    <>
      {jsonld && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonld }}
        />
      )}
      <ProductPageClient product={product} />
    </>
  );
}