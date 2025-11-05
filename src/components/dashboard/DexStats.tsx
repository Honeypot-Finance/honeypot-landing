import React from 'react';
import { formatUSD } from '@/lib/subgraph';
import { StatCard } from './StatCard';

interface DexStatsProps {
  stats: {
    totalLiquidityUSD: number;
    positionCount: number;
    totalSwaps: number;
    totalVolumeUSD: number;
  } | null;
  statsLoading: boolean;
}

export const DexStats: React.FC<DexStatsProps> = ({ stats, statsLoading }) => {
  return (
    <div className="stats-grid">
      <StatCard
        label="Total Liquidity"
        value={formatUSD(stats?.totalLiquidityUSD || 0)}
        loading={statsLoading}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17L9 11L13 15L21 7"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2" />
          </svg>
        }
      />

      <StatCard
        label="Total Positions"
        value={stats?.positionCount || 0}
        loading={statsLoading}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 2C9 2 6 2 6 5V7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18V5C18 2 15 2 15 2H9Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        }
      />

      <StatCard
        label="Total Swaps"
        value={stats?.totalSwaps.toLocaleString() || 0}
        loading={statsLoading}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 16V4M7 4L3 8M7 4L11 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 8V20M17 20L21 16M17 20L13 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      <StatCard
        label="Total Volume"
        value={formatUSD(stats?.totalVolumeUSD || 0)}
        loading={statsLoading}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2V22M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14M12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14M12 14C10.3431 14 9 15.3431 9 17C9 18.6569 10.3431 20 12 20M12 14C13.6569 14 15 15.3431 15 17C15 18.6569 13.6569 20 12 20M12 20C10.3431 20 9 21.3431 9 23M12 20C13.6569 20 15 21.3431 15 23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        }
      />
    </div>
  );
};
