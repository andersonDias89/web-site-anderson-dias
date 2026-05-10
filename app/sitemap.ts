import type { MetadataRoute } from "next";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://anderson-dias.dev").replace(
  /\/$/,
  ""
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/images/anderson-dias-profile.jpg`,
      ],
    },
  ];
}
