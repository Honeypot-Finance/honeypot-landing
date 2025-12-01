import type { Metadata } from "next";
import "@/styles/global.scss";
// import LayoutWrapper from "@/components/layout/LayoutWrapper"; // Commented out - not currently used
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";
import { inter, poppins, bebasNeue } from "./fonts";
import { OrganizationSchema } from "@/components/StructuredData/OrganizationSchema";
import { HowToSchema } from "@/components/StructuredData/HowToSchema";
import { FAQSchema } from "@/components/StructuredData/FAQSchema";

// Enhanced metadata for GEO (Generative Engine Optimization) and SEO
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://honeypotfinance.xyz"
  ),
  title: {
    default: "Honeypot Finance | Multi-Chain DeFi Liquidity Hub",
    template: "%s | Honeypot Finance",
  },
  description:
    "Learn what Honeypot Finance is and how to trade on this multi-chain DeFi platform. Trade perpetual futures with vault-based risk engine, swap tokens via AMM-native matching, stake Honey Genesis NFTs for rewards, and earn across multiple blockchains.",
  keywords: [
    // Primary brand keywords
    "Honeypot Finance",
    "what is Honeypot Finance",
    "how to trade on Honeypot Finance",
    // Blockchain & chain keywords
    "Honeypot Finance supported blockchains",
    "perpetual futures DEX",
    "multi-chain DEX",
    "multi-chain DeFi",
    // Product & feature keywords
    "Honeypot Perp DEX vault based risk engine",
    "AMM native matching perpetual trading",
    "perpetual futures trading",
    "spot trading",
    "decentralized exchange",
    // NFT keywords
    "Honey Genesis NFT staking benefits",
    "NFT staking rewards",
    // Earning & rewards keywords
    "how to earn rewards on Honeypot Finance",
    "DeFi liquidity provision",
    "trading fee rewards",
    // Technical keywords
    "DeFi multi-chain liquidity hub explained",
    "automated market maker",
    "cross-chain swaps",
    // Team & credibility
    "Honeypot Finance team expertise",
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
    title: "Honeypot Finance | How to Trade on Multi-Chain DeFi Liquidity Hub",
    description:
      "Learn what Honeypot Finance is: a multi-chain DeFi liquidity hub with perpetual trading (vault-based risk engine), spot trading via AMM-native matching, and Honey Genesis NFT staking across multiple blockchains.",
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
    title: "Honeypot Finance | Multi-Chain DeFi Liquidity Hub",
    description:
      "What is Honeypot Finance? A multi-chain DeFi hub with perpetual futures (vault-based risk engine), AMM-native spot trading, and Honey Genesis NFT staking rewards.",
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
        {/* JSON-LD Structured Data in head for better SEO analyzer detection */}
        <OrganizationSchema />
        <HowToSchema />
        <FAQSchema />
      </head>
      <body className={`bg-[#140E06] ${inter.className}`} suppressHydrationWarning>
        <Providers>
          <Analytics />
          {/* <LayoutWrapper>{children}</LayoutWrapper> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
