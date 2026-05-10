import type { Metadata, Viewport } from "next";
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
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://anderson-dias.dev").replace(/\/$/, "");
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071727",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Anderson Dias",
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
  authors: [{ name: "Anderson Dias", url: siteUrl }],
  creator: "Anderson Dias",
  publisher: "Anderson Dias",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
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
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
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
