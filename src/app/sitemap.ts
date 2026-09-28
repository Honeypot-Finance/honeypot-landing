import { MetadataRoute } from "next";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://honeypotfinance.xyz";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    ...articles.map((article) => ({ url: `${baseUrl}/articles/${article.slug}`, lastModified: article.date, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-use`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
