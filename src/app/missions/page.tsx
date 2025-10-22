"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import { useEffect, useState } from "react";

// CSS styles
const cssStyles = `
  .scroll-animate {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes dropIn {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    60% {
      transform: translateY(15px);
    }
    75% {
      transform: translateY(-10px);
    }
    85% {
      transform: translateY(5px);
    }
    92% {
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .drop-animate {
    opacity: 0;
    animation: dropIn 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .drop-delay-1 {
    animation-delay: 0.3s;
  }

  .drop-delay-2 {
    animation-delay: 0.6s;
  }

  .drop-delay-3 {
    animation-delay: 0.9s;
  }
`;

export default function MissionsPage() {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const toggleMission = (missionId: number) => {
    setExpandedMission(expandedMission === missionId ? null : missionId);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Add styles
    const styleElement = document.createElement("style");
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);

    // Scroll handling
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const scrollAnimateElements =
        document.querySelectorAll<HTMLElement>(".scroll-animate");

      scrollAnimateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
          element.classList.add("animate");
        }
      });
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleScroll);
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#80BFE5] font-gliker relative overflow-hidden flex flex-col items-center w-full sm:px-0">
      {/* Navbar with drop animation */}
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-20 w-[calc(100%-2rem)] fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="drop-animate [filter:drop-shadow(0_0_10px_rgba(0,0,0,0.6))_drop-shadow(0_0_15px_rgba(255,205,77,0.15))_drop-shadow(0_0_20px_rgba(0,0,0,0.4))] flex justify-center items-center">
          <Navbar menuList={appPathsList} />
        </div>
      </div>

      {/* Decorative floating coins */}
      <div className="absolute left-20 top-[250px] hidden lg:block animate-bounce delay-300">
        <Image
          src="/images/coin.png"
          alt="coin"
          width={60}
          height={60}
          className="opacity-80"
        />
      </div>
      <div className="absolute right-32 top-[180px] hidden lg:block animate-bounce">
        <Image
          src="/images/coin.png"
          alt="coin"
          width={50}
          height={50}
          className="opacity-70"
        />
      </div>

      {/* Hero Section with Title */}
      <div className="flex flex-col items-center w-full relative drop-animate drop-delay-2 mt-[8rem] sm:mt-[10rem] px-4">
        <div className="relative z-10 -mb-4 sm:-mb-8 max-w-[900px]">
          <div className="bg-[#FFCD4D] rounded-xl px-8 sm:px-16 py-3 sm:py-5 border-2 sm:border-4 border-white shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] transform -rotate-3 origin-top">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#202020] font-bold">
              🎯 POT Missions
            </h1>
          </div>
        </div>

        <div className="w-full bg-[#FFCD4D] rounded-[32px] pt-12 pb-8 px-6 sm:px-12 max-w-[900px] relative bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top] border-4 border-white shadow-[8px_8px_0px_0px_#000]">
          <p className="text-base sm:text-xl md:text-2xl text-center text-[#202020] font-semibold max-w-[700px] mx-auto">
            Complete missions to earn rewards, boost your points, and maximize
            your benefits in the Honeypot Finance ecosystem
          </p>

          <div className="absolute -right-4 sm:-right-8 -bottom-4 sm:-bottom-8 hidden sm:block">
            <Image
              src="/images/money_bear.png"
              alt="money bear"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-auto sm:h-auto"
            />
          </div>

          <div className="absolute -left-4 sm:-left-8 -bottom-4 sm:-bottom-8 hidden sm:block transform -scale-x-100">
            <Image
              src="/images/cook-bear.png"
              alt="cook bear"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>

      {/* Missions Section */}
      <div className="bg-[#271A0C] flex flex-col items-center w-full px-4 py-8 sm:py-12 mt-8">
        {/* Mission Cards */}
        <div className="scroll-animate flex flex-col gap-6 sm:gap-8 w-full max-w-[1200px] mx-auto">
          {/* POT Points Mission */}
          <div
            className="scroll-animate rounded-[32px] p-1 sm:p-2 hover:scale-[1.02] transition-transform duration-300"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-6 sm:p-12 border-4 border-[#FFCD4D]/20">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFCD4D] to-[#FF9500] rounded-full flex items-center justify-center border-4 border-[#271A0C] shadow-[0_0_20px_rgba(255,205,77,0.5)] z-10">
                <span className="text-2xl sm:text-3xl font-bold text-black">
                  1
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left side - Icon/Image */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#FFCD4D] via-[#FF9500] to-[#FFCD4D] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(255,205,77,0.3)] border-4 border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      <Image
                        src="/airdrop-icon.png"
                        alt="POT Points"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#FFCD4D] font-bold mb-4">
                      POT Points
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-6">
                      Earn POT points through various activities on the platform
                      and secure your allocation for the upcoming TGE airdrop.
                      The more points you accumulate, the larger your airdrop
                      allocation!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => toggleMission(1)}
                      className="flex items-center gap-2 text-lg sm:text-xl text-white font-semibold hover:text-[#FFCD4D] transition-colors"
                    >
                      <span
                        className={`transform transition-transform ${
                          expandedMission === 1 ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                      Benefits
                    </button>
                    {expandedMission === 1 && (
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Guaranteed HPOT token allocation in the TGE airdrop
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Points earned from trading, providing liquidity, and
                            platform participation
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Early supporter rewards and exclusive access to
                            future features
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Leaderboard rankings with additional bonus rewards
                            for top participants
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Points accumulate over time - start early to
                            maximize your allocation
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://wasabee.honeypotfinance.xyz/",
                        "_blank"
                      )
                    }
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFCD4D] to-[#FF9500] text-black rounded-xl hover:scale-105 transition-all font-bold text-base sm:text-lg mt-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    🚀 Start Earning Points
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* NFT Staking Mission */}
          <div
            className="scroll-animate rounded-[32px] p-1 sm:p-2 hover:scale-[1.02] transition-transform duration-300"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #9333EA 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-6 sm:p-12 border-4 border-purple-500/20">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-full flex items-center justify-center border-4 border-[#271A0C] shadow-[0_0_20px_rgba(147,51,234,0.5)] z-10">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  2
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left side - Icon/Image */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#9333EA] via-[#EC4899] to-[#9333EA] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(147,51,234,0.3)] border-4 border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      <Image
                        src="/images/bee-bear.png"
                        alt="NFT Staking"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#FFCD4D] font-bold">
                        NFT Staking
                      </h3>
                      <button
                        onClick={() =>
                          window.open(
                            "https://magiceden.io/collections/berachain/honeygenesis-44",
                            "_blank"
                          )
                        }
                        className="px-4 py-2 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white rounded-lg hover:scale-105 transition-all font-bold text-xs sm:text-sm border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] whitespace-nowrap w-fit"
                      >
                        No NFT? Get one
                      </button>
                    </div>
                    <p className="text-base sm:text-lg text-gray-300 mb-6">
                      Stake your HoneyGenesis NFTs to earn continuous reward
                      tokens. Your NFTs work for you while remaining in your
                      custody, generating passive income from the
                      protocol&apos;s revenue.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => toggleMission(2)}
                      className="flex items-center gap-2 text-lg sm:text-xl text-white font-semibold hover:text-[#EC4899] transition-colors"
                    >
                      <span
                        className={`transform transition-transform ${
                          expandedMission === 2 ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                      Benefits
                    </button>
                    {expandedMission === 2 && (
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Earn reward tokens continuously while your NFTs are
                            staked
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Maintain full ownership and control of your NFTs
                          </p>
                        </div>
                        {/* <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Additional POT points multiplier for staked NFT
                            holders
                          </p>
                        </div> */}
                        {/* <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Share in protocol revenue including DEX trading fees
                            and perpetual trading fees
                          </p>
                        </div> */}
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Unstake anytime without penalties - complete
                            flexibility
                          </p>
                        </div>
                        {/* <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Priority access to new features and governance
                            rights
                          </p>
                        </div> */}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://nft.honeypotfinance.xyz/staking",
                        "_blank"
                      )
                    }
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white rounded-xl hover:scale-105 transition-all font-bold text-base sm:text-lg mt-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    🎨 Stake Your NFT
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AIOV Burn Mission */}
          <div
            className="scroll-animate rounded-[32px] p-1 sm:p-2 hover:scale-[1.02] transition-transform duration-300"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #DC2626 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-6 sm:p-12 border-4 border-red-600/20">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#DC2626] to-[#F97316] rounded-full flex items-center justify-center border-4 border-[#271A0C] shadow-[0_0_20px_rgba(220,38,38,0.5)] z-10">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  3
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left side - Icon/Image */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#DC2626] via-[#F97316] to-[#DC2626] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.3)] border-4 border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      <Image
                        src="/images/experiment-bear.png"
                        alt="AIOV"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#FFCD4D] font-bold mb-4">
                      All in One Vault (AIOV)
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-6">
                      Burn tokens in the All in One Vault to claim your share of
                      $LBGT rewards. The more you burn, the bigger your slice of
                      the reward pool. A deflationary mechanism that benefits
                      all participants.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => toggleMission(3)}
                      className="flex items-center gap-2 text-lg sm:text-xl text-white font-semibold hover:text-[#F97316] transition-colors"
                    >
                      <span
                        className={`transform transition-transform ${
                          expandedMission === 3 ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                      Benefits
                    </button>
                    {expandedMission === 3 && (
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Claim $LBGT reward tokens proportional to your burn
                            amount
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Reduce circulating supply, creating deflationary
                            pressure
                          </p>
                        </div>
                        {/* <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Earn bonus POT points for every token burned
                          </p>
                        </div> */}
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Participate in a community-driven reward
                            distribution mechanism
                          </p>
                        </div>
                        {/* <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Leaderboard tracking with special recognition for
                            top burners
                          </p>
                        </div> */}
                        <div className="flex items-start gap-3">
                          <Image
                            src="/images/honey-box.png"
                            alt="honey box"
                            width={20}
                            height={20}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-sm sm:text-base text-gray-200">
                            Support the long-term value of the ecosystem while
                            earning rewards
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://leaderboard.honeypotfinance.xyz/",
                        "_blank"
                      )
                    }
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white rounded-xl hover:scale-105 transition-all font-bold text-base sm:text-lg mt-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    🔥 Enter the Vault
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
