/**
 * Comprehensive JSON-LD Structured Data
 *
 * Uses @graph structure for proper entity linking.
 * All entities have @id for cross-referencing.
 * Follows Google's structured data guidelines.
 */

export function OrganizationSchema() {
  const baseUrl = "https://honeypotfinance.xyz";

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization - Main entity
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Honeypot Finance",
        alternateName: "Honeypot",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          url: `${baseUrl}/images/honeypot-logo.svg`,
          contentUrl: `${baseUrl}/images/honeypot-logo.svg`,
          width: 512,
          height: 512,
          caption: "Honeypot Finance Logo",
        },
        image: {
          "@id": `${baseUrl}/#logo`,
        },
        description:
          "What is Honeypot Finance? A multi-chain DeFi liquidity hub built by industry experts. Learn how to trade on Honeypot Finance with perpetual futures (vault-based risk engine), AMM-native matching for spot trading, and earn rewards through Honey Genesis NFT staking across multiple blockchains.",
        foundingDate: "2024",
        founder: [
          { "@id": `${baseUrl}/#person-wilson` },
          { "@id": `${baseUrl}/#person-taki` },
        ],
        employee: [
          { "@id": `${baseUrl}/#person-wilson` },
          { "@id": `${baseUrl}/#person-taki` },
          { "@id": `${baseUrl}/#person-pot` },
          { "@id": `${baseUrl}/#person-ian` },
          { "@id": `${baseUrl}/#person-punk` },
        ],
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
          availableLanguage: ["English"],
        },
        knowsAbout: [
          "Decentralized Finance (DeFi)",
          "Multi-chain DeFi liquidity hub",
          "Perpetual futures trading with vault-based risk engine",
          "AMM-native matching perpetual trading",
          "Automated Market Making",
          "Perpetual futures DEX",
          "Honey Genesis NFT staking benefits",
          "Cross-chain token swaps",
          "DeFi rewards and yield generation",
        ],
        areaServed: "Worldwide",
        slogan: "All-In-One Liquidity Hub Building Next-Generation DeFi Infrastructure",
        makesOffer: [
          { "@id": `${baseUrl}/#service-dex` },
          { "@id": `${baseUrl}/#service-perp` },
          { "@id": `${baseUrl}/#service-nft` },
        ],
        funder: [
          {
            "@type": "Organization",
            name: "Mask Network",
            url: "https://mask.io/",
          },
          {
            "@type": "Organization",
            name: "AC Capital",
            url: "https://accapital.io/",
          },
          {
            "@type": "Organization",
            name: "TKX Capital",
            url: "https://link3.to/tkx",
          },
          {
            "@type": "Organization",
            name: "Sanyuan Capital",
            url: "https://www.sanyuanlab.com/",
          },
          {
            "@type": "Organization",
            name: "Aquanow",
            url: "https://www.aquanow.com/",
          },
          {
            "@type": "Organization",
            name: "CSP DAO",
            url: "https://www.cspdao.network/",
          },
        ],
        sponsor: [
          {
            "@type": "Organization",
            name: "Chainlink",
            url: "https://chain.link/",
          },
          {
            "@type": "Organization",
            name: "Axelar",
            url: "https://axelar.network/",
          },
          {
            "@type": "Organization",
            name: "OKX",
            url: "https://www.okx.com/",
          },
        ],
      },

      // 2. Team Members
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person-wilson`,
        name: "Wilson",
        jobTitle: "CEO & Co-Founder",
        worksFor: { "@id": `${baseUrl}/#organization` },
        sameAs: "https://twitter.com/0xWilsonWu",
        description:
          "Former CTO with 10+ years in software engineering. Led development teams at major tech companies before transitioning to blockchain.",
        knowsAbout: [
          "Business Strategy",
          "Product Development",
          "Blockchain Architecture",
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person-taki`,
        name: "Taki",
        jobTitle: "CTO & Co-Founder",
        worksFor: { "@id": `${baseUrl}/#organization` },
        sameAs: "https://twitter.com/0xTaki_eth",
        description:
          "Ph.D. in Blockchain. Researcher and architect who contributed to multiple well-known DeFi protocols.",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Ph.D. in Blockchain Technology",
        },
        knowsAbout: [
          "Smart Contract Development",
          "DeFi Protocol Design",
          "Blockchain Security",
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person-pot`,
        name: "Pot the Bera",
        jobTitle: "Operations Manager",
        worksFor: { "@id": `${baseUrl}/#organization` },
        sameAs: "https://twitter.com/PotTheBera",
        description:
          "Extensive experience in DeFi operations and community management across multiple protocols.",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person-ian`,
        name: "Ian",
        jobTitle: "Marketing & Partnerships",
        worksFor: { "@id": `${baseUrl}/#organization` },
        sameAs: "https://twitter.com/naibother_",
        description:
          "Years of experience in Web3 marketing and building strategic partnerships.",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person-punk`,
        name: "Punk",
        jobTitle: "Smart Contract Developer",
        worksFor: { "@id": `${baseUrl}/#organization` },
        sameAs: "https://x.com/punk2sang",
        description:
          "Senior blockchain developer ranked in top 500. Extensive Solidity and DeFi protocol experience.",
        knowsAbout: ["Solidity", "Smart Contracts", "DeFi Protocols", "Security Auditing"],
      },

      // 3. WebSite
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Honeypot Finance",
        description:
          "All-In-One Liquidity Hub Building Next-Generation DeFi Infrastructure",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://dex.honeypotfinance.xyz/swap?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      // 4. WebPage - Current page
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Honeypot Finance | Multi-Chain DeFi Liquidity Hub",
        description:
          "Learn what Honeypot Finance is and how to trade perpetual futures with vault-based risk engine, swap tokens via AMM-native matching, stake Honey Genesis NFTs for rewards, and earn across multiple blockchains.",
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${baseUrl}/#organization` },
        primaryImageOfPage: { "@id": `${baseUrl}/#logo` },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-US",
        breadcrumb: { "@id": `${baseUrl}/#breadcrumb` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
      },

      // 5. BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
        ],
      },

      // 6. Services/Products
      {
        "@type": "FinancialProduct",
        "@id": `${baseUrl}/#service-dex`,
        name: "Honeypot DEX - Multi-Chain Spot Trading",
        description:
          "Learn how to trade on Honeypot Finance DEX with AMM-native matching for spot token swaps. This multi-chain DeFi liquidity hub provides deep liquidity pools across multiple blockchains. Earn rewards by providing liquidity.",
        url: "https://dex.honeypotfinance.xyz",
        provider: { "@id": `${baseUrl}/#organization` },
        category: "Decentralized Exchange",
        feesAndCommissionsSpecification:
          "Competitive trading fees that vary by pool. Liquidity providers earn trading fee rewards.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free to use - only pay network gas fees and swap fees",
        },
      },
      {
        "@type": "FinancialProduct",
        "@id": `${baseUrl}/#service-perp`,
        name: "Honeypot Perp DEX - Multi-Chain Perpetual Futures",
        description:
          "Honeypot Perp DEX features a vault-based risk engine for perpetual futures trading with up to 100x leverage. AMM-native matching ensures deep on-chain liquidity without orderbooks. A leading multi-chain perpetual futures DEX.",
        url: "https://perp.honeypotfinance.xyz",
        provider: { "@id": `${baseUrl}/#organization` },
        category: "Derivatives Trading",
        feesAndCommissionsSpecification:
          "Trading fees on perpetual positions. Vault depositors earn yield from trading activity.",
      },
      {
        "@type": "Product",
        "@id": `${baseUrl}/#service-nft`,
        name: "Honey Genesis NFT - Staking Benefits & Rewards",
        description:
          "Honey Genesis NFT staking benefits include exclusive airdrops, platform perks, and ongoing staking rewards. Stake your NFTs to earn on Honeypot Finance. Learn how to earn rewards through NFT staking.",
        url: "https://nft.honeypotfinance.xyz",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "NFT Collection",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/SoldOut",
          description: "Mint sold out. Available on secondary markets like Magic Eden.",
          url: "https://magiceden.io/collections/berachain/honeygenesis-44",
        },
      },

      // 7. SoftwareApplication
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#app`,
        name: "Honeypot Finance DApp - Multi-Chain DeFi Liquidity Hub",
        applicationCategory: "FinanceApplication",
        applicationSubCategory: "Decentralized Exchange",
        operatingSystem: "Web Browser",
        url: "https://dex.honeypotfinance.xyz",
        description:
          "Honeypot Finance is a multi-chain DeFi liquidity hub built by industry experts. Trade perpetual futures with vault-based risk engine, swap tokens via AMM-native matching, and earn rewards through Honey Genesis NFT staking across multiple blockchains.",
        author: { "@id": `${baseUrl}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Perpetual futures trading with vault-based risk engine",
          "AMM-native matching for spot trading",
          "Automated Market Making (AMM) with deep liquidity",
          "Multi-chain support across multiple blockchains",
          "Cross-chain token swaps",
          "Honey Genesis NFT staking benefits and rewards",
          "Vault-based yield products for earning",
        ],
        screenshot: `${baseUrl}/images/landing-new-assets-202511/new_media_banner.jpeg`,
      },

      // 8. FAQPage - Optimized for target keywords
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-1`,
            name: "What is Honeypot Finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Finance is a multi-chain DeFi liquidity hub built by industry experts that combines perpetual trading, spot trading, automated market making (AMM), and cross-chain functionality. It provides decentralized finance infrastructure across multiple blockchains.",
              url: baseUrl,
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-2`,
            name: "What blockchains does Honeypot Finance support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Finance is a multi-chain DeFi liquidity hub designed for expansion across multiple blockchains. The platform continuously adds support for new networks to provide users with the best trading experience.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-3`,
            name: "How does the Honeypot Perp DEX vault-based risk engine work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Perp DEX uses a vault-based risk engine with isolated Senior and Junior vaults. This multi-chain perpetual futures DEX allows liquidity providers to choose between stable yield (Senior vault) or leveraged exposure (Junior vault). All trades are executed through AMM-native matching perpetual trading without orderbooks or off-chain brokers.",
              url: "https://perp.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-4`,
            name: "What are the Honey Genesis NFT staking benefits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honey Genesis NFT staking benefits include exclusive airdrops, platform perks, and ongoing staking rewards. NFT holders can stake their NFTs to earn on Honeypot Finance. The mint is sold out, but NFTs can be purchased on secondary markets like Magic Eden or bridged from other chains.",
              url: "https://nft.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-5`,
            name: "How to trade on Honeypot Finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To trade on Honeypot Finance: 1) Connect your wallet (MetaMask, Rabby, or other Web3 wallets), 2) Ensure you have tokens on a supported blockchain, 3) Visit dex.honeypotfinance.xyz for spot trading with AMM-native matching or perp.honeypotfinance.xyz for perpetual futures trading, 4) Select your trading pair and execute your trade.",
              url: "https://dex.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-6`,
            name: "How to earn rewards on Honeypot Finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can earn rewards on Honeypot Finance through multiple ways: 1) Provide liquidity to earn trading fee rewards, 2) Stake Honey Genesis NFTs for staking benefits and rewards, 3) Participate in the Pre-TGE campaign to earn points, 4) Supply liquidity to the vault-based risk engine on the Perp DEX for yield.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-7`,
            name: "What is a DeFi multi-chain liquidity hub explained?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A DeFi multi-chain liquidity hub like Honeypot Finance aggregates trading liquidity across multiple blockchain networks. It enables users to trade tokens, swap across chains, and provide liquidity all from one unified platform. This architecture provides deeper liquidity pools and more trading opportunities than single-chain DEXs.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-8`,
            name: "Who is behind Honeypot Finance? (Team expertise)",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Finance team expertise includes a CEO with 10+ years software engineering experience, a CTO with a Ph.D. in Blockchain who contributed to major DeFi protocols, and a smart contract developer ranked in the top 500. The team brings extensive experience in DeFi operations, blockchain security, and strategic partnerships.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-9`,
            name: "What makes Honeypot a leading multi-chain perpetual futures DEX?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot is a leading multi-chain perpetual futures DEX due to its innovative vault-based risk engine, AMM-native matching system, and deep on-chain liquidity. Unlike traditional perp DEXs using orderbooks, Honeypot provides 100% AMM-powered trading with up to 100x leverage and real on-chain depth.",
              url: "https://perp.honeypotfinance.xyz",
            },
          },
        ],
        isPartOf: { "@id": `${baseUrl}/#webpage` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphSchema),
      }}
    />
  );
}
