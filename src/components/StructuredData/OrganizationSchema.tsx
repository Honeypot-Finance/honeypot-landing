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
          "Honeypot Finance is a next-generation multi-chain DeFi liquidity hub offering perpetual trading, spot trading, automated AMM, and cross-chain swaps on Berachain and BSC.",
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
          "Decentralized Finance",
          "Cryptocurrency Trading",
          "Perpetual Futures",
          "Automated Market Making",
          "Blockchain Technology",
          "NFT Staking",
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
        name: "Honeypot Finance: Next-Gen Multi-Chain DeFi Liquidity Hub",
        description:
          "Trade perpetual futures, swap tokens, and earn rewards on Honeypot Finance - the all-in-one DeFi platform on Berachain and BSC.",
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
        name: "Honeypot DEX",
        description:
          "Decentralized exchange for spot trading with deep liquidity on Berachain and BSC.",
        url: "https://dex.honeypotfinance.xyz",
        provider: { "@id": `${baseUrl}/#organization` },
        category: "Decentralized Exchange",
        feesAndCommissionsSpecification:
          "Competitive trading fees that vary by pool. Liquidity providers earn a share of fees.",
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
        name: "Honeypot Perp DEX",
        description:
          "Perpetual futures trading with up to 100x leverage using vault-based risk engine.",
        url: "https://perp.honeypotfinance.xyz",
        provider: { "@id": `${baseUrl}/#organization` },
        category: "Derivatives Trading",
        feesAndCommissionsSpecification:
          "Trading fees on perpetual positions. Vault depositors earn yield from trading activity.",
      },
      {
        "@type": "Product",
        "@id": `${baseUrl}/#service-nft`,
        name: "Honey Genesis NFT",
        description:
          "Official NFT collection with exclusive benefits including airdrops, staking rewards, and platform perks.",
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
        name: "Honeypot Finance DApp",
        applicationCategory: "FinanceApplication",
        applicationSubCategory: "Decentralized Exchange",
        operatingSystem: "Web Browser",
        url: "https://dex.honeypotfinance.xyz",
        description:
          "Web-based decentralized finance application for trading, liquidity provision, and NFT staking.",
        author: { "@id": `${baseUrl}/#organization` },
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
          "Cross-chain token swaps",
          "NFT staking rewards",
          "Vault-based yield products",
        ],
        screenshot: `${baseUrl}/images/landing-new-assets-202511/new_media_banner.jpeg`,
      },

      // 8. FAQPage
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
              text: "Honeypot Finance is an all-in-one multi-chain DeFi liquidity hub that combines perpetual trading, spot trading, automated market making (AMM), and cross-chain functionality. It provides next-generation decentralized finance infrastructure on Berachain and Binance Smart Chain (BSC).",
              url: baseUrl,
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-2`,
            name: "What blockchains does Honeypot Finance support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Finance currently supports Berachain and Binance Smart Chain (BSC). The platform is designed for multi-chain expansion and will add support for additional blockchains in the future.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-3`,
            name: "How does perpetual trading work on Honeypot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Perp DEX uses a vault-based risk engine with isolated Senior and Junior vaults. Liquidity providers can choose between stable yield (Senior vault) or leveraged exposure (Junior vault). All trades are executed through AMM-native matching without orderbooks or off-chain brokers.",
              url: "https://perp.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-4`,
            name: "What is the Honey Genesis NFT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honey Genesis NFT is Honeypot Finance's official NFT collection. Holders receive exclusive benefits including airdrops, platform perks, and staking rewards. The mint is sold out, but NFTs can be purchased on secondary markets like Magic Eden or bridged from other chains.",
              url: "https://nft.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-5`,
            name: "How do I start trading on Honeypot Finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To start trading: 1) Connect your wallet (MetaMask, Rabby, or other Web3 wallets), 2) Ensure you have tokens on Berachain or BSC, 3) Visit dex.honeypotfinance.xyz for spot trading or perp.honeypotfinance.xyz for perpetual futures, 4) Select your trading pair and execute your trade.",
              url: "https://dex.honeypotfinance.xyz",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-6`,
            name: "What are the trading fees on Honeypot DEX?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot DEX offers competitive trading fees optimized for traders. Fees vary by pool and trading type. Liquidity providers earn a share of trading fees as rewards for providing liquidity to the protocol.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-7`,
            name: "How can I earn rewards on Honeypot Finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can earn rewards through multiple ways: 1) Provide liquidity to earn trading fees, 2) Stake Honey Genesis NFTs for staking rewards, 3) Participate in the Pre-TGE campaign to earn points, 4) Supply liquidity to vaults on the Perp DEX for yield.",
            },
          },
          {
            "@type": "Question",
            "@id": `${baseUrl}/#faq-8`,
            name: "Is Honeypot Finance audited and secure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Honeypot Finance prioritizes security with battle-tested infrastructure that has processed millions of dollars in trading volume. The protocol undergoes security reviews and uses proven DeFi mechanisms for asset protection.",
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
