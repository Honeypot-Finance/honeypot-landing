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
        const xPos = scrolled * speed;
        element.style.setProperty(
          "transform",
          `translateX(${xPos}px)`,
          "important"
        );
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
            transform: "translateX(-40px)",
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
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[56px] text-center text-black lg:!leading-[3.5rem] mb-2 sm:mb-5">
              The Ultimate Token Launch Platform on Berachain
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center opacity-90 mb-3 sm:mb-10 max-w-[674px] text-[#373737]">
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
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm"
              >
                Launch Memes on Pot2Pump
              </button>
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm">
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
            className="absolute -right-10 -bottom-28 floating hidden lg:block"
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
          <div className="absolute right-20 -top-10 hidden lg:block">
            <Image
              src="/images/coin.png"
              alt="coin"
              width={80}
              height={80}
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
                animationDelay: "1.6s",
                animation: "slideInFromLeft 1s ease forwards",
              }}
            >
              <div className="w-[400px] relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(43.44% 43.44% at 50.09% 49.91%, #FFCD4D 0%, rgba(54, 54, 55, 0.00) 100%, #363636 100%)",
                    opacity: 0.1,
                  }}
                ></div>
                <Image
                  src="/images/lying_bear.png"
                  alt="lying bear"
                  width={600}
                  height={300}
                  className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] mr-0 sm:mr-20 md:mr-40"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                />
              </div>
            </div>
            <div
              className="sm:w-full -mx-4 sm:mx-0"
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
      <div className="scroll-animate relative px-4 sm:px-12 md:px-20 pt-12 pb-16 sm:py-12 md:py-20 bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto bg-[url('/images/honey-border.png'),url('/images/gift-mobile.png')] sm:bg-[url('/images/honey-border.png'),url('/images/gift.png')] bg-[length:auto_40px,240px_auto] sm:bg-[length:auto_40px,400px_auto] [background-repeat:repeat-x,no-repeat] bg-[position:-30px_top,center_bottom] sm:bg-[position:-30px_top,right_bottom]">
        <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl text-[#373737] leading-tight text-center sm:text-left w-full sm:max-w-[70%]">
          Transform memecoins into
          <br /> sustainable assets with
          <br /> continuous rewards for everyone
        </h1>
      </div>

      {/* Pot2Pump Section */}
      <div className="scroll-animate relative px-4 sm:px-20 pt-12 sm:pt-16 bg-[#252424] rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-[500px]">
            <h1 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 sm:mb-8">
              Pot2Pump
            </h1>
            <div className="space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/honey-box.png"
                  alt="honey box"
                  width={20}
                  height={20}
                />
                <p className="text-sm sm:text-xl text-white">
                  Berachain-native liquidity management.
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/honey-box.png"
                  alt="honey box"
                  width={20}
                  height={20}
                  sizes="(max-width: 640px) 16px, 20px"
                />
                <p className="text-sm sm:text-xl text-white">
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
              className="w-full sm:w-fit mt-8 border border-white px-8 py-4 bg-[#FFCD4D] text-black rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm"
            >
              Meme Launch
            </button>
          </div>

          <div className="relative w-[200px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
            <Image
              src="/images/honey_jar.png"
              alt="Honey Jar"
              width={400}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why Pot2Pump Cards */}
      <div className="scroll-animate flex flex-col lg:flex-row justify-between gap-8 w-full max-w-[1200px] mx-4 sm:mx-auto">
        {/* Card 1 */}
        <div
          className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
          style={{
            background:
              "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
          }}
        >
          <div className="relative bg-[#202020] rounded-2xl p-8 sm:p-12 h-full">
            <div className="flex flex-col items-center">
              <div className="w-[400px] h-[350px] flex justify-center items-center">
                <Image
                  src="/images/light.png"
                  alt="Light Icon"
                  width={400}
                  height={400}
                  className="object-contain"
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
                    />
                    <p className="text-sm sm:text-xl text-white">
                      Instant revenue through LP fees
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
                      Up to 100% revenue sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
          style={{
            background:
              "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
          }}
        >
          <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-12 h-full">
            <div className="flex flex-col items-center">
              <div className="w-[400px]">
                <Image
                  src="/images/horse.png"
                  alt="Gold Horse Icon"
                  width={400}
                  height={400}
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
        <div className="max-w-[500px] sm:pl-20 py-4 sm:py-10">
          <h1 className="text-center sm:text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#282121] font-bold mb-6 sm:mb-8">
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
          <button className="w-full sm:w-fit mt-8 px-8 py-4 bg-[#010101] text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm border border-white shadow-[2px_2px_8px_0px_rgba(22,18,8,0.50)]">
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
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-white text-center">
          FTO (Fair Token Offering)
        </h1>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          {/* 第一个卡片 - Instant Deep liquidity */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/liquidity.png"
                  alt="Deep Liquidity"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-white mb-3 sm:mb-4">
                Instant Deep liquidity
              </h2>
              <p className="text-lg text-white text-center">
                Start trading immediately with 100% liquidity
              </p>
            </div>
          </div>

          {/* 第二个卡片 - Earn from Day One */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/money.png"
                  alt="Money"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-white mb-3 sm:mb-4">
                Earn from Day One
              </h2>
              <p className="text-lg text-white text-center">
                Passive income through transaction fees and partner yields
              </p>
            </div>
          </div>

          {/* 第三个卡片 - Auto-Compunding Rewards */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/reward.png"
                  alt="Reward"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-center text-white mb-3 sm:mb-4">
                Auto-Compunding Rewards
              </h2>
              <p className="text-base sm:text-lg text-white text-center">
                Continuous rewards for token holders
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Launch Program Section */}
      <div className="scroll-animate flex flex-col items-center gap-16 w-full max-w-[1200px] mx-4 sm:mx-auto">
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-white text-center">
          Co-Launch Program
        </h1>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          {/* Card 1 - Co-Launch with Fjord Foundry */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/rocket.png"
                  alt="Rocket"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-white mb-3 sm:mb-4 text-center">
                Co-Launch with Fjord Foundry
              </h2>
              <p className="text-lg text-white text-center">
                Multiple sale types (LBP or Fixed Price Model)
              </p>
            </div>
          </div>

          {/* Card 2 - Co-Listing Advantage */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/note.png"
                  alt="Listing"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-white mb-3 sm:mb-4 text-center">
                Co-Listing Advantage
              </h2>
              <p className="text-lg text-white text-center">
                Curated and co-listed on both Honeypot and Fjord for maximum exposure
              </p>
            </div>
          </div>

          {/* Card 3 - One Smart Contract */}
          <div
            className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
            style={{
              background:
                "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
            }}
          >
            <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
              <div className="w-[200px] h-40 flex justify-center items-center">
                <Image
                  src="/images/quantum-hub.png"
                  alt="Smart Contract"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl text-center text-white mb-3 sm:mb-4">
                One Smart Contract, Two Frontends, Two Huge Communities
              </h2>
              <p className="text-base sm:text-lg text-white text-center">
                Get all the support you need for a successful raise
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-white text-center mb-16">
          Success Stories
        </h1>

        {/* Card */}
        <div className="scroll-animate bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] relative w-full overflow-hidden bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top] border-2 border-white">
          <div className="relative">
            {/* 左侧内容 */}
            <div className="p-8 sm:p-12 lg:max-w-[60%]">
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

            {/* 右侧图片 - 贴右下角 */}
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <Image
                src="/images/cool-bear.png"
                alt="Cool Bear"
                width={400}
                height={400}
                className="w-[400px] h-auto object-contain"
                sizes="400px"
              />
            </div>

            {/* 移动端图片 - 居中显示 */}
            <div className="flex justify-center lg:hidden">
              <Image
                src="/images/cool-bear.png"
                alt="Cool Bear"
                width={400}
                height={400}
                className="w-[240px] sm:w-[300px] md:w-[350px] h-auto object-contain"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 350px"
              />
            </div>
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
          <div className="absolute -top-6 sm:-top-24 left-1/2 transform -translate-x-1/2">
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
            <div className="px-4 pt-12 sm:px-8 md:px-12 space-y-4 sm:space-y-6 flex items-center">
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

                <div className="flex flex-col items-center w-full">
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

                  <button className="w-full sm:w-fit px-8 sm:px-12 md:px-16 py-2 sm:py-3 md:py-4 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm sm:text-base md:text-lg border border-white z-10">
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
      <div className="bg-[#FFCD4D] w-[calc(100%+32px)] sm:w-full">
        <div className="container mx-auto flex flex-col items-center gap-8 py-12 sm:py-16">
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
                  d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM20.8667 9H23.4L17.8667 15.4L24.3333 24H19.2L15.1333 18.6667L10.4667 24H7.93333L13.8667 17.2667L7.66667 9H12.9333L16.6 13.9333L20.8667 9ZM19.9333 22.4667H21.3333L12.1333 10.4667H10.6L19.9333 22.4667Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <p className="text-[#202020] text-xs sm:text-lg">
            © Copyright 2025, All Rights Reserved by Honeypot
          </p>
        </div>
      </div>
    </div>
  );
}
