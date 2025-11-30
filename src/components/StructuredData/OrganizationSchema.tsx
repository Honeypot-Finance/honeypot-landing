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
      "Honeypot Finance is a next-generation multi-chain DeFi liquidity hub offering perpetual trading, spot trading, automated AMM, and cross-chain swaps. Built by a team of Ph.D. blockchain specialists, former CTOs, and top-ranked senior developers.",
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
    member: [
      {
        "@type": "Person",
        name: "Wilson",
        jobTitle: "CEO",
        sameAs: "https://twitter.com/0xWilsonWu",
      },
      {
        "@type": "Person",
        name: "Taki",
        jobTitle: "CTO",
        sameAs: "https://twitter.com/0xTaki_eth",
      },
      {
        "@type": "Person",
        name: "Pot the Bera",
        jobTitle: "Operations Manager",
        sameAs: "https://twitter.com/PotTheBera",
      },
      {
        "@type": "Person",
        name: "Ian",
        jobTitle: "Marketing & Partnerships",
        sameAs: "https://twitter.com/naibother_",
      },
      {
        "@type": "Person",
        name: "Punk",
        jobTitle: "Smart Contract Developer",
        sameAs: "https://x.com/punk2sang",
      },
    ],
    funder: [
      { "@type": "Organization", name: "Mask Network", url: "https://mask.io/" },
      { "@type": "Organization", name: "AC Capital", url: "https://accapital.io/" },
      { "@type": "Organization", name: "TKX Capital", url: "https://link3.to/tkx" },
      { "@type": "Organization", name: "Sanyuan Capital", url: "https://www.sanyuanlab.com/" },
      { "@type": "Organization", name: "Aquanow", url: "https://www.aquanow.com/" },
      { "@type": "Organization", name: "CSP DAO", url: "https://www.cspdao.network/" },
    ],
    sponsor: [
      { "@type": "Organization", name: "Chainlink", url: "https://chain.link/" },
      { "@type": "Organization", name: "Axelar", url: "https://axelar.network/" },
      { "@type": "Organization", name: "OKX", url: "https://www.okx.com/" },
      { "@type": "Organization", name: "Particle Network", url: "https://particle.network/" },
      { "@type": "Organization", name: "Algebra", url: "https://algebra.finance/" },
      { "@type": "Organization", name: "Fjord Foundry", url: "https://www.fjordfoundry.com/" },
    ],
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
