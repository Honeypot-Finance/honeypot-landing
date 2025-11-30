import { Suspense } from "react";
import { PlatformPerformanceSkeleton } from "./PlatformPerformanceSkeleton";

interface DexStatsData {
  users: number;
  chainCount: number;
  totalTrades: string;
  totalVolume: string;
}

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

async function PlatformPerformanceContent() {
  const stats = await fetchDexStats();

  if (!stats) {
    return <PlatformPerformanceSkeleton />;
  }

  return (
    <div className="scroll-animate w-full max-w-[1200px] mx-4 sm:mx-auto">
      <div className="p-8 sm:p-12">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Live Data Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
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
                  backgroundImage:
                    "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
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
                  backgroundImage:
                    "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
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
                  backgroundImage:
                    "linear-gradient(180deg, #FCD729 0%, #F7931A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
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
}

export default function PlatformPerformanceServer() {
  return (
    <Suspense fallback={<PlatformPerformanceSkeleton />}>
      <PlatformPerformanceContent />
    </Suspense>
  );
}
