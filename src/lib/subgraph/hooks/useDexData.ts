/**
 * React Hooks for DEX Data
 *
 * Custom hooks for fetching and managing DEX data in React components.
 */

'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import type { ChainId } from '@/config/chains';
import {
  getUserPositionsAllChains,
  getUserStats,
  getTopPoolsAllChains,
  getPoolsGroupedByPair,
  getPoolById,
  getUserPositionsByChain,
  getUserVaultSharesAllChains,
} from '../queries/dex';
import type {
  LiquidityPositionWithChain,
  UserStats,
  PoolInfoWithChain,
  PoolInfo,
  LiquidityPosition,
  VaultShareWithChain,
} from '../queries/dex';

// ============================================================================
// Generic Data Fetching Hook
// ============================================================================

interface UseDataOptions {
  enabled?: boolean;
}

function useData<T>(
  fetcher: () => Promise<T>,
  deps: any[],
  options: UseDataOptions = {}
) {
  const { enabled = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const result = await fetcher();
      setData(result);
    } catch (err) {
      console.error('Data fetch error:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [enabled, ...deps]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}

// ============================================================================
// DEX-Specific Hooks
// ============================================================================

/**
 * Hook for fetching user's liquidity positions across all chains
 *
 * @returns User's liquidity positions with loading state
 *
 * @example
 * ```tsx
 * function UserPositions() {
 *   const { data: positions, isLoading, error } = useUserPositions();
 *
 *   if (isLoading) return <Loading />;
 *   if (error) return <Error message={error.message} />;
 *
 *   return (
 *     <div>
 *       {positions?.map(pos => (
 *         <div key={`${pos.chainId}-${pos.poolId}`}>
 *           {pos.token0Symbol}/{pos.token1Symbol} on {pos.chainName}
 *           - ${pos.liquidityUSD}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useUserPositions() {
  const { address, isConnected } = useAccount();

  return useData<LiquidityPositionWithChain[]>(
    async () => {
      if (!address) return [];
      return getUserPositionsAllChains(address);
    },
    [address],
    {
      enabled: isConnected && !!address,
    }
  );
}

/**
 * Hook for fetching user's aggregated stats
 *
 * @returns User's aggregated statistics
 *
 * @example
 * ```tsx
 * function StatsOverview() {
 *   const { data: stats, isLoading } = useUserStats();
 *
 *   if (isLoading) return <Loading />;
 *
 *   return (
 *     <div>
 *       <h3>Total Liquidity: ${stats?.totalLiquidityUSD.toFixed(2)}</h3>
 *       <h4>By Chain:</h4>
 *       {stats?.chainBreakdown.map(chain => (
 *         <div key={chain.chainId}>
 *           {chain.chainName}: ${chain.liquidityUSD.toFixed(2)}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useUserStats() {
  const { address, isConnected } = useAccount();

  return useData<UserStats>(
    async () => {
      if (!address) {
        return {
          totalLiquidityUSD: 0,
          positionCount: 0,
          totalSwaps: 0,
          totalVolumeUSD: 0,
          chainBreakdown: [],
        };
      }
      return getUserStats(address);
    },
    [address],
    {
      enabled: isConnected && !!address,
    }
  );
}

/**
 * Hook for fetching top pools across all chains
 *
 * @param limit - Number of pools to fetch (default: 10)
 * @returns Top pools with loading state
 */
export function useTopPools(limit: number = 10) {
  return useData<PoolInfoWithChain[]>(
    () => getTopPoolsAllChains(limit),
    [limit],
    {
      enabled: true,
    }
  );
}

/**
 * Hook for fetching pools grouped by pair
 *
 * @param limit - Number of pools to fetch (default: 20)
 * @returns Pools grouped by pair with loading state
 *
 * @example
 * ```tsx
 * function CrossChainPools() {
 *   const { data: poolGroups, isLoading } = usePoolsGroupedByPair(10);
 *
 *   if (isLoading) return <Loading />;
 *
 *   return (
 *     <div>
 *       {poolGroups?.map(({ pair, pools }) => (
 *         <div key={pair}>
 *           <h3>{pair}</h3>
 *           {pools.map(pool => (
 *             <div key={`${pool.chainId}-${pool.id}`}>
 *               {pool.chainName}: ${pool.totalValueLockedUSD}
 *             </div>
 *           ))}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function usePoolsGroupedByPair(limit: number = 20) {
  return useData(
    async () => {
      const grouped = await getPoolsGroupedByPair(limit);
      // Convert Map to array for easier rendering
      return Array.from(grouped.entries()).map(([pair, pools]) => ({
        pair,
        pools,
        totalTVL: pools.reduce(
          (sum, pool) => sum + parseFloat(pool.totalValueLockedUSD),
          0
        ),
      }));
    },
    [limit],
    {
      enabled: true,
    }
  );
}

/**
 * Hook for fetching specific pool information
 *
 * @param chainId - Chain ID
 * @param poolId - Pool contract address
 * @returns Pool information with loading state
 */
export function usePool(
  chainId: ChainId | null,
  poolId: string | null
) {
  return useData<PoolInfo | null>(
    async () => {
      if (!chainId || !poolId) return null;
      return getPoolById(chainId, poolId);
    },
    [chainId, poolId],
    {
      enabled: !!chainId && !!poolId,
    }
  );
}

/**
 * Hook for fetching user positions on a specific chain
 *
 * @param chainId - Chain ID
 * @returns User's positions on the specified chain
 */
export function useUserPositionsByChain(chainId: ChainId | null) {
  const { address, isConnected } = useAccount();

  return useData<LiquidityPosition[]>(
    async () => {
      if (!address || !chainId) return [];
      return getUserPositionsByChain(chainId, address);
    },
    [address, chainId],
    {
      enabled: isConnected && !!address && !!chainId,
    }
  );
}

/**
 * Hook for fetching user's vault shares across all chains
 *
 * @returns User's vault shares with loading state
 *
 * @example
 * ```tsx
 * function UserVaults() {
 *   const { data: vaultShares, isLoading, error } = useUserVaultShares();
 *
 *   if (isLoading) return <Loading />;
 *   if (error) return <Error message={error.message} />;
 *
 *   return (
 *     <div>
 *       {vaultShares?.map(share => (
 *         <div key={share.id}>
 *           {share.tokenASymbol}/{share.tokenBSymbol} on {share.chainName}
 *           - Balance: {share.vaultShareBalance}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useUserVaultShares() {
  const { address, isConnected } = useAccount();

  return useData<VaultShareWithChain[]>(
    async () => {
      if (!address) return [];
      return getUserVaultSharesAllChains(address);
    },
    [address],
    {
      enabled: isConnected && !!address,
    }
  );
}
