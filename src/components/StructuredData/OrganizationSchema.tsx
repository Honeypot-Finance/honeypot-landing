/**
 * JSON-LD Structured Data for GEO (Generative Engine Optimization)
 *
 * This provides structured data that helps AI engines and search engines
 * understand the content and context of Honeypot Finance.
 */

export function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Honeypot Finance",
    url: "https://honeypotfinance.xyz",
    logo: "https://honeypotfinance.xyz/images/honeypot-logo.svg",
    description:
      "Honeypot Finance is a next-generation multi-chain DeFi liquidity hub offering perpetual trading, spot trading, automated AMM, and cross-chain swaps.",
    foundingDate: "2024",
    sameAs: [
      "https://x.com/honeypotfinance",
      "https://discord.gg/NfnK78KJxH",
      "https://t.me/+tE1KgsD-GxJhOTg0",
      "https://medium.com/@HoneypotFinance1",
      "https://github.com/Honeypot-Finance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://discord.gg/NfnK78KJxH",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Honeypot Finance",
    url: "https://honeypotfinance.xyz",
    description:
      "All-In-One Liquidity Hub Building Next-Generation DeFi Infrastructure",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dex.honeypotfinance.xyz/swap?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Honeypot DEX",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: "https://dex.honeypotfinance.xyz",
    description:
      "Decentralized exchange offering spot trading, perpetual futures, and automated market making on multiple blockchains including Berachain and BSC.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Perpetual Trading with up to 100x leverage",
      "Spot Trading with deep liquidity",
      "Automated Market Making (AMM)",
      "Multi-chain support (Berachain, BSC)",
      "Vault-based risk management",
      "NFT staking rewards",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Honeypot Finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Finance is an all-in-one multi-chain liquidity hub that combines perpetual trading, spot trading, automated AMM, and cross-chain functionality to provide next-generation DeFi infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "What blockchains does Honeypot Finance support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Finance currently supports Berachain and Binance Smart Chain (BSC), with plans to expand to additional chains.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Honey Genesis NFT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honey Genesis NFT is Honeypot Finance's NFT collection that provides holders with exclusive benefits including airdrops and perks. NFTs can be staked for additional rewards.",
        },
      },
      {
        "@type": "Question",
        name: "How does Honeypot Perp DEX work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Perp DEX uses a vault-based risk engine with isolated Senior & Junior vaults, allowing liquidity providers to choose between stable yield or leveraged exposure. Trades are executed through AMM-native matching without orderbooks.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
