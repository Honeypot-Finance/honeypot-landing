import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/config/allAppPath";
import { partners, investors } from "@/config/partners";
import Footer from "@/components/Footer";
import PlatformPerformanceServer from "@/components/PlatformPerformance/PlatformPerformanceServer";
import { PlatformPerformanceSkeleton } from "@/components/PlatformPerformance/PlatformPerformanceSkeleton";
import FeatureCardServer from "@/components/FeatureCard/FeatureCardServer";
import AnimationWrapper from "@/components/AnimationWrapper/AnimationWrapper";
import PerpDexSection from "@/components/PerpDexSection";
import { FAQSection } from "@/components/FAQ/FAQSection";
import { DirectAnswers } from "@/components/DirectAnswers/DirectAnswers";
import { AuthoritySection } from "@/components/Authority/AuthoritySection";

// Import images
import flyingBee from "@/assets/dex_plus_plus_images/flying_bee.svg";
import lighterHpotIcon from "@/assets/dex_plus_plus_images/lighter_hpot_icon.svg";

// Import client components that require interactivity
import FloatingPreTGE from "@/components/FloatingPreTGE";
import NFTCarousel from "@/components/NFTCarousel/NFTCarousel";
import { HeroButtons } from "@/components/HomePage/HeroButtons";
import { NFTButtons } from "@/components/HomePage/NFTButtons";
import { DiscordButton } from "@/components/HomePage/DiscordButton";
import { GetStartedCTA } from "@/components/HomePage/GetStartedCTA";

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
  return (
    <AnimationWrapper>
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
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-20 w-full fixed top-0 left-1/2 -translate-x-1/2 z-50">
          <div className="drop-animate flex justify-center items-center">
            <Navbar menuList={appPathsList} />
          </div>
        </div>

        <FloatingPreTGE />

        {/* Hero Section with Centered Logo and Title */}
        <section className="flex flex-col items-center justify-center w-full relative mt-[6rem] sm:mt-[8rem] min-h-[60vh] md:min-h-[30vh] z-10">
          {/* Floating Bees - CSS animations, no JS needed */}
          <div className="absolute top-20 left-[15%] floating-bee-1">
            <Image
              src={flyingBee}
              alt="Decorative flying bee"
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
              alt="Decorative flying bee"
              width={60}
              height={60}
              className="opacity-80"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-5 right-[15%] floating-bee-3">
            <Image
              src={flyingBee}
              alt="Decorative flying bee"
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
              alt="Decorative flying bee"
              width={65}
              height={65}
              className="opacity-80"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-10 left-[25%] floating-bee-5">
            <Image
              src={flyingBee}
              alt="Decorative flying bee"
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
                alt="Honeypot Finance Logo"
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

            <HeroButtons />
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCardServer
              title="Perp Trading"
              description="Trade perpetual futures with real on-chain depth, dynamic risk vaults, and 100% AMM-powered liquidity."
              imageSrc="/images/landing-new-assets-202511/rocket.svg"
              imageAlt="Perp Trading feature illustration"
              link="https://perp.honeypotfinance.xyz/"
            />
            <FeatureCardServer
              title="Spot Trading"
              description="Instant token swaps with deep liquidity"
              imageSrc="/images/landing-new-assets-202511/infinite.svg"
              imageAlt="Spot Trading feature illustration"
              link="https://dex.honeypotfinance.xyz/swap"
            />
            <FeatureCardServer
              title="Automated AMM"
              description="Automated market making with optimized pricing"
              imageSrc="/images/landing-new-assets-202511/charge-honey.svg"
              imageAlt="Automated AMM feature illustration"
              link="https://dex.honeypotfinance.xyz/pools"
            />
            <FeatureCardServer
              title="Multichain"
              description="Trade across multiple blockchains seamlessly"
              imageSrc="/images/landing-new-assets-202511/chain.svg"
              imageAlt="Multichain feature illustration"
              link="https://dex.honeypotfinance.xyz/swap"
            />
          </div>
        </section>

        {/* DEX Performance Section - Server Component with Suspense */}
        <section className="w-full relative z-10">
          <Suspense fallback={<PlatformPerformanceSkeleton />}>
            <PlatformPerformanceServer />
          </Suspense>
        </section>

        {/* Perp DEX Section - Already a Server Component */}
        <PerpDexSection />

        {/* Honeypots Vision Section */}
        <section className="w-full py-12 px-4 relative z-10 scroll-animate">
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
                    alt="Feature icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                    Multichain Swap
                  </h4>
                  <p className="text-sm sm:text-base text-black/70">
                    Instant token swaps with deep liquidity across multiple
                    chains
                  </p>
                </div>
              </div>

              {/* Spot Trading */}
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/landing-new-assets-202511/side_bee.svg"
                    alt="Feature icon"
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
                    alt="Feature icon"
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
                    alt="Feature icon"
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
                    alt="Feature icon"
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
        </section>

        {/* Honey Genesis NFT Section */}
        <section className="w-full py-8 sm:py-12 px-4 relative z-10 overflow-visible scroll-animate">
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
              Buy HoneyGenesis NFTs aftermarket, stake or bridge to join in on
              the fun and receive{" "}
              <span className="font-bold">airdrop & perks!</span>
            </p>

            {/* NFT Carousel */}
            <div className="mb-8 overflow-visible">
              <NFTCarousel images={nftImages} />
            </div>

            {/* Action Buttons - Client Component */}
            <NFTButtons />
          </div>
        </section>

        {/* Authority Section - Hidden visually, kept for SEO/GEO crawlers */}
        <div className="sr-only">
          <AuthoritySection />
        </div>

        {/* Direct Answers Section - Quotable content for RAG systems */}
        <DirectAnswers />

        {/* FAQ Section - Visible FAQ with proper semantic markup */}
        <FAQSection />

        {/* Join Discord Section */}
        <section className="w-full py-12 px-4 relative z-10 scroll-animate">
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
                  Join our community of +10,000 active discord users. Also stay
                  up to date with the latest news!
                </p>

                {/* Join Discord Button - Client Component */}
                <DiscordButton />
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA - Final conversion point */}
        <GetStartedCTA />

        {/* Partners Section */}
        <section id="partners" className="w-full py-16 px-4 relative z-10 scroll-animate">
          <div className="max-w-7xl mx-auto">
            {/* Investors */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-poppins font-bold mb-12">
              Investors
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 mb-20 justify-items-center">
              {investors.map((investor, index) => (
                <Link
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
                </Link>
              ))}
            </div>

            {/* Our Partners */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-poppins font-bold mb-12">
              Our partners
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
              {partners.map((partner, index) => (
                <Link
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer className="relative z-10" />
      </div>
    </AnimationWrapper>
  );
}
