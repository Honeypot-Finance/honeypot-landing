import Image from "next/image";
import bgPNG from "@/assets/home-page/page2/bg.png";
import likeBearPNG from "@/assets/home-page/page2/like-bear.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#140E06]">
      <Image
        src={bgPNG}
        alt="Berachain background"
        className="w-full"
        width={1440}
        height={662}
        priority
      />

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 py-16 md:py-24 px-4 md:px-6">
        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-normal">
            Honeypot Finance&apos;s vision is closely aligned with Berachain,
            and our unique flywheel model actively supports the growth and
            dynamism of the Bera community.
          </h2>
        </div>

        {/* Architecture Section */}
        <div className="rounded-[47px] border-[6px] border-[#3A2712] bg-[#1F150A] p-8 md:p-12">
          <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-12">
            Architecture
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Honeypot Finance is building a community-run DeFi Hub on
                Berachain that integrates a unique AMM model to unite a
                community-led launchpad and DEX, addressing DeFi&apos;s low
                liquidity utilization issues.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0 mt-1" />
                <div className="space-y-6">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    Dreampad, Henlo DEX, and HiveNode form a comprehensive
                    pathway that supports the introduction, retention, and
                    incentivization of liquidity within Honeypot Finance,
                    enhancing the platform&apos;s positive flywheel effect.
                  </p>
                  <ul className="space-y-4 text-white/80 text-base md:text-lg">
                    <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                      Henlo DEX, powered by the award-winning Batch-A2MM model
                      with low slippage and anti-MEV, is the home to the
                      ecosystem&apos;s long-tail assets including security
                      features for post-launch support and token trading.
                      HenloDex will bring higher liquidity efficiency and a
                      better trading experience.
                    </li>
                    <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                      Dreampad promotes immediate and deep token liquidity and
                      $HPOT grants for incubated projects while protecting
                      buyers from rug pulls, and dumping from developers through
                      the Fair token Offering Model with a built-in
                      community-driven trust layer (DAO).
                    </li>
                    <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                      BeeHive Node deeply integrates with Berachain&apos;s PoL,
                      guiding the chain consensus mechanism reward to our
                      product&apos;s liquidity and simplifying the PoL mining
                      process.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0 mt-1" />
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  From the user side: Honeypot uses Dreampad&apos;s fair launch
                  as a liquidity entry point, the completed token launch can be
                  directly injected into HenloDex for trading and providing
                  liquidity, and finally, the proof of liquidity (PoL) incentive
                  is obtained through the HiveNode node. As a flywheel, it
                  maximizes user benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flywheels Section */}
        <div className="space-y-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-medium mb-6">
              Flywheels
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Our flywheel model includes our community-led launchpad Dreampad,
              as well as a community-driven public validation node. On top of
              it, we&apos;re introducing $HPOT as a governance token, key to
              Honeypot&apos;s leadership within the Berachain ecosystem.
              Consider this: $BGT and $Honey join forces, creating a dynamic
              system of three dual-incentive tokens.
            </p>
          </div>

          {/* HPOT Flywheel Card */}
          <div className="rounded-3xl bg-[#3A2712]/20 p-6 md:p-8">
            <div className="grid md:grid-cols-[300px,1fr] gap-8">
              <div className="flex flex-col w-full max-w-[300px] mx-auto">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium text-center bg-[#140E06]/80 py-2">
                  The $HPOT flywheel plays a significant role:
                </h3>
                <div className="relative aspect-square w-full">
                  <Image
                    src={likeBearPNG}
                    alt="Berachain Astronaut Bear"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <ul className="space-y-4 text-white/90 text-base md:text-lg">
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    It helps launch projects, stimulate business and incentivize
                    our community.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    This is an attractive incentive for $BGT, increasing the
                    number of votes and revenues for our BeeHive community
                    nodes.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    It increases the liquidity depth of $HPOT, creating a robust
                    and appealing financial ecosystem.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    Node earnings and fees from the protocol will be used as buy
                    back for $HPOT. It aims at perpetually enhancing
                    $HPOT&apos;s value. This strategic approach functions as a
                    powerful catalyst, continually driving $HPOT&apos;s market
                    price to new highs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="rounded-3xl bg-[#3A2712]/20 p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0" />
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  The $BGT cycle forms also a substantial flywheel effect:
                </h3>
                <ul className="space-y-4 text-white/80 text-base md:text-lg">
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    $BGT holders who delegate to our node receive attractive
                    $HPOT bribes.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    The bribe mechanism boosts voting rights, increasing the
                    incentives for $HPOT and $Honey token pools to attract more
                    $BGT rewards.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    $HPOT holders participate in PoL mining, collecting $BGT
                    profits.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl bg-[#3A2712]/20 p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#FFCD4D] rounded-full shrink-0" />
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  This creates a lucrative income flywheel driven by $BGT and
                  $HPOT:
                </h3>
                <ul className="space-y-4 text-white/80 text-base md:text-lg">
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    The revenue from the protocol and community nodes grows.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    Increased revenues prompt $HPOT buybacks, which
                    significantly elevate its market value.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    As tokens increase in value, they attract larger bribes and
                    incentives, further stimulating the flywheel of $BGT and
                    intensifying the rise of $HPOT.
                  </li>
                  <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                    A boosted $HPOT leads to an increase in the number of nodes
                    and protocol revenues, sustaining a cycle of growth and
                    prosperity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
