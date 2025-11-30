import { Suspense } from "react";
import { DexStatsSkeleton } from "./DexStatsSkeleton";

interface DexStatsData {
  users: number;
  chainCount: number;
  totalTrades: string;
  totalVolume: string;
}

const formatNumber = (num: number | string, isVolume?: boolean) => {
  if (typeof num === "string") {
    num = parseFloat(num);
  }

  const prefix = isVolume ? "$" : "";

  if (num >= 1000000) {
    return `${prefix}${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${prefix}${(num / 1000).toFixed(2)}K`;
  }
  return `${prefix}${num.toLocaleString()}`;
};

async function fetchDexStats(): Promise<DexStatsData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://honeypotfinance.xyz";
    const response = await fetch(`${baseUrl}/api/dex-stats`, {
      next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch DEX stats");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching DEX stats:", error);
    return null;
  }
}

async function DexStatsContent() {
  const stats = await fetchDexStats();

  if (!stats) {
    return null;
  }

  return (
    <div
      className="w-full animate-fade-in-up"
      style={{
        animationDelay: "1.2s",
        animationFillMode: "forwards",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[700px] mx-auto">
        {/* Users */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
            Users
          </div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.users)}
          </div>
        </div>

        {/* Total Trades */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
            Total Trades
          </div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.totalTrades)}
          </div>
        </div>

        {/* Total Volume */}
        <div className="bg-[#202020] rounded-xl p-4 sm:p-6 text-center border-2 border-white">
          <div className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
            Total Volume
          </div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {formatNumber(stats.totalVolume, true)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DexStatsServer() {
  return (
    <Suspense fallback={<DexStatsSkeleton />}>
      <DexStatsContent />
    </Suspense>
  );
}
