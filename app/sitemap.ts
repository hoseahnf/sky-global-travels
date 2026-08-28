import type { MetadataRoute } from "next"
import { siteUrl, guides } from "@/lib/seo"
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/blog", "/destinations/antalya-holidays", "/destinations/hurghada-holiday-packages", "/umrah-packages-from-london", ...guides.map((guide) => `/blog/${guide.slug}`)]; return pages.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-08-28"), changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 })) }
