"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/config/allAppPath";
import { partners, investors } from "@/config/partners";
import { useEffect } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaMedium } from "react-icons/fa6";
import DexStats from "@/components/DexStats";
import PlatformPerformance from "@/components/PlatformPerformance";
import FeatureCard from "@/components/FeatureCard";

// Import images
import flyingBee from "@/assets/dex_plus_plus_images/flying_bee.svg";
import darkerHpotIcon from "@/assets/dex_plus_plus_images/darker_hpot_icon.svg";
import lighterHpotIcon from "@/assets/dex_plus_plus_images/lighter_hpot_icon.svg";
import lightBgEffectImage from "@/assets/effectItems/light-bg-effect.png";
import instantLp from "@/assets/home-page/instant-lp.png";
import earnFromDayOneImage from "@/assets/home-page/earn-from-day-one.png";
import FloatingPreTGE from "@/components/FloatingPreTGE";
import NFTCarousel from "@/components/NFTCarousel/NFTCarousel";
import PerpDexSection from "@/components/PerpDexSection";

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

  @keyframes floatBeeReverse {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) translateX(-10px) rotate(-5deg);
    }
    50% {
      transform: translateY(-10px) translateX(10px) rotate(5deg);
    }
    75% {
      transform: translateY(-25px) translateX(-5px) rotate(-3deg);
    }
  }

  @keyframes floatBeeSpiral {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-25px) translateX(-15px) rotate(-8deg);
    }
    66% {
      transform: translateY(-15px) translateX(15px) rotate(8deg);
    }
  }

  .floating-bee-4 {
    animation: floatBeeReverse 4.5s ease-in-out infinite;
  }

  .floating-bee-5 {
    animation: floatBeeSpiral 3.5s ease-in-out infinite;
  }
`;

const nftImages = [
  "/nft-rolling-banner/1.avif",
  "/nft-rolling-banner/2.avif",
  "/nft-rolling-banner/3.avif",
  "/nft-rolling-banner/4.avif",
  "/nft-rolling-banner/5.avif",
  "/nft-rolling-banner/6.avif",
  "/nft-rolling-banner/7.avif",
];

export default function HomePage() {
  // 合并所有 useEffect
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 添加样式
    const styleElement = document.createElement("style");
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);

    // Defer scroll handler setup to after initial render
    const initScrollHandler = () => {
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

      // 清理函数返回
      return () => {
        window.removeEventListener("scroll", scrollHandler);
        window.removeEventListener("resize", handleScroll);
      };
    };

    // Use requestIdleCallback or setTimeout to defer initialization
    let cleanup: (() => void) | undefined;
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        cleanup = initScrollHandler();
      });
    } else {
      const timer = setTimeout(() => {
        cleanup = initScrollHandler();
      }, 100);
      return () => {
        clearTimeout(timer);
        if (cleanup) cleanup();
        document.head.removeChild(styleElement);
      };
    }

    return () => {
      if (cleanup) cleanup();
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
            style={{ transform: "scaleX(-1)" }}
            loading="lazy"
          />
        </div>
        <div className="absolute top-12 right-[20%] floating-bee-2">
          <Image
            src={flyingBee}
            alt="bee"
            width={60}
            height={60}
            className="opacity-80"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-5 right-[15%] floating-bee-3">
          <Image
            src={flyingBee}
            alt="bee"
            width={70}
            height={70}
            className="opacity-80"
            style={{ transform: "scaleX(-1)" }}
            loading="lazy"
          />
        </div>
        <div className="absolute top-32 left-[8%] floating-bee-4">
          <Image
            src={flyingBee}
            alt="bee"
            width={65}
            height={65}
            className="opacity-80"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-10 left-[25%] floating-bee-5">
          <Image
            src={flyingBee}
            alt="bee"
            width={75}
            height={75}
            className="opacity-80"
            style={{ transform: "scaleX(-1)" }}
            loading="lazy"
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
              priority
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFCD4D] font-bebas-neue tracking-wider translate-x-[-20px] lg:translate-x-[-30px]">
              HONEYPOT FINANCE
            </h1>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-poppins font-bold text-center px-4 max-w-5xl leading-tight">
            All-In-One Liquidity Hub Building Next-Generation DeFi
            Infrastructure.
          </h2>

          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  "https://wasabee.honeypotfinance.xyz/perp",
                  "_blank"
                );
              }
            }}
            className="mt-8 text-black rounded-full hover:opacity-90 transition-all font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl hover:scale-105 pl-8 pr-3 py-3 flex items-center gap-4"
            style={{
              background: "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
              border: "5px solid #C87304",
            }}
          >
            <span>Trading Perp</span>
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <FeatureCard
            title="Perp Trading"
            description="Trade perpetual futures with real on-chain depth, dynamic risk vaults, and 100% AMM-powered liquidity."
            imageSrc="/images/landing-new-assets-202511/rocket.svg"
            imageAlt="Perp Trading"
            link="https://wasabee.honeypotfinance.xyz/perp"
          />
          <FeatureCard
            title="Spot Trading"
            description="Instant token swaps with deep liquidity"
            imageSrc="/images/landing-new-assets-202511/infinite.svg"
            imageAlt="Spot Trading"
            link="https://wasabee.honeypotfinance.xyz/swap"
          />
          <FeatureCard
            title="Automated AMM"
            description="Automated market making with optimized pricing"
            imageSrc="/images/landing-new-assets-202511/charge-honey.svg"
            imageAlt="Automated AMM"
            link="https://wasabee.honeypotfinance.xyz/pools"
          />
          <FeatureCard
            title="Multichain"
            description="Trade across multiple blockchains seamlessly"
            imageSrc="/images/landing-new-assets-202511/chain.svg"
            imageAlt="Multichain"
            link="https://wasabee.honeypotfinance.xyz/swap"
          />
        </div>
      </div>

      {/* DEX Performance Section */}
      <PlatformPerformance />

      {/* Perp DEX Section */}
      <PerpDexSection />

      {/* Honeypots Vision Section */}
      <div className="w-full py-12 px-4 relative z-10">
        <div
          className="max-w-7xl mx-auto rounded-[2.5rem] p-8 sm:p-12 md:p-16"
          style={{
            background: "linear-gradient(135deg, #FFA931 0%, #F7941D 100%)",
          }}
        >
          {/* Header */}
          <h3 className="text-lg sm:text-xl font-bold text-black mb-4">
            Honeypots Vision
          </h3>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 leading-tight">
            Multi-Chain Liquidity Hub For The Future Economy
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Multichain Swap */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/landing-new-assets-202511/side_bee.svg"
                  alt="bee"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Multichain Swap
                </h4>
                <p className="text-sm sm:text-base text-black/70">
                  Instant token swaps with deep liquidity across multiple chains
                </p>
              </div>
            </div>

            {/* Spot Trading */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/landing-new-assets-202511/side_bee.svg"
                  alt="bee"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Spot Trading
                </h4>
                <p className="text-sm sm:text-base text-black/70">
                  Instant token swaps with deep liquidity
                </p>
              </div>
            </div>

            {/* Bridge */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/landing-new-assets-202511/side_bee.svg"
                  alt="bee"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Bridge
                </h4>
                <p className="text-sm sm:text-base text-black/70">
                  Instant token swaps with deep liquidity
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Limit Order */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/landing-new-assets-202511/side_bee.svg"
                  alt="bee"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Limit Order
                </h4>
                <p className="text-sm sm:text-base text-black/70">
                  Instant token swaps with deep liquidity
                </p>
              </div>
            </div>

            {/* TWAP */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/images/landing-new-assets-202511/side_bee.svg"
                  alt="bee"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                  TWAP
                </h4>
                <p className="text-sm sm:text-base text-black/70">
                  Instant token swaps with deep liquidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Honey Genesis NFT Section */}
      <div className="w-full py-8 sm:py-12 px-4 relative z-10 overflow-visible">
        <div className="max-w-7xl mx-auto overflow-visible">
          {/* Mint Sold Out Badge */}
          <div className="flex justify-center mb-3">
            <span className="bg-gray-800 text-gray-300 px-6 py-2 rounded-full text-sm font-medium">
              Mint Sold out
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-poppins font-bold mb-4">
            Honey Genesis NFT
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-center text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Buy HoneyGenesis NFTs aftermarket, stake or bridge to join in on the
            fun and receive{" "}
            <span className="font-bold">airdrop & perks 👀!</span>
          </p>

          {/* NFT Carousel */}
          <div className="mb-8 overflow-visible">
            <NFTCarousel images={nftImages} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative z-20">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://magiceden.io/collections/berachain/0xc3c30fba6387cff83474e684380930dfc64554ef",
                    "_blank"
                  );
                }
              }}
              className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
            >
              Buy from ME
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open("https://bridge.kingdomly.app/", "_blank");
                }
              }}
              className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
            >
              Bridge to Berachain
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://nft.honeypotfinance.xyz/staking",
                    "_blank"
                  );
                }
              }}
              className="bg-[#3B2712] hover:bg-[#5a3e1d] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg w-full sm:w-auto"
            >
              Stake Now
            </button>
          </div>
        </div>
      </div>

      {/* Join Discord Section */}
      <div className="w-full py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[2.5rem] overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] flex items-center"
            style={{
              backgroundImage:
                "url(/images/landing-new-assets-202511/join-discord-section-banner.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Content */}
            <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 w-full sm:max-w-2xl">
              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{
                  color: "#FFCD4D",
                  WebkitTextStroke: "8px #271A0C",
                  paintOrder: "stroke fill",
                }}
              >
                Stay up to date with Honeypot
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-8 font-medium">
                Join our community of +10,000 active discord users. Also stay up
                to date with the latest news!
              </p>

              {/* Join Discord Button */}
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://discord.gg/NfnK78KJxH", "_blank");
                  }
                }}
                className="bg-[#3D2A1A] hover:bg-[#5a3e1d] text-white font-bold py-5 px-16 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-xl sm:text-2xl flex items-center gap-4"
              >
                <span>Join Discord</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Backed By */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-poppins font-bold mb-12">
            Backed by
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 mb-20 justify-items-center">
            {investors.map((investor, index) => (
              <a
                key={index}
                href={investor.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 hover:scale-110 transition-transform duration-300 relative"
              >
                <Image
                  src={investor.partnerImage}
                  alt={investor.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </a>
            ))}
          </div>

          {/* Our Partners */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-poppins font-bold mb-12">
            Our partners
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 hover:scale-110 transition-transform duration-300 relative"
              >
                <Image
                  src={partner.partnerImage}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </a>
            ))}
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
              className="bg-[#2F1F0E] rounded-xl p-3 flex items-center justify-center hover:bg-[#3a2612] hover:scale-110 transition"
            >
              <BsTelegram className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://x.com/honeypotfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F1F0E] rounded-xl p-3 flex items-center justify-center hover:bg-[#3a2612] hover:scale-110 transition"
            >
              <FaXTwitter className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://discord.gg/NfnK78KJxH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F1F0E] rounded-xl p-3 flex items-center justify-center hover:bg-[#3a2612] hover:scale-110 transition"
            >
              <FaDiscord className="w-6 h-6 text-[#FFCD4D]" />
            </a>
            <a
              href="https://medium.com/@HoneypotFinance1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F1F0E] rounded-xl p-3 flex items-center justify-center hover:bg-[#3a2612] hover:scale-110 transition"
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
