"use client";

export function NFTButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative z-20">
      <button
        onClick={() => {
          window.open(
            "https://magiceden.io/collections/berachain/0xc3c30fba6387cff83474e684380930dfc64554ef",
            "_blank"
          );
        }}
        className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
      >
        Buy from ME
      </button>
      <button
        onClick={() => {
          window.open("https://bridge.kingdomly.app/", "_blank");
        }}
        className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
      >
        Bridge to Berachain
      </button>
      <button
        onClick={() => {
          window.open("https://nft.honeypotfinance.xyz/staking", "_blank");
        }}
        className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
      >
        Stake Now
      </button>
    </div>
  );
}
