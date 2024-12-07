import Image from "next/image";
import bgPNG from "@/assets/home-page/page1/bg.png";
import AdvantagesPNG from "@/assets/home-page/page1/Advantages.png";
import likeBearPNG from "@/assets/home-page/page2/like-bear.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#140E06]">
      <Image
        src={bgPNG}
        alt="Berachain background"
        className="w-full bg-[#80BFE5]"
        width={1440}
        height={662}
        priority
      />

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 py-16 md:py-24 px-4 md:px-6">
        <div className="rounded-[47px] border-[6px] border-[#3A2712] bg-[#1F150A] p-8 md:p-12">
          <h2 className="text-white text-center text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12 max-w-3xl mx-auto leading-normal">
            Bergchain is a high-performance EVM-identical blockchain built on
            Proof-of-Liquidity consensus, and supported by the BeaconKit
            framework.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8">
            {/* Left Box */}
            <div className="p-8 rounded-[32px] bg-[#3A2712]/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#FFCD4D] rounded-full mb-6" />
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Proof-of-Liquidity is a novel consensus mechanism that aims to
                align network incentives, creating a strong synergy between
                Berachain validators, ecosystem projects and everyday users.
              </p>
            </div>

            {/* Right Box */}
            <div className="p-8 rounded-[32px] bg-[#3A2712]/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#FFCD4D] rounded-full mb-6" />
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Berachain is built using BeaconKit, a modular and customizable
                consensus layer for EVM-based blockchains.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-6">
          <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-12 md:mb-16">
            Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="w-full h-full rounded-full bg-[#80BFE5] flex items-center justify-center">
                <Image
                  src={AdvantagesPNG}
                  alt="Proof of Liquidity Concept"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Main paragraph */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Proof of Liquidity (PoL) incentivizes on-chain activity, thereby
                accelerating the velocity of circulation. This allows PoL
                networks to achieve similar economies of scale with a lower
                token supply or even greater economies of scale with the same
                token supply. This is a key differentiator from Proof of Stake
                (PoS) systems, where a large portion of the token supply is
                locked by validators to earn rewards, leading to a lower
                velocity of circulation.
              </p>

              {/* Bullet points */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-white/80 text-base md:text-lg">
                    Proof of Liquidity (PoL) incentivizes on-chain activity,
                    thereby accelerating the velocity of circulation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-white/80 text-base md:text-lg">
                    This allows PoL networks to achieve similar economies of
                    scale with a lower token supply or even greater economies of
                    scale with the same token supply.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-white/80 text-base md:text-lg">
                    This is a key differentiator from Proof of Stake (PoS)
                    systems, where a large portion of the token supply is locked
                    by validators to earn rewards, leading to a lower velocity
                    of circulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 rounded-3xl bg-[#3A2712]/20">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0" />
                <p className="text-white/90 text-base md:text-lg">
                  Fair Token Offerings (FTOs) can further increase the velocity
                  of circulation by adding liquidity immediately after the token
                  launch.
                </p>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-3xl bg-[#3A2712]/20">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0" />
                <p className="text-white/90 text-base md:text-lg">
                  This readily available liquidity allows users to trade the
                  token easily, further enhancing the Proof of Liquidity
                  system&apos;s ability to significantly further increase
                  berachain&apos;s economies of scale.
                </p>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-3xl bg-[#3A2712]/20">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0" />
                <p className="text-white/90 text-base md:text-lg">
                  Our protocol also deeply integrated with major
                  berachain&apos;s protocol to help users to earn different
                  yields (IBGT, ATOM..)
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative aspect-square max-w-[500px] mx-auto order-first md:order-last">
              <Image
                src={likeBearPNG} // Leave empty for you to fill
                alt="Berachain Bear Mascot"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
