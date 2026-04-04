"use client";
import Head from "next/head";

export default function SEO({ seo }) {
  if (!seo) return null;

  return (
    <Head>
      <title>{seo.title} </title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.og.title} />
      <meta property="og:type" content={seo.og.type} />
      <meta property="og:image" content={seo.og.image} />
      <meta name="og:locale" content={seo.og.locale} />
      <meta property="og:site_name" content={seo.og.site_name} />
      <meta property="og:description" content={seo.og.description} />
      <meta property="og:url" content={seo.og.url} />

      {/* Author & Geo */}
      <meta name="author" content={seo.author} />
      <meta name="geo.region" content={seo.geo.region} />
      <meta name="geo.placename" content={seo.geo.placename} />
      <meta name="language" content={seo.language} />
      <meta name="robots" content={seo.robots} />

      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:site" content={seo.twitter.site} />
      <meta name="twitter:title" content={seo.twitter.title} />
      <meta name="twitter:description" content={seo.twitter.description} />
      <meta name="twitter:image" content={seo.twitter.image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.ldjson) }}
      />
    </Head>
  );
}