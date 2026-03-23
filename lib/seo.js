// lib/seo.js
import seoData from "@/data/seoData.json";

export function getSEOMetadata(pageKey) {
  const seo = seoData[pageKey];

  if (!seo) {
    console.warn(`SEO data not found for key: "${pageKey}", falling back to home`);
    return getSEOMetadata("home");
  }

  const robotsObj = {};
  if (seo.robots) {
    seo.robots.split(",").forEach((r) => {
      const key = r.trim();
      if (key === "noindex") robotsObj.index = false;
      else if (key === "nofollow") robotsObj.follow = false;
      else if (key === "index") robotsObj.index = true;
      else if (key === "follow") robotsObj.follow = true;
    });
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
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
      title: seo.twitter?.title,
      description: seo.twitter?.description,
      images: seo.twitter?.image ? [seo.twitter.image] : [],
      site: seo.twitter?.site,
    },
    robots: robotsObj,
    authors: seo.author ? [{ url: seo.author }] : [],
    other: {
      "geo.region": seo.geo?.region,
      "geo.placename": seo.geo?.placename,
    },
  };
}

export function getJSONLD(pageKey) {
  const seo = seoData[pageKey];
  if (!seo?.ldjson) return null;
  return JSON.stringify(seo.ldjson);
}