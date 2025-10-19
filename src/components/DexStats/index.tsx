"use client";

import { useEffect, useState } from "react";

interface DexStatsData {
  users: number;
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

        // GraphQL endpoint for Berachain mainnet algebra_info
        const GRAPHQL_ENDPOINT = "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/hpot-algebra-core/2.4.0/gn";

        // Fetch total users
        const usersQuery = `
          query DexAccountCount {
            factories {
              accountCount
            }
          }
        `;

        // Fetch leaderboard stats (total trades and volume)
        const leaderboardQuery = `
          query LeaderboardStatus {
            factories {
              txCount
              untrackedVolumeUSD
            }
          }
        `;

        const [usersResponse, leaderboardResponse] = await Promise.all([
          fetch(GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: usersQuery }),
          }),
          fetch(GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: leaderboardQuery }),
          }),
        ]);

        const usersData = await usersResponse.json();
        const leaderboardData = await leaderboardResponse.json();

        if (usersData.errors || leaderboardData.errors) {
          throw new Error("GraphQL query failed");
        }

        const users = usersData.data?.factories[0]?.accountCount || 0;
        const totalTrades = leaderboardData.data?.factories[0]?.txCount || "0";
        const totalVolume = leaderboardData.data?.factories[0]?.untrackedVolumeUSD || "0";

        setStats({
          users,
          totalTrades,
          totalVolume,
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
