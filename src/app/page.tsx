"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import { partners, investors } from "@/data/partners";
import { useEffect } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaMedium } from "react-icons/fa6";
import DexStats from "@/components/DexStats";
import PlatformPerformance from "@/components/PlatformPerformance";

// Import images
import flyingBee from "@/assets/dex_plus_plus_images/flying_bee.svg";
import darkerHpotIcon from "@/assets/dex_plus_plus_images/darker_hpot_icon.svg";
import lighterHpotIcon from "@/assets/dex_plus_plus_images/lighter_hpot_icon.svg";
import lightBgEffectImage from "@/assets/effectItems/light-bg-effect.png";
import instantLp from "@/assets/home-page/instant-lp.png";
import earnFromDayOneImage from "@/assets/home-page/earn-from-day-one.png";
import FloatingPreTGE from "@/components/FloatingPreTGE";

// CSS 样式字符串
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

  .scroll-animate-fade.animate {
    opacity: 1;
  }

  .scroll-animate-scale.animate {
    opacity: 1;
    transform: scale(1);
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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

  @keyframes floatBee {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) translateX(10px) rotate(5deg);
    }
    50% {
      transform: translateY(-10px) translateX(-10px) rotate(-5deg);
    }
    75% {
      transform: translateY(-25px) translateX(5px) rotate(3deg);
    }
  }

  @keyframes floatBeeSlow {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-15px) translateX(-15px) rotate(-3deg);
    }
    50% {
      transform: translateY(-25px) translateX(15px) rotate(5deg);
    }
    75% {
      transform: translateY(-10px) translateX(-5px) rotate(-2deg);
    }
  }

  @keyframes floatBeeFast {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-30px) translateX(20px) rotate(7deg);
    }
    66% {
      transform: translateY(-15px) translateX(-20px) rotate(-7deg);
    }
  }

  .floating-bee-1 {
    animation: floatBee 4s ease-in-out infinite;
  }

  .floating-bee-2 {
    animation: floatBeeSlow 5s ease-in-out infinite;
  }

  .floating-bee-3 {
    animation: floatBeeFast 3s ease-in-out infinite;
  }
`;

export default function HomePage() {
  // 合并所有 useEffect
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 添加样式
    const styleElement = document.createElement("style");
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);

    // 滚动处理
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      const parallaxElements =
        document.querySelectorAll<HTMLElement>(".parallax");
      const floatingElements =
        document.querySelectorAll<HTMLElement>(".floating");
      const scaleElements =
        document.querySelectorAll<HTMLElement>(".scale-on-scroll");
      const scrollAnimateElements =
        document.querySelectorAll<HTMLElement>(".scroll-animate");

      // 处理视差滚动元素
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;

        // 只有当元素接近视口时才计算动画
        if (Math.abs(elementTop - scrolled) < viewportHeight * 1.5) {
          const xPos = (scrolled - elementTop) * speed;
          element.style.setProperty(
            "transform",
            `translateX(${xPos}px)`,
            "important"
          );
        }
      });

      // 处理浮动元素
      floatingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;

        if (Math.abs(elementTop - scrolled) < viewportHeight * 1.5) {
          const yPos = Math.sin((scrolled - elementTop) * 0.002) * 20;
          element.style.transform = `translateY(${yPos}px)`;
        }
      });

      // 处理缩放元素
      scaleElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const viewportMiddle = viewportHeight / 2;
        const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);

        if (distanceFromCenter < viewportHeight) {
          const scale =
            1 + Math.max(0, (1 - distanceFromCenter / viewportHeight) * 0.1);
          element.style.transform = `scale(${Math.min(scale, 1.1)})`;
        }
      });

      // 处理滚动显示动画
      scrollAnimateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
          element.classList.add("animate");
        }
      });
    };

    // 添加滚动监听，使用 requestAnimationFrame 优化性能
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

    // 初始触发一次处理
    handleScroll();

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleScroll);

    // 清理函数
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleScroll);
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#140E06] font-inter relative overflow-hidden flex flex-col items-center w-full">
      {/* Honeycomb Pattern Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/images/background_honeycomb_pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      {/* Navbar */}
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-20 w-full  fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="drop-animate flex justify-center items-center">
          <Navbar menuList={appPathsList} />
        </div>
      </div>

      <FloatingPreTGE />

      {/* Hero Section with Centered Logo and Title */}
      <div className="flex flex-col items-center justify-center w-full relative mt-[6rem] sm:mt-[8rem] min-h-[60vh] md:min-h-[30vh] z-10">
        {/* Floating Bees */}
        <div className="absolute top-20 left-[15%] floating-bee-1">
          <Image
            src={flyingBee}
            alt="bee"
            width={80}
            height={80}
            className="opacity-80"
          />
        </div>
        <div className="absolute top-12 right-[20%] floating-bee-2">
          <Image
            src={flyingBee}
            alt="bee"
            width={60}
            height={60}
            className="opacity-80"
          />
        </div>
        <div className="absolute bottom-5 right-[15%] floating-bee-3">
          <Image
            src={flyingBee}
            alt="bee"
            width={70}
            height={70}
            className="opacity-80"
          />
        </div>

        {/* Main Logo and Title */}
        <div className="flex flex-col items-center justify-center gap-8 z-10">
          <div className="flex items-center gap-3">
            <Image
              src={lighterHpotIcon}
              alt="Honeypot Logo"
              width={100}
              height={100}
              className="w-12 h-12 sm:w-18 sm:h-18 md:w-[100px] md:h-[100px]"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFCD4D] font-bebas-neue tracking-wider translate-x-[-20px] lg:translate-x-[-30px]">
              HONEYPOT FINANCE
            </h1>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-poppins font-bold text-center px-4 max-w-5xl leading-tight">
            All-In-One Liquidity Hub Building Next-Generation DeFi
            Infrastructure.
          </h2>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Perp Trading Card */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-3xl p-8 flex flex-col items-center justify-between border border-gray-800 hover:border-[#FFCD4D] transition-all cursor-pointer group">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center p-4">
              <Image
                src="/images/rocket.png"
                alt="Perp Trading"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-white mb-3">
              Perp Trading
            </h3>
            <p className="text-gray-400 text-center text-sm">
              Trade perpetual futures with up to 100x leverage
            </p>
          </div>

          {/* Spot Trading Card */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-3xl p-8 flex flex-col items-center justify-between border border-gray-800 hover:border-[#FFCD4D] transition-all cursor-pointer group">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center p-4">
              <Image
                src="/images/coin.png"
                alt="Spot Trading"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-white mb-3">
              Spot Trading
            </h3>
            <p className="text-gray-400 text-center text-sm">
              Instant token swaps with deep liquidity
            </p>
          </div>

          {/* Automated AMM Card */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-3xl p-8 flex flex-col items-center justify-between border border-gray-800 hover:border-[#FFCD4D] transition-all cursor-pointer group">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center p-4">
              <Image
                src="/images/liquidity.png"
                alt="Automated AMM"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-white mb-3">
              Automated AMM
            </h3>
            <p className="text-gray-400 text-center text-sm">
              Automated market making with optimized pricing
            </p>
          </div>

          {/* Multichain Card */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-3xl p-8 flex flex-col items-center justify-between border border-gray-800 hover:border-[#FFCD4D] transition-all cursor-pointer group">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center p-4">
              <Image
                src="/images/quantum-hub.png"
                alt="Multichain"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-white mb-3">
              Multichain
            </h3>
            <p className="text-gray-400 text-center text-sm">
              Trade across multiple blockchains seamlessly
            </p>
          </div>
        </div>
      </div>

      {/* Additional DEX Features Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-poppins font-bold mb-12 text-center">
          Additional DEX Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Multichain Swap */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
              Multichain Swap
            </h3>
            <p className="text-gray-300 text-sm">
              Trade assets across multiple blockchains seamlessly
            </p>
          </div>

          {/* MultiToken Swap */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
              MultiToken Swap
            </h3>
            <p className="text-gray-300 text-sm">
              Swap multiple tokens in a single transaction
            </p>
          </div>

          {/* Bridge */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
              Bridge
            </h3>
            <p className="text-gray-300 text-sm">
              Transfer assets between chains securely
            </p>
          </div>

          {/* Limit Order */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
              Limit Order
            </h3>
            <p className="text-gray-300 text-sm">
              Set your price and let the order execute automatically
            </p>
          </div>

          {/* TWAP */}
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all relative">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white font-poppins">
                TWAP
              </h3>
              <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                Coming Soon
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Time-Weighted Average Price orders for optimal execution
            </p>
          </div>
        </div>
      </div>

      {/* WHY HONEYPOT FINANCE Section */}
      <div className="bg-[#140E06] flex flex-col items-center gap-y-8 sm:gap-y-12 md:gap-y-20 lg:gap-y-32 w-full px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-poppins font-bold">
          WHY HONEYPOT FINANCE?
        </h2>
        <div className="scroll-animate flex flex-col lg:flex-row justify-between gap-8 w-full max-w-[1200px] mx-4 sm:mx-auto">
          {/* AMM Trading */}
          <div className="scroll-animate flex-1 rounded-[32px] p-1 bg-gradient-to-b from-gray-800 to-gray-700">
            <div className="relative bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 h-full">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[300px] h-[250px] flex justify-center items-center relative">
                  <Image
                    src={lightBgEffectImage}
                    alt="Light Effect"
                    width={300}
                    height={300}
                    className="object-contain absolute top-0 left-0 w-full h-full"
                  />
                  <Image
                    src={instantLp}
                    alt="AMM Trading"
                    width={250}
                    height={250}
                    className="object-contain z-10"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-base sm:text-xl md:text-2xl text-white font-poppins">
                    Advanced AMM
                  </h2>

                  <p className="text-sm sm:text-base text-gray-300 mb-2">
                    Traditional DEXs force you to choose between spot trading
                    and derivatives. Our integrated AMM provides the foundation
                    for both, sharing liquidity across products for maximum
                    capital efficiency.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm sm:text-xl text-white">
                        Unified liquidity pool
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm sm:text-xl text-white">
                        Cross-product composability
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm sm:text-xl text-white">
                        Lower costs for traders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perpetual Trading */}
          <div className="scroll-animate flex-1 rounded-[32px] p-1 bg-gradient-to-b from-gray-800 to-gray-700">
            <div className="relative bg-[#1a1a1a] rounded-2xl p-4 sm:p-12 h-full">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[300px] h-[250px] flex justify-center items-center relative">
                  <Image
                    src={lightBgEffectImage}
                    alt="Light Effect"
                    width={300}
                    height={300}
                    className="object-contain absolute top-0 left-0 w-full h-full"
                  />
                  <Image
                    src={earnFromDayOneImage}
                    alt="Perp Trading"
                    width={250}
                    height={250}
                    className="object-contain z-10"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-base sm:text-xl md:text-2xl text-white font-poppins">
                    Perpetual Trading
                  </h2>

                  <p className="text-sm sm:text-base text-gray-300 mb-2">
                    By combining perpetuals with our AMM, we create a flywheel
                    effect: spot trades provide instant liquidity for perp
                    positions, while perp fees boost LP returns. Everyone wins
                    in this symbiotic ecosystem.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                        sizes="20px"
                      />
                      <p className="text-base sm:text-xl text-white">
                        Up to 100x leverage
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                        sizes="20px"
                      />
                      <p className="text-base sm:text-xl text-white">
                        Shared liquidity with AMM
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/honey-box.png"
                        alt="honey box"
                        width={20}
                        height={20}
                        sizes="20px"
                      />
                      <p className="text-base sm:text-xl text-white">
                        Better price execution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DEX Performance Section */}
        <PlatformPerformance />
        <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center mt-16 z-10">
          <div className="relative z-10 mb-8 max-w-[800px]">
            <div className="bg-[#1a1a1a] rounded-xl px-6 sm:px-12 py-3 sm:py-4 border-2 sm:border-4 border-gray-700 shadow-[4px_4px_0px_0px_rgba(255,205,77,0.3)] sm:shadow-[8px_8px_0px_0px_rgba(255,205,77,0.3)]">
              <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-[48px] text-white font-bold font-poppins text-center">
                HoneyGenesis NFT
              </h2>
            </div>
          </div>

          <div className="w-full bg-[#1a1a1a] rounded-[32px] relative border-2 border-gray-700 sm:pb-8">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end">
              <div className="px-4 pt-12 sm:px-8 md:px-12 space-y-3 sm:space-y-4 flex items-center lg:pb-8">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🏦</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Honeypot Finance POL Vault Rewards
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🪂</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      HPOT Token Airdrop
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">📊</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Perpetual DEX Revenue Sharing
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🔮</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Multi-Chain Fee Sharing
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🚀</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Future Protocol Fees
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">💰</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Enhanced Staking Rewards
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🌟</span>
                    <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                      Ecosystem Access & Benefits
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end px-6 sm:px-8 md:px-12 lg:flex-shrink-0">
                <div className="flex items-end w-full">
                  <div className="hidden sm:block transform -rotate-[50deg] translate-x-6 -translate-y-2">
                    <Image
                      src="/images/experiment-bear.png"
                      alt="Experiment Bear"
                      width={50}
                      height={50}
                      className="object-contain"
                      sizes="(max-width: 640px) 40px, 50px"
                    />
                  </div>

                  <div className="flex flex-col items-center sm:items-end w-full">
                    <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] sm:-mt-32">
                      <Image
                        src="/images/cook-bear.png"
                        alt="Cook Bear"
                        width={240}
                        height={240}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                      <button
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-bold text-sm sm:text-base md:text-lg border border-gray-700 z-10"
                        onClick={() => {
                          window.open(
                            "https://magiceden.io/collections/berachain/0xc3c30fba6387cff83474e684380930dfc64554ef",
                            "_blank"
                          );
                        }}
                      >
                        Buy from ME
                      </button>

                      <button
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-bold text-sm sm:text-base md:text-lg border border-gray-700 z-10"
                        onClick={() => {
                          window.open(
                            "https://bridge.kingdomly.app/",
                            "_blank"
                          );
                        }}
                      >
                        Bridge to Berachain
                      </button>

                      <button
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-bold text-sm sm:text-base md:text-lg border border-gray-700 z-10"
                        onClick={() => {
                          window.open(
                            "https://nft.honeypotfinance.xyz/staking",
                            "_blank"
                          );
                        }}
                      >
                        Stake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products Section */}
        <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 font-poppins font-bold">
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* DEX++ */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                DEX++
              </h3>
              <p className="text-white text-sm mb-4">
                Advanced AMM and perpetual trading platform with deep liquidity
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://wasabee.honeypotfinance.xyz/swap",
                    "_blank"
                  )
                }
                className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-bold text-sm"
              >
                Start Trading
              </button>
            </div>

            {/* All in One Vault */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                All in One Vault
              </h3>
              <p className="text-white text-sm mb-4">
                Claim your share of the vault&apos;s $LBGT rewards by burning
                tokens
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://leaderboard.honeypotfinance.xyz/",
                    "_blank"
                  )
                }
                className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-bold text-sm"
              >
                Enter Vault
              </button>
            </div>

            {/* Pot2Pump */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                Pot2Pump
              </h3>
              <p className="text-white text-sm mb-4">
                Launch meme tokens with built-in liquidity management and
                rewards
              </p>
              <button
                onClick={() =>
                  window.open("https://pot2pump.honeypotfinance.xyz/", "_blank")
                }
                className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-bold text-sm"
              >
                Launch Meme
              </button>
            </div>

            {/* Dreampad */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                Dreampad
              </h3>
              <p className="text-white text-sm mb-4">
                Fair token launches with 100% liquidity and partner integrations
              </p>
              <button
                onClick={() =>
                  window.open("https://dreampad.honeypotfinance.xyz/", "_blank")
                }
                className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-bold text-sm"
              >
                Launch Token
              </button>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="scroll-animate flex flex-col items-center w-full px-4 sm:px-0 pt-16">
          <div className="relative z-10 mb-16 flex flex-col items-center">
            <div className="w-[300px] h-[300px] flex justify-center items-center">
              <Image
                src="/images/experiment-bear.png"
                alt="Experiment Bear"
                width={512}
                height={512}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="bg-[#1a1a1a] rounded-xl px-8 sm:px-12 py-3 sm:py-4 border-2 border-gray-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white font-bold font-bebas-neue">
                Backed By
              </h2>
            </div>
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-4 mb-16 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4 md:gap-8 w-full max-w-[1200px] mx-auto">
              {[...investors].map((partner, index) => (
                <a
                  key={index}
                  href={partner.partnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-animate bg-[#1a1a1a] rounded-xl border border-gray-700 hover:border-gray-600 hover:scale-105 transition-all flex items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] relative rounded-lg">
                    <Image
                      src={partner.partnerImage}
                      alt={partner.name}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 640px) 50px, (max-width: 768px) 90px, (max-width: 1024px) 110px, 130px"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="relative z-10 mb-16 flex flex-col items-center">
              <div className="bg-[#1a1a1a] rounded-xl px-8 sm:px-12 py-3 sm:py-4 border-2 border-gray-700">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white font-bold font-bebas-neue">
                  Our Partners
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4 md:gap-8 w-full max-w-[1200px] mx-auto">
              {[...partners].map((partner, index) => (
                <a
                  key={index}
                  href={partner.partnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-animate bg-[#1a1a1a] rounded-xl border border-gray-700 hover:border-gray-600 hover:scale-105 transition-all flex items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] relative rounded-lg">
                    <Image
                      src={partner.partnerImage}
                      alt={partner.name}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 640px) 50px, (max-width: 768px) 90px, (max-width: 1024px) 110px, 130px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#140E06] border-t border-gray-800 flex flex-col items-center pt-12 pb-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/honeypot-logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="font-bebas-neue text-xl text-[#FFCD4D]">
              HONEYPOT FINANCE
            </span>
          </div>
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium text-lg">
            <a
              href="https://docs.honeypotfinance.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a
              href="https://github.com/Honeypot-Finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@HoneypotFinance1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="https://magiceden.io/collections/berachain/honeygenesis-44"
              target="_blank"
              rel="noopener noreferrer"
            >
              HoneyGenesis NFT
            </a>
            <a
              href="https://pot2pump.honeypotfinance.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meme
            </a>
            <a
              href="https://wasabee.honeypotfinance.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honeypot DEX
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://t.me/+tE1KgsD-GxJhOTg0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 flex items-center justify-center hover:bg-[#2a2a2a] hover:scale-110 transition"
            >
              <BsTelegram className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://x.com/honeypotfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 flex items-center justify-center hover:bg-[#2a2a2a] hover:scale-110 transition"
            >
              <FaXTwitter className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://discord.gg/honeypotxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 flex items-center justify-center hover:bg-[#2a2a2a] hover:scale-110 transition"
            >
              <FaDiscord className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://medium.com/@HoneypotFinance1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-3 flex items-center justify-center hover:bg-[#2a2a2a] hover:scale-110 transition"
            >
              <FaMedium className="w-6 h-6 text-[#FFCD4D]" />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-gray-400 text-sm mt-2 mb-4 text-center">
            © Copyright 2025, All Rights Reserved by Honeypot
          </div>
        </div>
      </footer>
    </div>
  );
}
