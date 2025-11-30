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

  // FAQ Schema - Matches visible FAQ accordion content exactly
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Honeypot Finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Finance is an all-in-one multi-chain DeFi liquidity hub that combines perpetual trading, spot trading, automated market making (AMM), and cross-chain functionality. It provides next-generation decentralized finance infrastructure on Berachain and Binance Smart Chain (BSC).",
        },
      },
      {
        "@type": "Question",
        name: "What blockchains does Honeypot Finance support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Finance currently supports Berachain and Binance Smart Chain (BSC). The platform is designed for multi-chain expansion and will add support for additional blockchains in the future.",
        },
      },
      {
        "@type": "Question",
        name: "How does perpetual trading work on Honeypot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Perp DEX uses a vault-based risk engine with isolated Senior and Junior vaults. Liquidity providers can choose between stable yield (Senior vault) or leveraged exposure (Junior vault). All trades are executed through AMM-native matching without orderbooks or off-chain brokers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Honey Genesis NFT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honey Genesis NFT is Honeypot Finance's official NFT collection. Holders receive exclusive benefits including airdrops, platform perks, and staking rewards. The mint is sold out, but NFTs can be purchased on secondary markets like Magic Eden or bridged from other chains.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start trading on Honeypot Finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To start trading: 1) Connect your wallet (MetaMask, Rabby, or other Web3 wallets), 2) Ensure you have tokens on Berachain or BSC, 3) Visit dex.honeypotfinance.xyz for spot trading or perp.honeypotfinance.xyz for perpetual futures, 4) Select your trading pair and execute your trade.",
        },
      },
      {
        "@type": "Question",
        name: "What are the trading fees on Honeypot DEX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot DEX offers competitive trading fees optimized for traders. Fees vary by pool and trading type. Liquidity providers earn a share of trading fees as rewards for providing liquidity to the protocol.",
        },
      },
      {
        "@type": "Question",
        name: "How can I earn rewards on Honeypot Finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can earn rewards through multiple ways: 1) Provide liquidity to earn trading fees, 2) Stake Honey Genesis NFTs for staking rewards, 3) Participate in the Pre-TGE campaign to earn points, 4) Supply liquidity to vaults on the Perp DEX for yield.",
        },
      },
      {
        "@type": "Question",
        name: "Is Honeypot Finance audited and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Honeypot Finance prioritizes security with battle-tested infrastructure that has processed millions of dollars in trading volume. The protocol undergoes security reviews and uses proven DeFi mechanisms for asset protection.",
        },
      },
    ],
  };

  // Key Facts Schema - Matches visible Direct Answers content
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Key Facts About Honeypot Finance",
    description: "Essential information about Honeypot Finance DeFi platform",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "Honeypot Finance",
        description:
          "Honeypot Finance is a multi-chain decentralized exchange (DEX) that offers perpetual futures trading, spot trading, and automated market making on Berachain and BSC.",
      },
      {
        "@type": "DefinedTerm",
        name: "Supported Blockchain Networks",
        description:
          "Honeypot Finance operates on Berachain and Binance Smart Chain (BSC). Users can trade tokens, provide liquidity, and stake NFTs on both networks.",
      },
      {
        "@type": "DefinedTerm",
        name: "Trading Products",
        description:
          "Honeypot offers: Perpetual futures trading, spot token swaps, liquidity pools (AMM), and vault-based yield products. Access via dex.honeypotfinance.xyz or perp.honeypotfinance.xyz.",
      },
      {
        "@type": "DefinedTerm",
        name: "How to Trade on Honeypot",
        description:
          "To trade on Honeypot: 1) Connect a Web3 wallet like MetaMask, 2) Have tokens on Berachain or BSC, 3) Go to dex.honeypotfinance.xyz, 4) Select a trading pair and swap.",
      },
      {
        "@type": "DefinedTerm",
        name: "Honey Genesis NFT Benefits",
        description:
          "Honey Genesis NFT holders receive: Exclusive airdrops, staking rewards, platform perks, and early access to new features. Buy on Magic Eden or stake at nft.honeypotfinance.xyz.",
      },
      {
        "@type": "DefinedTerm",
        name: "Ways to Earn Rewards",
        description:
          "Earn on Honeypot by: Providing liquidity for trading fee rewards, staking Genesis NFTs, joining the Pre-TGE points campaign, or depositing into Perp vaults for yield.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSetSchema),
        }}
      />
    </>
  );
}
