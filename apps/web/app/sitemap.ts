import type { MetadataRoute } from "next";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { ARTICLES } from "@/lib/articles";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...[
      "/shop",
      "/about",
      "/corporate",
      "/gifts/personalise",
      "/journal",
      "/faq",
      "/care-guides",
      "/contact",
      "/track",
      "/privacy",
      "/terms",
      "/shipping",
    ].map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const products: MetadataRoute.Sitemap = DEMO_PRODUCTS.map((p) => ({
    url: `${BASE}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE}/journal/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...products, ...articles];
}
