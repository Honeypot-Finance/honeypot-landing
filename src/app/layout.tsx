import type { Metadata } from "next";
import "@/styles/global.scss";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";
import { inter, poppins, bebasNeue } from "./fonts";
import { OrganizationSchema } from "@/components/StructuredData/OrganizationSchema";
import { HowToSchema } from "@/components/StructuredData/HowToSchema";

// Enhanced metadata for GEO (Generative Engine Optimization)
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://honeypotfinance.xyz"
  ),
  title: {
    default: "Honeypot Finance: Next-Gen Multi-Chain DeFi Liquidity Hub",
    template: "%s | Honeypot Finance",
  },
  description:
    "Honeypot Finance is an all-in-one multi-chain DeFi liquidity hub offering perpetual trading, spot trading, automated AMM, and cross-chain swaps on Berachain and BSC. Trade with deep liquidity and earn rewards.",
  keywords: [
    "DeFi",
    "DEX",
    "Decentralized Exchange",
    "Honeypot Finance",
    "Berachain",
    "BSC",
    "Perpetual Trading",
    "Spot Trading",
    "AMM",
    "Liquidity",
    "Crypto Trading",
    "NFT Staking",
    "Multi-chain",
    "Cross-chain",
    "Web3",
  ],
  authors: [{ name: "Honeypot Finance Team" }],
  creator: "Honeypot Finance",
  publisher: "Honeypot Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://honeypotfinance.xyz",
    siteName: "Honeypot Finance",
    title: "Honeypot Finance: Next-Gen Multi-Chain DeFi Liquidity Hub",
    description:
      "All-in-one DeFi platform for perpetual trading, spot trading, and automated market making on Berachain and BSC.",
    images: [
      {
        url: "/images/landing-new-assets-202511/new_media_banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Honeypot Finance - Multi-Chain DeFi Liquidity Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@honeypotfinance",
    creator: "@honeypotfinance",
    title: "Honeypot Finance: Next-Gen Multi-Chain DeFi Liquidity Hub",
    description:
      "All-in-one DeFi platform for perpetual trading, spot trading, and automated market making.",
    images: ["/images/landing-new-assets-202511/new_media_banner.jpeg"],
  },
  alternates: {
    canonical: "https://honeypotfinance.xyz",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/honeypot-logo.svg",
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          href="/images/honeypot-logo.svg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/background_honeycomb_pattern.svg"
          as="image"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={`bg-[#140E06] ${inter.className}`} suppressHydrationWarning>
        <OrganizationSchema />
        <HowToSchema />
        <Providers>
          <Analytics />
          {/* <LayoutWrapper>{children}</LayoutWrapper> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
