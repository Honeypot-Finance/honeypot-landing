"use client";

/**
 * Hero CTA Buttons
 *
 * Primary: Start trading perpetuals (main product)
 * Secondary: Explore spot trading (alternative entry point)
 * Clear action verbs with value propositions
 */
export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      {/* Primary CTA - Perp Trading */}
      <button
        onClick={() => {
          window.open("https://perp.honeypotfinance.xyz/", "_blank");
        }}
        className="text-black rounded-full hover:opacity-90 transition-all font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl hover:scale-105 pl-8 pr-3 py-3 flex items-center gap-4"
        style={{
          background: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
          border: "5px solid #C87304",
        }}
        aria-label="Start trading perpetual futures on Honeypot"
      >
        <span>Start Perp Trading</span>
        <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#F7931A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Secondary CTA - Spot Trading */}
      <button
        onClick={() => {
          window.open("https://dex.honeypotfinance.xyz/swap", "_blank");
        }}
        className="bg-transparent border-2 border-[#FFCD4D] text-[#FFCD4D] hover:bg-[#FFCD4D]/10 rounded-full font-bold text-base sm:text-lg md:text-xl px-8 py-3 transition-all duration-300 hover:scale-105 flex items-center gap-3"
        aria-label="Swap tokens on Honeypot DEX"
      >
        <span>Swap Tokens</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </button>
    </div>
  );
}
