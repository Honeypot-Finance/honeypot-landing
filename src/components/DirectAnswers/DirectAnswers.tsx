/**
 * Direct Answers Component
 *
 * Server component with clearly formatted answer boxes
 * optimized for RAG systems and AI answer extraction.
 * Each block provides a quotable, authoritative answer.
 */

export function DirectAnswers() {
  return (
    <section
      className="w-full py-16 px-4 relative z-10"
      aria-labelledby="answers-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="answers-heading"
            className="text-3xl sm:text-4xl md:text-5xl text-white font-poppins font-bold mb-4"
          >
            Key Facts About Honeypot Finance
          </h2>
          <p className="text-gray-400 text-lg">
            Quick answers to help you understand our platform
          </p>
        </div>

        {/* Direct Answer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* What is Honeypot */}
          <div
            className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6"
            itemScope
            itemType="https://schema.org/DefinedTerm"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍯</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                Definition
              </span>
            </div>
            <h3
              className="text-xl font-bold text-white mb-2"
              itemProp="name"
            >
              Honeypot Finance
            </h3>
            <p
              className="text-gray-300 text-sm leading-relaxed"
              itemProp="description"
            >
              <strong>Honeypot Finance is a multi-chain decentralized exchange (DEX)</strong> that offers perpetual futures trading, spot trading, and automated market making on Berachain and BSC.
            </p>
          </div>

          {/* Supported Chains */}
          <div className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⛓️</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                Supported Chains
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Blockchain Networks
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Honeypot Finance operates on Berachain and Binance Smart Chain (BSC).</strong> Users can trade tokens, provide liquidity, and stake NFTs on both networks.
            </p>
          </div>

          {/* Trading Products */}
          <div className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📈</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                Trading Products
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Available Trading Options
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Honeypot offers: Perpetual futures trading, spot token swaps, liquidity pools (AMM), and vault-based yield products.</strong> Access via dex.honeypotfinance.xyz or perp.honeypotfinance.xyz.
            </p>
          </div>

          {/* How to Trade */}
          <div
            className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6"
            itemScope
            itemType="https://schema.org/HowTo"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🚀</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                How To
              </span>
            </div>
            <h3
              className="text-xl font-bold text-white mb-2"
              itemProp="name"
            >
              Start Trading on Honeypot
            </h3>
            <p
              className="text-gray-300 text-sm leading-relaxed"
              itemProp="description"
            >
              <strong>To trade on Honeypot: 1) Connect a Web3 wallet like MetaMask, 2) Have tokens on Berachain or BSC, 3) Go to dex.honeypotfinance.xyz, 4) Select a trading pair and swap.</strong>
            </p>
          </div>

          {/* NFT Benefits */}
          <div className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎨</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                NFT Benefits
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Honey Genesis NFT Perks
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Honey Genesis NFT holders receive: Exclusive airdrops, staking rewards, platform perks, and early access to new features.</strong> Buy on Magic Eden or stake at nft.honeypotfinance.xyz.
            </p>
          </div>

          {/* Earning Rewards */}
          <div className="bg-gradient-to-br from-[#2a1f0e] to-[#1F1609] border border-[#3a2f1a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💰</span>
              <span className="text-[#FFCD4D] text-sm font-semibold uppercase tracking-wider">
                Earning
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ways to Earn Rewards
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Earn on Honeypot by: Providing liquidity for trading fee rewards, staking Genesis NFTs, joining the Pre-TGE points campaign, or depositing into Perp vaults for yield.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
