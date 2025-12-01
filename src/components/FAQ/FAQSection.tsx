/**
 * FAQ Section Component (Server Component)
 *
 * Uses native HTML details/summary for accordion - works without JavaScript.
 * All content is server-rendered and visible to crawlers/AI systems.
 * Progressive enhancement: CSS adds smooth animations.
 * Includes JSON-LD structured data for FAQPage schema.
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
];

function FAQItem({
  faq,
}: {
  faq: { question: string; answer: string };
}) {
  return (
    <details
      className="group bg-[#1F1609] border border-[#3a2f1a] rounded-2xl overflow-hidden hover:border-[#FFCD4D]/50 transition-colors"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      {/* Question - Always visible, clickable summary */}
      <summary className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3
          className="text-base sm:text-lg font-bold text-white flex items-start gap-3 flex-1 group-hover:text-[#FFCD4D] transition-colors"
          itemProp="name"
        >
          <span className="text-[#FFCD4D] text-xl leading-none shrink-0">
            Q:
          </span>
          <span>{faq.question}</span>
        </h3>

        {/* Chevron icon - rotates on open */}
        <span className="shrink-0 w-6 h-6 flex items-center justify-center text-[#FFCD4D] transition-transform duration-300 group-open:rotate-180">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>

      {/* Answer - Server-rendered, visible in HTML source for crawlers */}
      <div
        className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 pl-12 sm:pl-14 animate-fade-in"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p className="text-gray-300 leading-relaxed" itemProp="text">
          {faq.answer}
        </p>
      </div>
    </details>
  );
}

export function FAQSection() {
  return (
      <section
        className="w-full py-16 px-4 relative z-10"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl text-white font-poppins font-bold mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about Honeypot Finance
          </p>
        </div>

        {/* FAQ Accordion - All content is in HTML, works without JS */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4 text-sm">
            Have more questions? Join our community.
          </p>
          <a
            href="https://discord.gg/NfnK78KJxH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 text-sm"
          >
            Ask in Discord
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      </section>
  );
}
