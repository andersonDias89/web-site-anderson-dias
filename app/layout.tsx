import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, withBasePath } from "@/lib/site";
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

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071727",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Anderson Dias",
  title: {
    default: SITE_NAME,
    template: "%s | Anderson Dias",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "desenvolvedor full stack",
    "freelancer next.js",
    "criação de landing page",
    "desenvolvimento de sistemas web",
    "seo técnico",
    "anderson dias",
  ],
  category: "technology",
  authors: [{ name: "Anderson Dias", url: SITE_URL }],
  creator: "Anderson Dias",
  publisher: "Anderson Dias",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: [{ url: withBasePath("/icon.svg"), type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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
      <body className="min-h-full bg-background text-foreground">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
