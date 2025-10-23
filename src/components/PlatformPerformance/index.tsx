"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DexStatsData {
  users: number;
  chainCount: number;
  totalTrades: string;
  totalVolume: string;
}

const PlatformPerformance = () => {
  const [stats, setStats] = useState<DexStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDexStats = async () => {
      try {
        setLoading(true);

        // Fetch from our proxy API route to avoid CORS issues
        const response = await fetch("/api/dex-stats");

        if (!response.ok) {
          throw new Error("Failed to fetch DEX stats");
        }

        const data = await response.json();

        setStats({
          users: data.users,
          chainCount: data.chainCount,
          totalTrades: data.totalTrades,
          totalVolume: data.totalVolume,
        });
      } catch (err) {
        console.error("Error fetching DEX stats:", err);
        setError("Failed to load DEX statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchDexStats();
  }, []);

  const formatNumber = (num: number | string, prefix?: string) => {
    if (typeof num === 'string') {
      num = parseFloat(num);
    }

    const pre = prefix || '';

    if (num >= 1000000) {
      return `${pre}${(num / 1000000).toFixed(1)}M+`;
    } else if (num >= 1000) {
      return `${pre}${(num / 1000).toFixed(1)}K+`;
    }
    return `${pre}${num.toLocaleString()}`;
  };

  if (error || !stats) {
    // Show placeholder values if there's an error
    return (
      <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 sm:mb-16 font-poppins font-bold">
          Platform Performance
        </h1>

        <div className="scroll-animate bg-[#1a1a1a] rounded-[24px] sm:rounded-[32px] relative w-full overflow-hidden border-2 border-gray-700">
          <div className="relative">
            <div className="p-8 sm:p-12 lg:max-w-[60%]">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold font-poppins">
                    <span className="border-b-2 border-gray-600">
                      DEX++ Multichain
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold font-poppins">
                    Key Metrics
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-base sm:text-xl md:text-2xl text-gray-300">
                      Loading stats...
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
    );
  }

  return (
    <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto flex flex-col items-center z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 sm:mb-16 font-poppins font-bold">
        Platform Performance
      </h1>

      <div className="scroll-animate bg-[#1a1a1a] rounded-[24px] sm:rounded-[32px] relative w-full overflow-hidden border-2 border-gray-700">
        <div className="relative">
          <div className="p-8 sm:p-12 lg:max-w-[60%]">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold font-poppins">
                  <span className="border-b-2 border-gray-600">
                    DEX++ on {stats.chainCount} {stats.chainCount === 1 ? 'Chain' : 'Chains'}
                  </span>
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold font-poppins">
                  Key Metrics
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
                    <p className="text-base sm:text-xl md:text-2xl text-gray-300">
                      {formatNumber(stats.totalVolume, '$')} Total Volume
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
                    <p className="text-base sm:text-xl md:text-2xl text-gray-300">
                      {formatNumber(stats.users)} Active Users
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
                    <p className="text-base sm:text-xl md:text-2xl text-gray-300">
                      {formatNumber(stats.totalTrades)} Trades Executed
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
  );
};

export default PlatformPerformance;
