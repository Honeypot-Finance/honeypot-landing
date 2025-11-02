"use client";

import { useEffect, useState } from "react";

interface DexStatsData {
  users: number;
  chainCount: number;
  totalTrades: string;
  totalVolume: string;
}

const PlatformPerformance = () => {
  const [stats, setStats] = useState<DexStatsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDexStats = async () => {
      try {
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
      }
    };

    fetchDexStats();
  }, []);

  const formatNumber = (num: number | string, prefix?: string) => {
    if (typeof num === "string") {
      num = parseFloat(num);
    }

    const pre = prefix || "";

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
      <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto">
        <div className="p-8 sm:p-12">
          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Live Data Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm sm:text-base font-medium">
                Live data
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins leading-tight">
              Battle tested
              <br />
              infrastructure
            </h2>

            {/* Loading State */}
            <div className="text-base sm:text-xl text-gray-400">
              Loading stats...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto">
      <div className="p-8 sm:p-12">
          <div className="flex flex-col gap-8 sm:gap-12">
            {/* Live Data Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm sm:text-base font-medium">
                Live data
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-poppins leading-tight">
              Battle tested
              <br />
              infrastructure
            </h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
              {/* Total Volume */}
              <div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #FCD729 0%, #F7931A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {formatNumber(stats.totalVolume, "$")}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  Total Volume
                </div>
                <p className="text-sm text-gray-400">
                  Honeypot Finance has facilitated millions of dollars of
                  transaction volume
                </p>
              </div>

              {/* Active Users */}
              <div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #FCD729 0%, #F7931A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {formatNumber(stats.users)}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  Active Users
                </div>
                <p className="text-sm text-gray-400">
                  Honeypot Finance has facilitated millions of dollars of
                  transaction volume
                </p>
              </div>

              {/* Trades Executed */}
              <div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #FCD729 0%, #F7931A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {formatNumber(stats.totalTrades)}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  Trades Executed
                </div>
                <p className="text-sm text-gray-400">
                  Honeypot Finance has facilitated millions of dollars of
                  transaction volume
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PlatformPerformance;
