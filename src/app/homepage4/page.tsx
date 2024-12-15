import Image from "next/image";
import bgPNG from "@/assets/home-page/page4/bg.png";
import honeyPNG from "@/assets/home-page/page4/honey.png";
import lightPNG from "@/assets/home-page/page4/light.png";
import dipperPNG from "@/assets/home-page/page4/dipper.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#140E06]">
      {/* Hero Section */}
      <Image
        src={bgPNG}
        alt="Custom Hooks Background"
        className="w-full"
        width={1440}
        height={662}
        priority
      />

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 py-16 md:py-24 px-4 md:px-6">
        {/* Introduction */}
        <div className="rounded-[47px] border-[6px] border-[#3A2712] bg-[#1F150A] p-8 md:p-12">
          <div className="flex gap-6 items-start">
            <Image
              src={honeyPNG} // Add honey jar image URL
              alt="Honey Jar"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <div className="space-y-4">
              <h2 className="text-white text-2xl md:text-3xl font-medium">
                Unlock full composability for your token launch.
              </h2>
              <p className="text-white/90 text-base md:text-lg">
                The Dreampad custom hooks is designed to offer maximum
                flexibility, allowing participating custom hooks to interact
                with its core services. It also expand the range of assets that
                can be launched on chain. We used a modular development approach
                to specify them, allowing projects to use multiple custom hooks
                simultaneously to support their launch.
              </p>
            </div>
          </div>
        </div>

        {/* Hook Types Overview */}
        <div className="space-y-8">
          <div className="flex items-start justify-center gap-2 text-center bg-[#3A2712] px-[37px] py-[30px]">
            <div className="w-6 h-6 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80">
              i
            </div>
            <p className="text-white/80 text-sm md:text-base text-left">
              We also encourage community developers to create their own
              hooks—once merged into the official collection, contributors
              receive token incentives through our program.
            </p>
          </div>

          <div className="bg-[#76b2db] rounded-[39px] p-1.5 border-[10px] border-white">
            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  title: "Vesting Hook",
                  description:
                    "Ensure controlled token distribution with a predefined vesting schedule, building long-term security.",
                },
                {
                  title: "Future Option Hook",
                  description:
                    "Empower early investors to manage liquidity and exposure by speculating on future token prices through derivatives.",
                },
                {
                  title: "Remove & Burn Liquidity Hook",
                  description:
                    "Create scarcity and boost token value by burning tokens when removing liquidity from the pool.",
                },
              ].map((hook, index) => (
                <div key={index} className="rounded-[24px] p-6 space-y-3">
                  <div className="size-[50px] rounded-full bg-[#FFCD4D] flex items-center justify-center">
                    <div className="bg-white size-6 rounded-full flex items-center justify-center">
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 9L13 1"
                          stroke="#140E06"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-white text-lg font-medium">
                    {hook.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {hook.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Hook Descriptions */}
        <div className="space-y-12">
          {/* Vesting Hook */}
          <div className="rounded-3xl bg-[#3A2712]/20 p-8">
            <h3 className="text-white text-2xl md:text-3xl font-medium mb-4 text-center">
              Vesting Hook
            </h3>
            <p className="text-white/90 text-base md:text-lg">
              The vesting hook is one of the official hooks we provide. Projects
              that use this hook at launch can set up a predefined vesting
              schedule, allowing a percentage of FLP to be released linearly
              over time.
            </p>
          </div>

          {/* Future Option Hook */}
          <div className="rounded-3xl bg-[#3A2712]/20 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-white text-2xl md:text-3xl font-medium">
                  Future Option Hook
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  The design of the "future option" contracts on tokens enables
                  traders to speculate on the future price of tokens, including
                  those that have not yet been created.
                </p>
                <p className="text-white/90 text-base md:text-lg">
                  These futures tokens are redeemable 1:1 for the underlying
                  token, and provide a way for founders, early investors and
                  large holders to manage exposure and risk.
                </p>
                <p className="text-white/90 text-base md:text-lg">
                  The contracts can feature set maturity dates (when the token
                  is "expired") and strike prices (the price at which the
                  underlying token can be redeemed) fitting key to most trading
                  strategy needs.
                </p>
                <div className="space-y-4">
                  <h4 className="text-white text-lg font-medium">
                    The three main use cases for these contracts are:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="pl-6 relative before:content-['1.'] before:absolute before:left-0">
                      <span className="font-medium">
                        Liquidity for Founders:
                      </span>{" "}
                      Founders can raise funds by selling futures contracts on
                      their tokens, generating immediate cash flow.
                    </li>
                    <li className="pl-6 relative before:content-['2.'] before:absolute before:left-0">
                      <span className="font-medium">
                        Exposure Management:
                      </span>{" "}
                      Large holders can hedge their positions by trading futures
                      contracts with strike rates, limiting the impact on the
                      spot market price.
                    </li>
                    <li className="pl-6 relative before:content-['3.'] before:absolute before:left-0">
                      <span className="font-medium">
                        Trader Speculation:
                      </span>{" "}
                      Traders can speculate on the future value of tokens,
                      especially those that haven't launched yet, creating a
                      pre-market price.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src={lightPNG} // Add lamp illustration URL
                  alt="Future Option Hook Illustration"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Remove & Burn Liquidity Hook */}
          <div className="bg-[#3A2712]/20 p-8 -mx-4 md:-mx-6">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              <Image
                src={dipperPNG} // Add honey dipper illustration URL
                alt="Remove & Burn Liquidity Hook Illustration"
                width={240}
                height={240}
                className="w-60 h-60"
              />
              <div className="space-y-4">
                <h3 className="text-white text-2xl md:text-3xl font-medium">
                  Remove & Burn Liquidity Hook
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  The Remove & Burn Liquidity Hook is another official hook we
                  provide. When launching via the FTO model, projects can use
                  this hook to burn their own tokens when they remove liquidity
                  from the pool. This hook creates strong buying power for the
                  token.
                </p>
                <p className="text-white/90 text-base md:text-lg">
                  The objective of the Remove & Burn Liquidity Hook is that by
                  reducing the token supply, this hook creates strong buying
                  power for the token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
