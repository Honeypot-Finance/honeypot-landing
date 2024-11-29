import Image from "next/image";
import bgPNG from "@/assets/home-page/page3/bg.png";
import hearBearPNG from "@/assets/home-page/page3/hear-bear.png";
import tShirtBearPNG from "@/assets/home-page/page3/t-shirt-bear.png";
import logo1SVG from "@/assets/home-page/page3/logo1.svg";
import logo2SVG from "@/assets/home-page/page3/logo2.svg";
import logo3SVG from "@/assets/home-page/page3/logo3.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#140E06]">
      {/* Hero Section */}
      <Image
        src={bgPNG}
        alt="Berachain background"
        className="w-full"
        width={1440}
        height={662}
        priority
      />

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 py-16 md:py-24 px-4 md:px-6">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed">
            We designed a new liquidity entrance model, called Fair Token
            Offering (FTO) model, which is used exclusively by Dreampad and
            created by Honeypot Finance.
          </p>
        </div>

        {/* Why is FTO Ideal Section */}
        <div className="rounded-[47px] border-[6px] border-[#3A2712] bg-[#1F150A] p-8 md:p-12">
          <h2 className="text-white text-center text-3xl md:text-4xl font-medium mb-12">
            Why is FTO Ideal for My Token Launch?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-square max-w-[300px] mx-auto">
              <div className="w-full h-full rounded-full bg-[#80BFE5] flex items-center justify-center">
                <Image
                  src={hearBearPNG}
                  alt="FTO Concept"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-white/90 text-lg">
                Uniform pricing across all users, so no rat positions.
              </p>
              <p className="text-white/90 text-lg">
                Immediate establishment of a 100% deep liquidity pool for the
                token, enabling instant user trading.
              </p>
              <ul className="space-y-2 text-white/80 text-base">
                <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                  No pre-minted token in the market
                </li>
                <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                  All token's launch token is within the pool, preventing market
                  manipulation and rug pull early investor dumps
                </li>
                <li className="pl-6 relative before:content-['•'] before:text-white before:absolute before:left-0">
                  Users who missed the token sale can only purchase it in the
                  AMM pool, with no other opaque operations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Three Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: logo1SVG, // Add icon URL
              title: "Removing liquidity",
              description:
                "Removing liquidity is a balanced procedure according to constant k and thus will not affect the price.",
              subtext:
                "Project parties can remove $LP for development without damaging token price",
            },
            {
              icon: logo2SVG, // Add icon URL
              title: "(Optional) Burn the token",
              description:
                "This shows that the project owner has no intention of dumping tokens.",
              subtext:
                "As the price of token $A increases, the project can secure more funds by removing liquidity, which keeps the interests of the project aligned with token holders.",
            },
            {
              icon: logo3SVG, // Add icon URL
              title: "Game Theory",
              description:
                "This model aligns with the (3,3) game theory proposed by OlympusDAO. Actions through FTO can be categorized into three actions",
              subtext:
                "Buy $A, Add/hold liquidity, Remove liquidity and burn $A",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-3xl bg-[#3A2712]/20">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-white text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-white/90 mb-2">{feature.description}</p>
              <p className="text-white/70 text-sm">{feature.subtext}</p>
            </div>
          ))}
        </div>

        {/* Transaction Value Box */}
        <div className="rounded-3xl bg-[#3A2712]/20 p-8">
          <h3 className="text-white text-xl md:text-2xl mb-4">
            Each transaction to buy $A increases the extractable value $B of
            $LP; adding and holding liquidity provides the community with better
            prices and less slippage.
          </h3>
          <p className="text-white/90">
            According to the constant k formula, removing liquidity is
            non-disruptive when executed without affecting the price; However,
            further selling would result in collective losses for all LP
            holders, as it would decrease the extractable value $B and reduce
            the token price. To counteract this, we have implemented a remove &
            burn tokenA mechanism to prevent price drops.
          </p>
        </div>

        {/* How Does FTO Promote PoL Section */}
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-white text-3xl md:text-4xl font-medium">
              How Does FTO Promote Proof of Liquidity (PoL)?
            </h2>
            <div className="space-y-6">
              <p className="text-white/90 text-base md:text-lg">
                The Fisher Equation, MV=PT, is a fundamental component of the
                Quantity Theory of Money, where M represents Money Supply, V is
                the Velocity of Circulation, P denotes Price Level, and T stands
                for Transactions. Traditionally, this equation has been used to
                monitor inflation and deflation. In the context of blockchain,
                however, P should be interpreted as asset value. The formula
                remains relevant, with MV capturing macro-level activities and
                PT reflecting micro-level dynamics.
              </p>
              <p className="text-white/90 text-base md:text-lg">
                Proof of Liquidity (PoL) incentivizes on-chain activity,
                accelerating the velocity of circulation. This enables PoL
                networks to achieve economies of scale with a lower token supply
                or even greater efficiencies with the same token supply. This
                contrasts with Proof of Stake (PoS) systems, where a significant
                portion of the token supply is locked by validators to earn
                rewards, resulting in a reduced velocity of circulation.
              </p>
              <p className="text-white/90 text-base md:text-lg">
                Fair Token Offerings (FTO) can further enhance the velocity of
                circulation by providing immediate liquidity after a token
                launch. This immediate available liquidity facilitates trading,
                significantly bolstering the Proof of Liquidity's capacity to
                achieve economies of scale.
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-[400px] aspect-[4/5] order-1 md:order-2">
            <div className="rounded-[32px] overflow-hidden bg-gradient-to-b from-[#80BFE5] to-[#FFCD4D] p-4">
              <Image
                src={tShirtBearPNG} // Update with your image path
                alt="Berachain Bear Character"
                width={400}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Advantages Timeline */}
        <div className="rounded-[47px] border-[6px] border-[#3A2712] bg-[#1F150A] p-8 md:p-12">
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-12">
            Advantages of FTO model
          </h2>

          <div className="relative pl-12 md:pl-16">
            <div className="absolute left-[22px] md:left-[26px] top-[24px] bottom-8 w-0.5 bg-[#FFCD4D]" />

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Fair Access",
                  description:
                    "Uniform pricing across all users ensures no single user gains an unfair advantage, promoting equitable token distribution.",
                },
                {
                  number: "2",
                  title: "Earn Transaction Fees and $BGT",
                  description:
                    "As we automatically add LP to HenloDex, both users and projects can immediately start earning transaction fees and $BGT emissions from PoL.",
                },
                {
                  number: "3",
                  title: "Immediate Liquidity",
                  description:
                    "A 100% deep liquidity pool is established immediately, enabling instant user trading and improving market efficiency and confidence.",
                },
                {
                  number: "4",
                  title: "Market Stability",
                  description:
                    "With no pre-minted tokens and all tokens initially in the liquidity pool, the model prevents early investor dumps and market manipulation.",
                },
                {
                  number: "5",
                  title: "Transparency",
                  description:
                    "Users who missed the initial sale can only purchase tokens through the AMM pool, ensuring transparent and fair token distribution",
                },
                {
                  number: "6",
                  title: "Price Stability",
                  description:
                    "Balanced liquidity removal according to the constant K formula prevents price disruption due to liquidity changes.",
                },
                {
                  number: "7",
                  title: "Sustainable Funding",
                  description:
                    "Project parties can remove LP tokens to secure development funding without affecting the token price, promoting long-term sustainability.",
                },
                {
                  number: "8",
                  title: "Anti-Dumping Measures",
                  description:
                    "The optional token burn after liquidity removal demonstrates the project owner's commitment to market stability and investor confidence.",
                },
                {
                  number: "9",
                  title: "Aligned Incentives",
                  description:
                    "Aligning the interests of the project and token holders ensures that as the token price increases, the project can access more funds, benefiting all parties.",
                },
                {
                  number: "10",
                  title: "Community Engagement",
                  description:
                    "The (3,3) game theory encourages community participation through strategic actions like buying, adding, and holding liquidity, fostering a collaborative and engaged user base.",
                },
              ].map((advantage, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 md:-left-16 w-9 h-9 rounded-full bg-[#FFCD4D] flex items-center justify-center text-[#140E06] font-bold">
                    {advantage.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-medium">
                      {advantage.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
