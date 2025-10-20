"use client";

import { useEffect, useState } from "react";

interface DexStatsData {
  users: number;
  chainCount: number;
  totalTrades: string;
  totalVolume: string;
}

const DexStats = () => {
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

        console.log("DEX Stats Response:", data);

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

  const formatNumber = (num: number | string, isVolume?: boolean) => {
    if (typeof num === 'string') {
      num = parseFloat(num);
    }

    const prefix = isVolume ? '$' : '';

    if (num >= 1000000) {
      return `${prefix}${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `${prefix}${(num / 1000).toFixed(2)}K`;
    }
    return `${prefix}${num.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="w-full" style={{
        opacity: 0,
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: "1.2s",
      }}>
        <div className="text-center text-[#282121] text-sm">Loading stats...</div>
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  return (
    <div
      className="w-full"
      style={{
        opacity: 0,
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: "1.2s",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[700px] mx-auto">
        {/* Users */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Users</div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.users)}
          </div>
        </div>

        {/* Total Trades */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Total Trades</div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.totalTrades)}
          </div>
        </div>

        {/* Total Volume */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Total Volume</div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.totalVolume, true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexStats;
