import Image from "next/image";

const PerpDexSection = () => {
  return (
    <div className="w-full py-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-[2.5rem] p-8 sm:p-12 md:p-16"
          style={{
            background: "linear-gradient(135deg, #2F1F0E 0%, #1F1609 100%)",
          }}
        >
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight text-center">
            Honeypot Perp DEX
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vault-Based Risk Engine */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-4xl">🧮</div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Vault-Based Risk Engine
                </h4>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Honeypot Perp introduces isolated Senior & Junior vaults —
                  allowing LPs to choose between stable yield or leveraged
                  exposure.
                </p>
              </div>
            </div>

            {/* AMM-Native Matching */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-4xl">⚙️</div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  AMM-Native Matching
                </h4>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  No orderbooks, no off-chain brokers — trades are executed
                  through deep liquidity curves powered by our Automated Market
                  Maker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerpDexSection;
