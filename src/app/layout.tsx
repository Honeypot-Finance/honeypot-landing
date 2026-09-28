import type { Metadata } from "next";
import "@/styles/global.scss";
import { Analytics } from "@vercel/analytics/next";
import { SiteProviders } from "@/components/SiteProviders";
import { inter, poppins, bebasNeue } from "./fonts";
import { OrganizationSchema } from "@/components/StructuredData/OrganizationSchema";

const description =
  "Discover the ideas shaping AI and Web3. Independent perspectives, technical education, and smart contract licensing from Honeypot Finance.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://honeypotfinance.xyz"),
  title: {
    default: "Honeypot Finance | AI, Web3 & a World of Discovery",
    template: "%s | Honeypot Finance",
  },
  description,
  keywords: ["Honeypot Finance", "AI", "Web3", "technical education", "smart contract licensing", "AI agents"],
  authors: [{ name: "Honeypot Finance" }],
  creator: "Honeypot Finance",
  publisher: "Honeypot Finance",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Honeypot Finance",
    title: "Honeypot Finance | AI, Web3 & a World of Discovery",
    description,
    images: [{
      url: "/images/editorial/honeypot-world.png",
      width: 1536,
      height: 1024,
      alt: "Honeypot explorers discovering a world of ideas",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@honeypotfinance",
    title: "Honeypot Finance | AI, Web3 & a World of Discovery",
    description,
    images: ["/images/editorial/honeypot-world.png"],
  },
  icons: { icon: "/images/editorial/honeypot-logo.png", apple: "/images/editorial/honeypot-logo.png" },
  category: "Technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <head><OrganizationSchema /></head>
      <body className={inter.className}>
        <SiteProviders>{children}</SiteProviders>
        <Analytics />
      </body>
    </html>
  );
}
