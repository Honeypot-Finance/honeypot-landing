"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import { partners, investors } from "@/data/partners";
import { useEffect, useState } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaMedium } from "react-icons/fa6";

//images
import forMemeProjectImage from "@/assets/home-page/for-meme-project.png";
import forMemeLpImage from "@/assets/home-page/for-meme-lp.png";
import lightBgEffectImage from "@/assets/effectItems/light-bg-effect.png";
import autoCompoundImage from "@/assets/home-page/auto-compounding.png";
import earnFromDayOneImage from "@/assets/home-page/earn-from-day-one.png";
import instantLp from "@/assets/home-page/instant-lp.png";
import coLaunchFjordImage from "@/assets/home-page/co-launch-fjord.png";
import coListingAdvImage from "@/assets/home-page/co-listing-adv.png";
import oneSmartContractImage from "@/assets/home-page/one-smart-contract.png";
import footerCloud from "@/assets/footer-cloud.png";

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
        const speed = parseFloat(element.getAttribute("data-speed") || "0.3");
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
    <div className="min-h-screen bg-[#80BFE5] font-gliker relative overflow-hidden flex flex-col items-center w-full sm:px-0">
      {/* Navbar with drop animation */}
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-20 w-[calc(100%-2rem)] fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="drop-animate [filter:drop-shadow(0_0_10px_rgba(0,0,0,0.6))_drop-shadow(0_0_15px_rgba(255,205,77,0.15))_drop-shadow(0_0_20px_rgba(0,0,0,0.4))] flex justify-center items-center">
          <Navbar menuList={appPathsList} />
        </div>
      </div>

      <div className="flex flex-col items-center w-full relative drop-animate drop-delay-2 mt-[10rem] sm:mt-[12rem]">
        <div
          className="scroll-animate absolute left-0 -top-[12rem] parallax opacity-0 hidden lg:block"
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
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[48px] text-center text-black lg:!leading-[3.5rem] mb-2 sm:mb-5">
              Dex++ for the Next-Generation of On-Chain Finance
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-center opacity-90 mb-3 sm:mb-10 max-w-[674px] text-[#373737]">
              Redefining on-chain finance with behavior-driven incentives,
              programmable assets and pro tools for seamless cross-chain
              liquidity creation and flow.
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
                Launch Memes
              </button>
              <button
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm"
                onClick={() => {
                  window.open(
                    "https://wasabee.honeypotfinance.xyz/swap",
                    "_blank"
                  );
                }}
              >
                Trade Tokens
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
          <div className="scale-x-[-1] absolute left-48 top-60 hidden lg:block">
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
              <div className="relative">
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: 0.1,
                  }}
                ></div>
                <Image
                  src="/images/lying-bear.svg"
                  alt="lying bear"
                  width={600}
                  height={300}
                  className="w-[120px] sm:w-[240px] md:w-[400px] lg:w-[600px] mx-auto sm:mr-20 md:mr-40"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 240px, (max-width: 1024px) 400px, 600px"
                  priority
                />
              </div>
            </div>
            <div
              className="w-full bg-[#271A0C] rounded-t-[50%]"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease forwards",
                animationDelay: "1.8s",
              }}
            >
              <Image
                src="/images/border.svg"
                alt="border"
                width={1512}
                height={182}
                className="w-full object-cover -mt-2 lg:-mt-6 h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#271A0C] flex flex-col items-center gap-y-8 sm:gap-y-12 md:gap-y-20 lg:gap-y-32 w-full px-4">
        {/* Transform memecoins Section */}
        <div className="scroll-animate relative w-full max-w-[1200px] mx-4 sm:mx-auto my-8 flex flex-col items-center justify-center">
          {/* Main content */}
          <div className="relative bg-[#271A0C] rounded-[32px] w-full py-16 flex flex-col items-center justify-center shadow-lg">
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFCD4D] text-center drop-shadow-[0_2px_0_#B97A1A] px-2"
              style={{
                textShadow:
                  "0 2px 0 #B97A1A, 0 4px 12px rgba(0,0,0,0.25), 0 0px 2px #fff",
              }}
            >
              Transform memecoins into
              <br />
              sustainable assets with continuous
              <br />
              rewards for everyone!
            </h1>
          </div>
        </div>

        {/* Pot2Pump Section */}
        <div className="scroll-animate relative px-4 sm:px-20 pt-12 sm:pt-16 bg-[#633803] rounded-[32px] w-full max-w-[1200px] mx-4 sm:mx-auto bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top]">
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
                    src={"/images/honey-box.png"}
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          Why Pot2pump?
        </h2>
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
                    src={lightBgEffectImage}
                    alt="Light Effect"
                    width={512}
                    height={512}
                    className="object-contain absolute top-0 left-0 w-full h-full"
                  />
                  <Image
                    src={forMemeProjectImage}
                    alt="for meme project"
                    width={512}
                    height={512}
                    className="object-contain z-10"
                  />
                </div>

                <div className="flex flex-col gap-4">
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
                <div className="w-[400px] h-[350px] flex justify-center items-center">
                  <Image
                    src={lightBgEffectImage}
                    alt="Light Effect"
                    width={512}
                    height={512}
                    className="object-contain absolute top-0 left-0 w-full h-full"
                  />
                  <Image
                    src={forMemeLpImage}
                    alt="Gold Horse Icon"
                    width={512}
                    height={512}
                    className="object-contain z-10 w-full h-full"
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
            <button
              className="w-full sm:w-fit mt-8 px-8 py-4 bg-[#010101] text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm border border-white shadow-[2px_2px_8px_0px_rgba(22,18,8,0.50)]"
              onClick={() => {
                window.open(
                  "https://pot2pump.honeypotfinance.xyz/launch-token",
                  "_blank"
                );
              }}
            >
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
        <div className="scroll-animate flex flex-col items-center gap-8 sm:gap-16 w-full max-w-[1200px] mx-4 sm:mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
            FTO (Fair Token Offering)
          </h1>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-4 sm:gap-8">
            {/* First Card - Instant Deep liquidity */}
            <div
              className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
              style={{
                background:
                  "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
              }}
            >
              <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center p-5">
                  <Image
                    src={instantLp}
                    alt="Deep Liquidity"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-base sm:text-xl text-white mb-2 sm:mb-4">
                  Instant Deep liquidity
                </h2>
                <p className="text-sm sm:text-lg text-white text-center">
                  Start trading immediately with 100% liquidity
                </p>
              </div>
            </div>

            {/* Second Card - Earn from Day One */}
            <div
              className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
              style={{
                background:
                  "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
              }}
            >
              <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center p-5">
                  <Image
                    src={earnFromDayOneImage}
                    alt="Money"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-base sm:text-xl text-white mb-2 sm:mb-4">
                  Earn from Day One
                </h2>
                <p className="text-sm sm:text-lg text-white text-center">
                  Passive income through transaction fees and partner yields
                </p>
              </div>
            </div>

            {/* Third Card - Auto-Compunding Rewards */}
            <div
              className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
              style={{
                background:
                  "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
              }}
            >
              <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center p-5">
                  <Image
                    src={autoCompoundImage}
                    alt="Reward"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-base sm:text-xl text-white mb-2 sm:mb-4">
                  Auto-Compunding Rewards
                </h2>
                <p className="text-sm sm:text-lg text-white text-center">
                  Continuous rewards for token holders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Launch Program Section */}
        <div className="scroll-animate flex flex-col items-center gap-8 sm:gap-16 w-full max-w-[1200px] mx-4 sm:mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
            Co-Launch Program
          </h1>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-4 sm:gap-8">
            {/* Card 1 - Co-Launch with Fjord Foundry */}
            <div
              className="scroll-animate flex-1 rounded-[32px] p-4 sm:p-10"
              style={{
                background:
                  "linear-gradient(179deg, rgba(32, 32, 32, 0.00) 0.7%, rgba(32, 32, 32, 0.00) 17.94%, #FFCD4D 99.3%)",
              }}
            >
              <div className="relative bg-[#202020] rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center">
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center">
                  <Image
                    src={coLaunchFjordImage}
                    alt="Rocket"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg sm:text-xl text-white mb-2 sm:mb-4 text-center">
                  Co-Launch with Fjord Foundry
                </h2>
                <p className="text-base sm:text-lg text-white text-center">
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
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center">
                  <Image
                    src={coListingAdvImage}
                    alt="Listing"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg sm:text-xl text-white mb-2 sm:mb-4 text-center">
                  Co-Listing Advantage
                </h2>
                <p className="text-base sm:text-lg text-white text-center">
                  Curated and co-listed on both Honeypot and Fjord for maximum
                  exposure
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
                <div className="w-[160px] sm:w-[200px] h-32 sm:h-40 flex justify-center items-center">
                  <Image
                    src={oneSmartContractImage}
                    alt="Smart Contract"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-lg sm:text-xl text-white mb-2 sm:mb-4 text-center">
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
        <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 sm:mb-16">
            Success Stories
          </h1>

          <div className="scroll-animate bg-[#FFCD4D] rounded-[24px] sm:rounded-[32px] relative w-full overflow-hidden bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top] border-2 border-white">
            <div className="relative">
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
        <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center mt-16 z-10">
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

          <div className="w-full bg-[#FFCD4D] rounded-[32px] relative bg-[url('/images/honey-border.png')] bg-repeat-x bg-[length:auto_40px] bg-[position:-30px_top] sm:pb-8">
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
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm sm:text-base md:text-lg border border-white z-10"
                        onClick={() => {
                          window.open(
                            "https://marketplace.kingdomly.app/collection/berachain/0xc3c30fba6387cff83474e684380930dfc64554ef",
                            "_blank"
                          );
                        }}
                      >
                        Buy from Kingdomly
                      </button>

                      <button
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm sm:text-base md:text-lg border border-white z-10"
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
                        className="w-full px-8 sm:px-4 py-2 sm:py-3 md:py-4 bg-black text-white rounded-xl hover:bg-opacity-90 transition-all font-bold text-sm sm:text-base md:text-lg border border-white z-10"
                        onClick={() => {
                          window.open(
                            "https://bridge.kingdomly.app/",
                            "_blank"
                          );
                        }}
                      >
                        Bridge to Berachain
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="scroll-animate flex flex-col items-center w-full px-4 sm:px-0 pt-16">
        {/* Blue ball */}
        <div className="bg-[#80BFE5] w-full aspect-square rounded-full absolute top-0 left-0 -translate-y-1/2 z-[-10]" />
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

          <div className="bg-[#FFCD4D] rounded-xl px-8 sm:px-12 py-3 sm:py-4 border-4 border-white shadow-[8px_8px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#202020] font-bold">
              Backed By
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
              className="object-contain floating"
              data-speed="0.5"
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/honey_capsule_right.png"
              alt="Honey Capsule Right"
              width={160}
              height={160}
              className="object-contain floating"
              data-speed="0.5"
              sizes="(max-width: 768px) 120px, 160px"
            />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4 md:gap-8 w-full max-w-[1200px] mx-auto">
            {[...investors].map((partner, index) => (
              <a
                key={index}
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-animate bg-[#202020] rounded-xl border-2 border-white hover:scale-105 transition-transform flex items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden"
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
            <div className="bg-[#FFCD4D] rounded-xl px-8 sm:px-12 py-3 sm:py-4 border-4 border-white shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#202020] font-bold">
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
                className="scroll-animate bg-[#202020] rounded-xl border-2 border-white hover:scale-105 transition-transform flex items-center justify-center w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden"
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

      {/* Footer Section */}
      <footer className="w-full bg-[#80BFE5] flex flex-col items-center pt-12 pb-0 relative">
        <div className="flex flex-col items-center gap-6 pb-[100px]">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/honeypot-logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="font-bold text-xl text-black">
              HONEYPOT FINANCE
            </span>
          </div>
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-black font-medium text-lg">
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
              href="https://www.okx.com/web3/marketplace/nft/collection/arbi/honeygenesis-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              HoneyGenesis
            </a>
            <a
              href="https://pot2pump.honeypotfinance.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pot2Pump
            </a>
            <a
              href="https://wasabee.honeypotfinance.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pot-Wasabee Dex
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://t.me/+tE1KgsD-GxJhOTg0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-3 flex items-center justify-center shadow hover:scale-110 transition"
            >
              <BsTelegram className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://x.com/honeypotfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-3 flex items-center justify-center shadow hover:scale-110 transition"
            >
              <FaXTwitter className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://discord.com/invite/honeypotfi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-3 flex items-center justify-center shadow hover:scale-110 transition"
            >
              <FaDiscord className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://medium.com/@HoneypotFinance1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-3 flex items-center justify-center shadow hover:scale-110 transition"
            >
              <FaMedium className="w-6 h-6 text-black" />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-black text-sm mt-2 mb-4 text-center">
            © Copyright 2025, All Rights Reserved by Honeypot
          </div>
        </div>
        {/* Cloud border at the bottom */}
        <div className="w-full absolute left-0 bottom-0 pointer-events-none">
          <Image
            src={footerCloud}
            alt="Footer Cloud"
            width={1920}
            height={200}
            className="w-full"
          />
        </div>
      </footer>
    </div>
  );
}
