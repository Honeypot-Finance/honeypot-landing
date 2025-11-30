"use client";

/**
 * Get Started CTA Section
 *
 * Final call-to-action before footer.
 * Captures users who have scrolled through the entire page.
 * Multiple entry points for different user intents.
 */
export function GetStartedCTA() {
  return (
    <section className="w-full py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-poppins font-bold mb-4">
          Ready to Start Trading?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of traders on the most powerful multi-chain DeFi
          platform. No account needed — connect your wallet and start in
          seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          {/* Primary - Launch App */}
          <button
            onClick={() => {
              window.open("https://dex.honeypotfinance.xyz/", "_blank");
            }}
            className="text-black font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-lg flex items-center gap-3"
            style={{
              background: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
              border: "4px solid #C87304",
            }}
            aria-label="Launch Honeypot DEX app"
          >
            <span>Launch App</span>
            <svg
              width="20"
              height="20"
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
          </button>

          {/* Secondary - Perp Trading */}
          <button
            onClick={() => {
              window.open("https://perp.honeypotfinance.xyz/", "_blank");
            }}
            className="bg-transparent border-2 border-[#FFCD4D] text-[#FFCD4D] hover:bg-[#FFCD4D]/10 font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 text-lg flex items-center gap-3"
            aria-label="Trade perpetual futures"
          >
            <span>Trade Perpetuals</span>
            <svg
              width="20"
              height="20"
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
          </button>

          {/* Tertiary - Read Docs */}
          <button
            onClick={() => {
              window.open("https://docs.honeypotfinance.xyz/", "_blank");
            }}
            className="bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg flex items-center gap-3"
            aria-label="Read the documentation"
          >
            <span>Read Docs</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            No signup required
          </span>
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Non-custodial
          </span>
          <span className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Multi-chain support
          </span>
        </div>
      </div>
    </section>
  );
}
