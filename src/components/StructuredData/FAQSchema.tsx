/**
 * FAQ Structured Data (JSON-LD)
 *
 * Standalone FAQPage schema for the head section.
 * This ensures SEO analyzers detect the FAQ structured data.
 */

const faqs = [
  {
    question: "What is Honeypot Finance?",
    answer:
      "Honeypot Finance is a multi-chain DeFi liquidity hub built by industry experts that combines perpetual trading, spot trading, automated market making (AMM), and cross-chain functionality. It provides decentralized finance infrastructure across multiple blockchains.",
  },
  {
    question: "What blockchains does Honeypot Finance support?",
    answer:
      "Honeypot Finance is a multi-chain DeFi liquidity hub designed for expansion across multiple blockchains. The platform continuously adds support for new networks to provide users with the best trading experience.",
  },
  {
    question: "How does the Honeypot Perp DEX vault-based risk engine work?",
    answer:
      "Honeypot Perp DEX uses a vault-based risk engine with isolated Senior and Junior vaults. This multi-chain perpetual futures DEX allows liquidity providers to choose between stable yield (Senior vault) or leveraged exposure (Junior vault). All trades are executed through AMM-native matching perpetual trading without orderbooks or off-chain brokers.",
  },
  {
    question: "What are the Honey Genesis NFT staking benefits?",
    answer:
      "Honey Genesis NFT staking benefits include exclusive airdrops, platform perks, and ongoing staking rewards. NFT holders can stake their NFTs to earn on Honeypot Finance. The mint is sold out, but NFTs can be purchased on secondary markets like Magic Eden or bridged from other chains.",
  },
  {
    question: "How to trade on Honeypot Finance?",
    answer:
      "To trade on Honeypot Finance: 1) Connect your wallet (MetaMask, Rabby, or other Web3 wallets), 2) Ensure you have tokens on a supported blockchain, 3) Visit dex.honeypotfinance.xyz for spot trading with AMM-native matching or perp.honeypotfinance.xyz for perpetual futures trading, 4) Select your trading pair and execute your trade.",
  },
  {
    question: "How to earn rewards on Honeypot Finance?",
    answer:
      "You can earn rewards on Honeypot Finance through multiple ways: 1) Provide liquidity to earn trading fee rewards, 2) Stake Honey Genesis NFTs for staking benefits and rewards, 3) Participate in the Pre-TGE campaign to earn points, 4) Supply liquidity to the vault-based risk engine on the Perp DEX for yield.",
  },
  {
    question: "What is a DeFi multi-chain liquidity hub explained?",
    answer:
      "A DeFi multi-chain liquidity hub like Honeypot Finance aggregates trading liquidity across multiple blockchain networks. It enables users to trade tokens, swap across chains, and provide liquidity all from one unified platform. This architecture provides deeper liquidity pools and more trading opportunities than single-chain DEXs.",
  },
  {
    question: "Who is behind Honeypot Finance? (Team expertise)",
    answer:
      "Honeypot Finance team expertise includes a CEO with 10+ years software engineering experience, a CTO with a Ph.D. in Blockchain who contributed to major DeFi protocols, and a smart contract developer ranked in the top 500. The team brings extensive experience in DeFi operations, blockchain security, and strategic partnerships.",
  },
  {
    question: "What makes Honeypot a leading multi-chain perpetual futures DEX?",
    answer:
      "Honeypot is a leading multi-chain perpetual futures DEX due to its innovative vault-based risk engine, AMM-native matching system, and deep on-chain liquidity. Unlike traditional perp DEXs using orderbooks, Honeypot provides 100% AMM-powered trading with up to 100x leverage and real on-chain depth.",
  },
  {
    question: "Is Honeypot Finance audited and secure?",
    answer:
      "Yes, Honeypot Finance smart contracts have been audited by multiple security firms including Hashlock and Shieldify Security. The DEX infrastructure is powered by audited Algebra Integral technology. Full audit reports (PDFs) are publicly available at docs.honeypotfinance.xyz/about.",
  },
];

export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
