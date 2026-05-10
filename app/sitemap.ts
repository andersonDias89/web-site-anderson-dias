import type { MetadataRoute } from "next";
import { PROFILE_IMAGE_PATH, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-05-10T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(PROFILE_IMAGE_PATH)],
    },
    {
      url: absoluteUrl("/politica-de-privacidade"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/termos-de-uso"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
