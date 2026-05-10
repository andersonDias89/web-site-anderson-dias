import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteName = "Anderson Dias | Desenvolvedor Full Stack";
const siteDescription =
  "Desenvolvedor Full Stack focado em landing pages, sistemas web e integrações para empresas que precisam de performance, SEO técnico e software orientado a resultado.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anderson-dias.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Anderson Dias",
  },
  description: siteDescription,
  keywords: [
    "desenvolvedor full stack",
    "freelancer next.js",
    "criação de landing page",
    "desenvolvimento de sistemas web",
    "seo técnico",
    "anderson dias",
  ],
  category: "technology",
  authors: [{ name: "Anderson Dias" }],
  creator: "Anderson Dias",
  publisher: "Anderson Dias",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/anderson-dias-profile.jpg",
        width: 1086,
        height: 1448,
        alt: "Anderson Dias, desenvolvedor full stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/anderson-dias-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${jetBrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
