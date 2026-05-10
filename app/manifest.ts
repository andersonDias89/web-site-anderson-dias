import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Anderson Dias",
    description: SITE_DESCRIPTION,
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    display: "standalone",
    background_color: "#071727",
    theme_color: "#071727",
    lang: "pt-BR",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
