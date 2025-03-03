"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import { partners } from "@/data/partners";
import { useEffect, useRef, useState } from "react";

// CSS 样式字符串
const cssStyles = `
  .scroll-animate {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
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
`;

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // 合并所有 useEffect
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 添加样式
    const styleElement = document.createElement("style");
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);

    // 设置加载状态
    setIsLoaded(true);

    // 滚动处理
    const handleScroll = () => {
      const scrolled = window.scrollY;

      const parallaxElements =
        document.querySelectorAll<HTMLElement>(".parallax");
      const floatingElements =
        document.querySelectorAll<HTMLElement>(".floating");
      const scaleElements =
        document.querySelectorAll<HTMLElement>(".scale-on-scroll");

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      floatingElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.3");
        const yPos = Math.sin(scrolled * 0.002) * 20;
        element.style.transform = `translateY(${yPos}px)`;
      });

      scaleElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementBottom > 0) {
          const scrollPercent = 1 - elementTop / windowHeight;
          const scale = 1 + scrollPercent * 0.1;
          element.style.transform = `scale(${Math.min(scale, 1.1)})`;
        }
      });
    };

    // Intersection Observer 设置
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    document.querySelectorAll(".scroll-animate").forEach((element) => {
      observer.observe(element);
    });

    // 添加滚动监听
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

    window.addEventListener("scroll", scrollHandler);

    // 清理函数
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      observer.disconnect();
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#202020] font-gliker relative overflow-hidden flex flex-col items-center gap-y-8 sm:gap-y-12 md:gap-y-20 lg:gap-y-32 w-full px-4 sm:px-0">
      <div className="flex flex-col items-center w-full">
        {/* Navbar with fade in animation */}
        <div
          style={{ animation: "fadeIn 0.6s ease forwards" }}
          className="mb-6 sm:mb-8 md:mb-12 lg:mb-20"
        >
          <Navbar menuList={appPathsList} />
        </div>

        <div
          className="scroll-animate absolute left-44 top-0 parallax opacity-0 hidden lg:block"
          data-speed="0.3"
          style={{
            transform: "translateY(40px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Image
            src="/images/honey_dripping.png"
            alt="honey dripping"
            width={240}
            height={240}
            sizes="(max-width: 640px) 160px, 240px"
            priority
          />
        </div>

        <div className="scroll-animate scale-on-scroll relative px-4 sm:px-12 md:px-20 py-10 sm:py-8 md:py-20 sm:leading-loose bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] max-w-[900px] mx-4 sm:mx-auto border-[2px] sm:border-[3px] border-white bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top] opacity-0">
          <div className="hidden sm:block absolute left-4 top-8 w-[18px] h-[18px] bg-black rounded-full" />
          <div className="hidden sm:block absolute right-4 top-8 w-[18px] h-[18px] bg-black rounded-full" />
          <div className="hidden sm:block absolute left-4 bottom-8 w-[18px] h-[18px] bg-black rounded-full" />
          <div className="hidden sm:block absolute right-4 bottom-8 w-[18px] h-[18px] bg-black rounded-full" />

          <div className="flex flex-col items-center">
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-[56px] text-center text-black leading-tight mb-2 sm:mb-4">
              The Ultimate Token Launch
              <br /> Platform on Berachain
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center opacity-90 mb-3 sm:mb-4 md:mb-8 max-w-[674px] mx-auto text-[#373737]">
              Instant liquidity, fair distribution, sustainable growth, and
              perpetual rewards all powered by proof of liquidity
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "1s",
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://pot2pump.honeypotfinance.xyz/launch-token?launchType=meme",
                    "_blank"
                  )
                }
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm"
              >
                Launch Memes on Pot2Pump
              </button>
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm">
                Launch your project on Dreampad
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/images/money_bear.png"
              alt="fishing bear"
              width={140}
              height={140}
              className="hidden sm:block"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 140px"
            />
          </div>

          {/* FIXME: z-index issue */}
          <div
            className="absolute right-40 -top-10 floating hidden lg:block"
            data-speed="0.5"
            style={{
              opacity: 0,
              animation: "fadeIn 1s ease forwards",
              animationDelay: "1.4s",
            }}
          >
            <Image
              src="/images/coin.png"
              alt="coin"
              width={80}
              height={80}
              className="animate-bounce delay-300"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 60px, 80px"
            />
          </div>
        </div>

        <div>
          <div className="scale-x-[-1] absolute left-48 top-80 hidden lg:block">
            <Image
              src="/images/coin.png"
              alt="coin"
              width={45}
              height={45}
              className="animate-bounce"
              sizes="(max-width: 640px) 30px, 45px"
            />
          </div>
          <div className="scale-x-[-1] rotate-[-30deg] absolute left-40 top-[630px] hidden lg:block">
            <Image
              src="/images/coin.png"
              alt="coin"
              width={50}
              height={50}
              className="animate-bounce delay-300 ml-12"
              sizes="(max-width: 640px) 35px, 50px"
            />
          </div>
          <div className="absolute right-20 top-[240px] hidden lg:block">
            <Image
              src="/images/coin.png"
              alt="coin"
              width={40}
              height={40}
              className="animate-bounce delay-300 ml-12"
              sizes="(max-width: 640px) 25px, 40px"
            />
          </div>
          <div className="rotate-[50deg] absolute right-20 top-[600px] hidden lg:block">
            <Image
              src="/images/coin.png"
              alt="coin"
              width={40}
              height={40}
              className="animate-bounce delay-300 ml-12"
              sizes="(max-width: 640px) 25px, 40px"
            />
          </div>
        </div>

        <div className="w-full relative">
          <div className="flex flex-col items-center sm:-mt-10">
            <div
              className="scroll-animate parallax mb-2 sm:mb-0"
              data-speed="0.2"
              style={{
                opacity: 0,
                animation: "fadeIn 1s ease forwards",
                animationDelay: "1.6s",
              }}
            >
              <Image
                src="/images/lying_bear.png"
                alt="lying bear"
                width={600}
                height={300}
                className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] mr-0 sm:mr-20 md:mr-40"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
              />
            </div>
            <div
              className="w-full"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: "fadeInUp 0.8s ease forwards",
                animationDelay: "1.8s",
              }}
            >
              <Image
                src="/images/border.svg"
                alt="border"
                width={1512}
                height={182}
                className="w-full object-cover -mt-6 sm:-mt-10"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transform memecoins Section */}
      <div className="scroll-animate relative px-4 sm:px-12 md:px-20 py-8 sm:py-12 md:py-20 bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto bg-[url('/images/honey-border.png'),url('/images/gift.png')] bg-[length:auto_40px,200px_auto] sm:bg-[length:auto_40px,400px_auto] [background-repeat:repeat-x,no-repeat] bg-[position:-30px_top,right_bottom]">
        <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl text-[#373737] leading-tight max-w-[70%]">
          Transform memecoins into
          <br /> sustainable assets with
          <br /> continuous rewards for everyone
        </h1>
      </div>

      {/* Pot2Pump Section */}
      <div className="scroll-animate relative px-6 sm:px-20 pt-12 sm:pt-16 bg-[#252424] rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-[500px]">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 sm:mb-8">
              Pot2Pump
            </h1>
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
                  Berachain-native liquidity management.
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
                  Boosted rewards for meme stakers.
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://pot2pump.honeypotfinance.xyz/launch-token?launchType=meme",
                  "_blank"
                )
              }
              className="mt-8 border border-white px-8 py-4 bg-[#FFCD4D] text-black rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm"
            >
              Meme Launch
            </button>
          </div>

          <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
            <Image
              src="/images/honey_jar.png"
              alt="Honey Jar"
              width={400}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why Pot2Pump Cards */}
      <div className="scroll-animate flex flex-col lg:flex-row justify-between gap-8 w-full max-w-[1200px] mx-4 sm:mx-auto">
        {/* Card 1 */}
        <div className="scroll-animate flex-1 rounded-[32px] p-[40px] bg-gradient-to-b from-[#202020] via-[#202020] to-[#FFCD4D]">
          <div className="relative bg-[#202020] rounded-2xl p-8 sm:p-12 h-full">
            <div className="flex flex-col items-center gap-8">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/light.png"
                  alt="Light Icon"
                  width={128}
                  height={128}
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <h2 className="text-base sm:text-xl md:text-2xl text-white">
                  For Meme Projects
                </h2>

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
                      Instant revenue through LP fees
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
                      Up to 100% revenue sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="scroll-animate flex-1 rounded-[32px] p-[40px] bg-gradient-to-b from-[#202020] via-[#202020] to-[#FFCD4D]">
          <div className="relative bg-[#202020] rounded-2xl p-12 h-full">
            <div className="flex flex-col items-center gap-8">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/gold-horse.png"
                  alt="Gold Horse Icon"
                  width={128}
                  height={128}
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-base sm:text-xl md:text-2xl text-white">
                  For Meme LP Providers & Traders
                </h2>

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
                      Protection from rug pulls
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
                      Long-term sustainability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dreampad Section */}
      <div className="scroll-animate bg-[#FFCD4D] rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-[500px] px-4 sm:pl-20 py-8 sm:py-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#282121] font-bold mb-6 sm:mb-8">
            Dreampad
          </h1>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/honey-box.png"
                alt="honey box"
                width={20}
                height={20}
                sizes="20px"
              />
              <p className="text-base sm:text-xl text-[#282121]">
                100% liquidity pools
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
              <p className="text-base sm:text-xl text-[#282121]">
                Launch with partner brands
              </p>
            </div>
          </div>
          <button className="mt-8 px-8 py-4 bg-[#010101] text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm border border-white shadow-[2px_2px_8px_0px_rgba(22,18,8,0.50)]">
            Token Launch
          </button>
        </div>

        <div className="h-full w-full lg:w-auto">
          <Image
            src="/images/space-bear.png"
            alt="Space Bear"
            width={600}
            height={600}
            className="h-auto w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
            priority
          />
        </div>
      </div>

      {/* FTO Section */}
      <div className="scroll-animate flex flex-col items-center gap-16 w-full max-w-[1200px] mx-4 sm:mx-auto">
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-white font-gliker text-center">
          FTO (Fair Token Offering)
        </h1>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          {/* 第一个卡片 - Instant Deep liquidity */}
          <div className="scroll-animate flex-1 rounded-[32px] p-[40px] bg-gradient-to-b from-[#202020] via-[#202020] to-[#FFCD4D]">
            <div className="relative bg-[#202020] rounded-2xl p-12 h-full flex flex-col items-center">
              <div className="w-40 h-40 relative mb-12">
                <Image
                  src="/images/deep-liquidity.png"
                  alt="Deep Liquidity"
                  width={160}
                  height={160}
                  className="object-contain"
                  sizes="(max-width: 640px) 120px, 160px"
                />
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl text-white font-gliker mb-3 sm:mb-4">
                Instant Deep liquidity
              </h2>
              <p className="text-lg text-white text-center">
                Start trading immediately with 100% liquidity
              </p>
            </div>
          </div>

          {/* 第二个卡片 - Earn from Day One */}
          <div className="scroll-animate flex-1 rounded-[32px] p-[40px] bg-gradient-to-b from-[#202020] via-[#202020] to-[#FFCD4D]">
            <div className="relative bg-[#202020] rounded-2xl p-12 h-full flex flex-col items-center">
              <div className="w-44 h-36 relative mb-12">
                <Image
                  src="/images/money.png"
                  alt="Money"
                  width={176}
                  height={144}
                  className="object-contain"
                  sizes="(max-width: 640px) 132px, 176px"
                />
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl text-white font-gliker mb-3 sm:mb-4">
                Earn from Day One
              </h2>
              <p className="text-lg text-white text-center">
                Passive income through transaction fees and partner yields
              </p>
            </div>
          </div>

          {/* 第三个卡片 - Auto-Compunding Rewards */}
          <div className="scroll-animate flex-1 rounded-[32px] p-[40px] bg-gradient-to-b from-[#202020] via-[#202020] to-[#FFCD4D]">
            <div className="relative bg-[#202020] rounded-2xl p-8 sm:p-12 h-full flex flex-col items-center">
              <div className="w-36 h-36 relative mb-12">
                <Image
                  src="/images/reward.png"
                  alt="Reward"
                  width={144}
                  height={144}
                  className="object-contain"
                  sizes="(max-width: 640px) 108px, 144px"
                />
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl text-white font-gliker mb-3 sm:mb-4">
                Auto-Compunding Rewards
              </h2>
              <p className="text-base sm:text-lg text-white text-center">
                Continuous rewards for token holders
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="scroll-animate bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 relative w-full sm:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 左侧内容 */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#202020] font-bold">
                  <span className="border-b-2 border-[#202020]">
                    Berally / BurrBear / Overlay
                  </span>
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202020] font-bold">
                  Key figures
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/honey-box.png"
                      alt="honey box"
                      width={24}
                      height={24}
                      sizes="24px"
                    />
                    <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                      $2.5M+ raised
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/honey-box.png"
                      alt="honey box"
                      width={24}
                      height={24}
                      sizes="24px"
                    />
                    <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                      1300+ participants
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/honey-box.png"
                      alt="honey box"
                      width={24}
                      height={24}
                      sizes="24px"
                    />
                    <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                      3+ projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <Image
              src="/images/cool-bear.png"
              alt="Cool Bear"
              width={400}
              height={400}
              className="w-[240px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain"
              sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
            />
          </div>
        </div>
      </div>

      {/* HoneyGenesis NFT */}
      <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center">
        <div className="relative z-10 -mb-4 sm:-mb-8 max-w-[800px]">
          <div className="bg-[#FFCD4D] rounded-xl px-6 sm:px-12 py-2 sm:py-4 border-2 sm:border-4 border-white shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] transform -rotate-6 origin-top">
            <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-[48px] text-[#202020] font-bold">
              HoneyGenesis NFT
            </h2>
          </div>
          <div className="absolute -top-6 sm:-top-20 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/golden-hook.png"
              alt="Golden Hook"
              width={60}
              height={60}
              className="w-8 h-8 sm:w-auto sm:h-auto"
              sizes="(max-width: 640px) 32px, 60px"
            />
          </div>
        </div>

        <div className="w-full bg-[#FFCD4D] rounded-[32px] relative bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top]">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="px-4 py-12 sm:px-8 md:px-12 space-y-4 sm:space-y-6 flex-1">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/honey-box.png"
                    alt="honey box"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                  <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                    Unique token airdrop
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/honey-box.png"
                    alt="honey box"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                  <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                    Revenue sharing from BeraFarm Game
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/honey-box.png"
                    alt="honey box"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                  <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                    4 million incentive program
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/honey-box.png"
                    alt="honey box"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                  <p className="text-base sm:text-xl md:text-2xl text-[#202020]">
                    RFB incentives for Bera
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end p-6 sm:p-8 md:p-12 lg:flex-shrink-0">
              <div className="flex items-end">
                <div className="hidden sm:block transform -rotate-[50deg] translate-x-6">
                  <Image
                    src="/images/experiment-bear.png"
                    alt="Experiment Bear"
                    width={50}
                    height={50}
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 50px"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px]">
                    <Image
                      src="/images/cook-bear.png"
                      alt="Cook Bear"
                      width={240}
                      height={240}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                    />
                  </div>

                  <button className="mt-4 px-8 sm:px-12 md:px-16 py-2 sm:py-3 md:py-4 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm sm:text-base md:text-lg border border-white">
                    Buy on OKX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore more 按钮 */}
      <button className="px-8 sm:px-12 py-3 sm:py-4 border border-white bg-[#FFCD4D] text-[#202020] rounded-2xl hover:bg-opacity-90 transition-all font-bold text-base sm:text-xl">
        Explore more
      </button>

      {/* Partners 部分 */}
      <div className="flex flex-col items-center w-full px-4 sm:px-0">
        <div className="relative z-10 mb-16 flex flex-col items-center">
          <Image
            src="/images/experiment-bear.png"
            alt="Experiment Bear"
            width={180}
            height={180}
            className="object-contain"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
          />

          <div className="bg-[#FFCD4D] rounded-xl px-8 sm:px-12 py-3 sm:py-4 border-4 border-white shadow-[8px_8px_0px_0px_#000]">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#202020] font-bold">
              Our Partners
            </h2>
          </div>
        </div>

        <div className="relative w-full">
          <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/honey_capsule_left.png"
              alt="Honey Capsule Left"
              width={160}
              height={160}
              className="object-contain"
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/honey_capsule_right.png"
              alt="Honey Capsule Right"
              width={160}
              height={160}
              className="object-contain"
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4 md:gap-8 w-full max-w-[1200px] mx-auto">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#202020] rounded-xl border-2 border-white hover:scale-105 transition-transform flex items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden"
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

      {/* Footer 社交媒体部分 */}
      <div className="sm:w-full bg-[#FFCD4D] py-12 sm:py-16 relative -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="hidden lg:block absolute left-32 bottom-0">
          <Image
            src="/images/camel-bear.png"
            alt="Camel Bear"
            width={200}
            height={200}
            className="object-contain"
            sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 200px"
          />
        </div>
        <div className="hidden lg:block absolute right-32 bottom-0">
          <Image
            src="/images/bee-bear.png"
            alt="Bee Bear"
            width={200}
            height={200}
            className="object-contain"
            sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 200px"
          />
        </div>

        <div className="container sm:mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-8">
            <a
              onClick={() =>
                window.open("https://t.me/+tE1KgsD-GxJhOTg0", "_blank")
              }
              className="text-black hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM23.8667 10.9333L21.2 23.2C21.0133 24.0533 20.5067 24.2667 19.8 23.8667L15.8 20.9333L13.8667 22.8C13.6667 23 13.5 23.1667 13.1 23.1667L13.3667 19.1333L20.8 12.4C21.1333 12.1 20.7333 11.9333 20.3 12.2333L11.0667 18.0667L7.13333 16.8667C6.3 16.6133 6.28 16.0533 7.33333 15.6533L22.6 9.86667C23.3 9.61333 23.9333 10.0267 23.8667 10.9333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              onClick={() =>
                window.open("https://x.com/honeypotfinance", "_blank")
              }
              className="text-black hover:scale-110 transition-transform cursor-pointer"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM23.6667 12.0667C23.6667 12.2667 23.6667 12.4667 23.6667 12.6667C23.6667 17.8667 19.7333 23.8667 12.5333 23.8667C10.4 23.8667 8.4 23.2667 6.66667 22.2C6.93333 22.2667 7.26667 22.2667 7.53333 22.2667C9.33333 22.2667 11 21.6667 12.3333 20.6667C10.6667 20.6667 9.2 19.5333 8.73333 18C8.93333 18.0667 9.13333 18.0667 9.4 18.0667C9.73333 18.0667 10.0667 18 10.3333 17.9333C8.6 17.6 7.26667 16.0667 7.26667 14.2667C7.26667 14.2667 7.26667 14.2667 7.26667 14.2C7.8 14.4667 8.4 14.6667 9 14.6667C7.93333 13.9333 7.26667 12.7333 7.26667 11.4C7.26667 10.6667 7.46667 9.93333 7.8 9.33333C9.66667 11.6667 12.4 13.2 15.4667 13.3333C15.4 13.0667 15.3333 12.8 15.3333 12.5333C15.3333 10.4 17.0667 8.66667 19.2 8.66667C20.2667 8.66667 21.2667 9.13333 22 9.86667C22.8667 9.66667 23.6667 9.4 24.4 8.93333C24.1333 9.8 23.5333 10.6 22.7333 11.0667C23.5333 11 24.2667 10.8 25 10.4667C24.3333 11.2 23.0667 11.7333 23.6667 12.0667Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <p className="text-[#202020] text-base sm:text-lg">
            © Copyright 2025, All Rights Reserved by Honeypot
          </p>
        </div>
      </div>
    </div>
  );
}
