import { COUNTRIES, ROOT_DOMAIN } from "./data/countries.js";

// On-hold country sites (ir, sy, cu…) must stay out of search results. Pages are static and shared by
// every subdomain, so this is done with an X-Robots-Tag header per host instead of a <meta> tag.
// The list follows `status` in data/countries.js: set a country to "ready" and it becomes indexable.
const NOINDEX_COUNTRIES = COUNTRIES.filter((c) => c.status !== "ready").map((c) => c.code);
const NOINDEX_HOSTS = `(?:www\\.)?(?:${NOINDEX_COUNTRIES.join("|")})\\.${ROOT_DOMAIN.replace(/\./g, "\\.")}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  // Let the dev server accept country subdomains like ae.localhost:3000
  allowedDevOrigins: ["*.localhost"],

  images: {
    unoptimized: true, // optional (keep if you want)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magnus.cost2costsupplement.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
{
  key: "Content-Security-Policy",
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https://magnus.cost2costsupplement.com https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' http://localhost:5000 https://www.promolecules.co.in https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
    "frame-src https://www.googletagmanager.com",
    "frame-ancestors 'self'",
  ].join("; "),
},
        ],
      },
      // noindex every page on on-hold country sites (see NOINDEX_COUNTRIES above)
      ...(NOINDEX_COUNTRIES.length
        ? [
            {
              source: "/:path*",
              has: [{ type: "host", value: NOINDEX_HOSTS }],
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;