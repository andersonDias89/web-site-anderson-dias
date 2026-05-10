import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anderson Dias | Desenvolvedor Full Stack",
    short_name: "Anderson Dias",
    description:
      "Landing pages, sistemas web e integrações com foco em performance, SEO técnico e resultado de negócio.",
    start_url: "/",
    display: "standalone",
    background_color: "#071727",
    theme_color: "#071727",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
