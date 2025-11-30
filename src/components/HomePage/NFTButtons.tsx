"use client";

/**
 * NFT Section CTA Buttons
 *
 * Clear action verbs with full labels (no abbreviations)
 * Primary action: Stake for rewards
 * Secondary actions: Buy NFT, Bridge NFT
 */
export function NFTButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative z-20">
      {/* Primary CTA - Stake for rewards */}
      <button
        onClick={() => {
          window.open("https://nft.honeypotfinance.xyz/staking", "_blank");
        }}
        className="text-black font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
          border: "3px solid #C87304",
        }}
        aria-label="Stake your Honey Genesis NFT to earn rewards"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Stake NFT for Rewards</span>
      </button>

      {/* Secondary CTA - Buy on Magic Eden */}
      <button
        onClick={() => {
          window.open(
            "https://magiceden.io/collections/berachain/0xc3c30fba6387cff83474e684380930dfc64554ef",
            "_blank"
          );
        }}
        className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto flex items-center justify-center gap-2"
        aria-label="Buy Honey Genesis NFT on Magic Eden marketplace"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Buy on Magic Eden</span>
      </button>

      {/* Tertiary CTA - Bridge */}
      <button
        onClick={() => {
          window.open("https://bridge.kingdomly.app/", "_blank");
        }}
        className="bg-transparent border-2 border-[#5a3e1d] hover:bg-[#3B2712] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg w-full sm:w-auto flex items-center justify-center gap-2"
        aria-label="Bridge your NFT from other chains to Berachain"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 17L10 11L4 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17L20 11L14 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Bridge NFT to Berachain</span>
      </button>
    </div>
  );
}
