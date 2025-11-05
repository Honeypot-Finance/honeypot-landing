/**
 * DEX-related Subgraph Queries
 *
 * Queries for fetching DEX data including liquidity positions, pools,
 * and trading statistics across multiple chains.
 */

import { queryMultiChain } from '../client';
import type { ChainId } from '@/config/chains';
import { getTokenInfo } from '@/config/chains';
import {
  aggregateMultiChainData,
  sortByValue,
  groupByKey,
} from '../utils';
import { getChainsForSubgraph } from '@/config/subgraphEndpoints';

// ============================================================================
// Type Definitions
// ============================================================================

export interface LiquidityPosition {
  poolId: string;
  token0Symbol: string;
  token1Symbol: string;
  token0Address: string;
  token1Address: string;
  depositedToken0: string;
  depositedToken1: string;
  token0PriceUSD: string;
  token1PriceUSD: string;
  liquidityUSD: string;
  token0LogoURI?: string;
  token1LogoURI?: string;
  feeGrowthInside0LastX128: string;
  feeGrowthInside1LastX128: string;
}

export interface LiquidityPositionWithChain extends LiquidityPosition {
  chainId: ChainId;
  chainName: string;
}

export interface PoolInfo {
  id: string;
  token0Symbol: string;
  token1Symbol: string;
  token0Address: string;
  token1Address: string;
  totalValueLockedUSD: string;
  volumeUSD: string;
  token0LogoURI?: string;
  token1LogoURI?: string;
}

export interface PoolInfoWithChain extends PoolInfo {
  chainId: ChainId;
  chainName: string;
}

export interface UserStats {
  totalLiquidityUSD: number;
  positionCount: number;
  totalSwaps: number;
  totalVolumeUSD: number;
  chainBreakdown: Array<{
    chainId: ChainId;
    chainName: string;
    liquidityUSD: number;
    positionCount: number;
  }>;
}

export interface AccountInfo {
  swapCount: string;
  totalSpendUSD: string;
}

export interface VaultInfo {
  tokenA: string;
  tokenB: string;
  totalShares: string;
  totalSupply: string;
  lastPrice: string;
  totalAmount0: string;
  totalAmount1: string;
}

export interface VaultShare {
  id: string;
  vault: VaultInfo;
  vaultShareBalance: string;
  tokenASymbol: string;
  tokenBSymbol: string;
  tokenALogoURI?: string;
  tokenBLogoURI?: string;
  userAmount0: string;
  userAmount1: string;
  totalValueUSD: string;
}

export interface VaultShareWithChain extends VaultShare {
  chainId: ChainId;
  chainName: string;
}

// ============================================================================
// GraphQL Queries
// ============================================================================

const USER_POSITIONS_QUERY = `
  query GetUserPositions($owner: Bytes!) {
    positions(where: { owner: $owner }) {
      pool {
        id
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      depositedToken0
      depositedToken1
      token0 {
        symbol
        derivedUSD
      }
      token1 {
        symbol
        derivedUSD
      }
      feeGrowthInside0LastX128
      feeGrowthInside1LastX128
    }
  }
`;

const TOP_POOLS_QUERY = `
  query GetTopPools($first: Int!) {
    pools(
      first: $first
      orderBy: totalValueLockedUSD
      orderDirection: desc
    ) {
      id
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      totalValueLockedUSD
      volumeUSD
    }
  }
`;

const POOL_BY_ID_QUERY = `
  query GetPoolById($poolId: ID!) {
    pool(id: $poolId) {
      id
      token0 {
        id
        symbol
        derivedUSD
      }
      token1 {
        id
        symbol
        derivedUSD
      }
      totalValueLockedUSD
      volumeUSD
      token0Price
      token1Price
    }
  }
`;

const USER_ACCOUNT_QUERY = `
  query GetUserAccount($id: ID!) {
    account(id: $id) {
      swapCount
      totalSpendUSD
    }
  }
`;

const USER_VAULT_SHARES_QUERY = `
  query GetUserVaultShares($user: Bytes!) {
    vaultShares(where: { user: $user }) {
      id
      vault {
        tokenA
        tokenB
        totalShares
        totalSupply
        lastPrice
        totalAmount0
        totalAmount1
      }
      vaultShareBalance
    }
  }
`;

// ============================================================================
// Query Functions
// ============================================================================

/**
 * Get user's liquidity positions across all chains
 *
 * @param userAddress - User's wallet address
 * @returns Array of liquidity positions with chain context
 */
export async function getUserPositionsAllChains(
  userAddress: string
): Promise<LiquidityPositionWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No chains with DEX subgraph available');
    return [];
  }

  // Query all chains in parallel
  const results = await queryMultiChain<{ positions: any[] }>(
    chains,
    'dex',
    USER_POSITIONS_QUERY,
    { owner: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  // Log failed chains for debugging
  if (aggregated.failed.length > 0) {
    console.warn('Failed to fetch positions from chains:', aggregated.failed);
  }

  // Transform to typed data with chain info
  const allPositions = aggregated.success.flatMap((chainResult) =>
    chainResult.data.positions.map((position: any) => {
      // Calculate USD values
      const token0USD = parseFloat(position.depositedToken0) * parseFloat(position.token0.derivedUSD);
      const token1USD = parseFloat(position.depositedToken1) * parseFloat(position.token1.derivedUSD);
      const liquidityUSD = token0USD + token1USD;

      // Get token logos from chain metadata
      const token0Info = getTokenInfo(chainResult.chainId, position.pool.token0.id);
      const token1Info = getTokenInfo(chainResult.chainId, position.pool.token1.id);

      return {
        poolId: position.pool.id,
        token0Symbol: position.token0.symbol,
        token1Symbol: position.token1.symbol,
        token0Address: position.pool.token0.id,
        token1Address: position.pool.token1.id,
        depositedToken0: position.depositedToken0,
        depositedToken1: position.depositedToken1,
        token0PriceUSD: position.token0.derivedUSD,
        token1PriceUSD: position.token1.derivedUSD,
        liquidityUSD: liquidityUSD.toFixed(2),
        token0LogoURI: token0Info?.logoURI,
        token1LogoURI: token1Info?.logoURI,
        feeGrowthInside0LastX128: position.feeGrowthInside0LastX128,
        feeGrowthInside1LastX128: position.feeGrowthInside1LastX128,
        chainId: chainResult.chainId,
        chainName: chainResult.chainName,
      };
    })
  );

  // Sort by liquidity value (highest first)
  return sortByValue(
    allPositions,
    (pos) => parseFloat(pos.liquidityUSD),
    false
  );
}

/**
 * Get user's account info across all chains
 *
 * @param userAddress - User's wallet address
 * @returns Account info merged from all chains
 */
export async function getUserAccountInfo(userAddress: string): Promise<{
  totalSwaps: number;
  totalVolumeUSD: number;
}> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    return { totalSwaps: 0, totalVolumeUSD: 0 };
  }

  // Query all chains in parallel
  const results = await queryMultiChain<{ account: AccountInfo | null }>(
    chains,
    'dex',
    USER_ACCOUNT_QUERY,
    { id: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  // Merge data from all chains
  let totalSwaps = 0;
  let totalVolumeUSD = 0;

  aggregated.success.forEach((chainResult) => {
    if (chainResult.data.account) {
      totalSwaps += parseInt(chainResult.data.account.swapCount || '0');
      totalVolumeUSD += parseFloat(chainResult.data.account.totalSpendUSD || '0');
    }
  });

  return { totalSwaps, totalVolumeUSD };
}

/**
 * Get user's aggregated stats across all chains
 *
 * @param userAddress - User's wallet address
 * @returns Aggregated statistics
 */
export async function getUserStats(userAddress: string): Promise<UserStats> {
  const [positions, accountInfo] = await Promise.all([
    getUserPositionsAllChains(userAddress),
    getUserAccountInfo(userAddress)
  ]);

  // Group by chain
  const chainMap = new Map<ChainId, { chainId: ChainId; chainName: string; liquidityUSD: number; positionCount: number }>();

  positions.forEach((pos) => {
    if (!chainMap.has(pos.chainId)) {
      chainMap.set(pos.chainId, {
        chainId: pos.chainId,
        chainName: pos.chainName,
        liquidityUSD: 0,
        positionCount: 0,
      });
    }
    const chainData = chainMap.get(pos.chainId)!;
    chainData.liquidityUSD += parseFloat(pos.liquidityUSD);
    chainData.positionCount += 1;
  });

  const chainBreakdown = Array.from(chainMap.values());
  const totalLiquidityUSD = chainBreakdown.reduce(
    (sum, chain) => sum + chain.liquidityUSD,
    0
  );

  return {
    totalLiquidityUSD,
    positionCount: positions.length,
    totalSwaps: accountInfo.totalSwaps,
    totalVolumeUSD: accountInfo.totalVolumeUSD,
    chainBreakdown,
  };
}

/**
 * Get top pools across all chains
 *
 * @param limit - Number of pools to fetch per chain
 * @returns Array of pools with chain context
 */
export async function getTopPoolsAllChains(
  limit: number = 10
): Promise<PoolInfoWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    return [];
  }

  const results = await queryMultiChain<{ pools: any[] }>(
    chains,
    'dex',
    TOP_POOLS_QUERY,
    { first: limit }
  );

  const aggregated = aggregateMultiChainData(results);

  // Transform to typed data
  const allPools = aggregated.success.flatMap((chainResult) =>
    chainResult.data.pools.map((pool: any) => {
      // Get token logos
      const token0Info = getTokenInfo(chainResult.chainId, pool.token0.id);
      const token1Info = getTokenInfo(chainResult.chainId, pool.token1.id);

      return {
        id: pool.id,
        token0Symbol: pool.token0.symbol,
        token1Symbol: pool.token1.symbol,
        token0Address: pool.token0.id,
        token1Address: pool.token1.id,
        totalValueLockedUSD: pool.totalValueLockedUSD,
        volumeUSD: pool.volumeUSD,
        token0LogoURI: token0Info?.logoURI,
        token1LogoURI: token1Info?.logoURI,
        chainId: chainResult.chainId,
        chainName: chainResult.chainName,
      };
    })
  );

  // Sort by TVL (highest first) and take top N
  const topPools = sortByValue(
    allPools,
    (pool) => parseFloat(pool.totalValueLockedUSD),
    false
  ).slice(0, limit);

  return topPools;
}

/**
 * Get pools grouped by pair across chains
 * Useful for showing same pool on different chains
 *
 * @param limit - Number of pools to fetch
 * @returns Map of pair name to pools
 */
export async function getPoolsGroupedByPair(
  limit: number = 20
): Promise<Map<string, PoolInfoWithChain[]>> {
  const allPools = await getTopPoolsAllChains(limit);

  return groupByKey(
    allPools,
    (pool) => `${pool.token0Symbol}/${pool.token1Symbol}`
  );
}

/**
 * Get specific pool information by ID and chain
 *
 * @param chainId - Chain ID
 * @param poolId - Pool contract address
 * @returns Pool information or null
 */
export async function getPoolById(
  chainId: ChainId,
  poolId: string
): Promise<PoolInfo | null> {
  try {
    const { querySubgraph } = await import('../client');

    const data = await querySubgraph<{ pool: any }>(
      chainId,
      'dex',
      POOL_BY_ID_QUERY,
      { poolId: poolId.toLowerCase() }
    );

    if (!data.pool) {
      return null;
    }

    const pool = data.pool;

    // Get token logos
    const token0Info = getTokenInfo(chainId, pool.token0.id);
    const token1Info = getTokenInfo(chainId, pool.token1.id);

    return {
      id: pool.id,
      token0Symbol: pool.token0.symbol,
      token1Symbol: pool.token1.symbol,
      token0Address: pool.token0.id,
      token1Address: pool.token1.id,
      totalValueLockedUSD: pool.totalValueLockedUSD,
      volumeUSD: pool.volumeUSD,
      token0LogoURI: token0Info?.logoURI,
      token1LogoURI: token1Info?.logoURI,
    };
  } catch (error) {
    console.error(`Failed to fetch pool ${poolId} on chain ${chainId}:`, error);
    return null;
  }
}

/**
 * Get user's positions for a specific chain
 *
 * @param chainId - Chain ID
 * @param userAddress - User's wallet address
 * @returns Array of liquidity positions
 */
export async function getUserPositionsByChain(
  chainId: ChainId,
  userAddress: string
): Promise<LiquidityPosition[]> {
  try {
    const { querySubgraph } = await import('../client');

    const data = await querySubgraph<{ positions: any[] }>(
      chainId,
      'dex',
      USER_POSITIONS_QUERY,
      { owner: userAddress.toLowerCase() }
    );

    if (!data.positions || data.positions.length === 0) {
      return [];
    }

    return data.positions.map((position: any) => {
      // Calculate USD values
      const token0USD = parseFloat(position.depositedToken0) * parseFloat(position.token0.derivedUSD);
      const token1USD = parseFloat(position.depositedToken1) * parseFloat(position.token1.derivedUSD);
      const liquidityUSD = token0USD + token1USD;

      // Get token logos
      const token0Info = getTokenInfo(chainId, position.pool.token0.id);
      const token1Info = getTokenInfo(chainId, position.pool.token1.id);

      return {
        poolId: position.pool.id,
        token0Symbol: position.token0.symbol,
        token1Symbol: position.token1.symbol,
        token0Address: position.pool.token0.id,
        token1Address: position.pool.token1.id,
        depositedToken0: position.depositedToken0,
        depositedToken1: position.depositedToken1,
        token0PriceUSD: position.token0.derivedUSD,
        token1PriceUSD: position.token1.derivedUSD,
        liquidityUSD: liquidityUSD.toFixed(2),
        token0LogoURI: token0Info?.logoURI,
        token1LogoURI: token1Info?.logoURI,
        feeGrowthInside0LastX128: position.feeGrowthInside0LastX128,
        feeGrowthInside1LastX128: position.feeGrowthInside1LastX128,
      };
    });
  } catch (error) {
    console.error(`Failed to fetch positions for chain ${chainId}:`, error);
    return [];
  }
}

/**
 * Get user's vault shares across all chains
 *
 * @param userAddress - User's wallet address
 * @returns Array of vault shares with chain context
 */
export async function getUserVaultSharesAllChains(
  userAddress: string
): Promise<VaultShareWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No chains with DEX subgraph available');
    return [];
  }

  // Query all chains in parallel
  const results = await queryMultiChain<{ vaultShares: any[] }>(
    chains,
    'dex',
    USER_VAULT_SHARES_QUERY,
    { user: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  // Log failed chains for debugging
  if (aggregated.failed.length > 0) {
    console.warn('Failed to fetch vault shares from chains:', aggregated.failed);
  }

  // Transform to typed data with chain info
  const allVaultShares = aggregated.success.flatMap((chainResult) =>
    chainResult.data.vaultShares
      .filter((share: any) => parseFloat(share.vaultShareBalance) > 0) // Only show vaults with balance
      .map((share: any) => {
        const { vault } = share;

        // Calculate user's token amounts
        // Formula: (vaultShareBalance / totalSupply) * totalAmount
        const shareBalance = parseFloat(share.vaultShareBalance);
        const totalSupply = parseFloat(vault.totalSupply) / 1e18; // Convert from wei to actual number

        // Calculate share percentage
        const sharePercentage = shareBalance / totalSupply;

        // Format total amounts based on decimal places (18 for normal tokens, 6 for stablecoins)
        const totalAmount0Raw = parseFloat(vault.totalAmount0);
        const totalAmount1Raw = parseFloat(vault.totalAmount1);

        // Determine decimals: if total amount has less than 18 digits, it's likely a stablecoin (6 decimals)
        const totalAmount0Decimals = vault.totalAmount0.length < 18 ? 1e6 : 1e18;
        const totalAmount1Decimals = vault.totalAmount1.length < 18 ? 1e6 : 1e18;

        const totalAmount0 = totalAmount0Raw / totalAmount0Decimals;
        const totalAmount1 = totalAmount1Raw / totalAmount1Decimals;

        // Calculate user's actual token amounts
        const userAmount0 = sharePercentage * totalAmount0;
        const userAmount1 = sharePercentage * totalAmount1;

        // Get token info from chain metadata
        const tokenAInfo = getTokenInfo(chainResult.chainId, vault.tokenA);
        const tokenBInfo = getTokenInfo(chainResult.chainId, vault.tokenB);

        // Calculate USD value (simplified - would need token prices)
        const tokenAUSD = tokenAInfo ? userAmount0 * 0 : 0; // Placeholder - need actual price
        const tokenBUSD = tokenBInfo ? userAmount1 * 0 : 0; // Placeholder - need actual price
        const totalValueUSD = tokenAUSD + tokenBUSD;

        return {
          id: share.id,
          vault: {
            tokenA: vault.tokenA,
            tokenB: vault.tokenB,
            totalShares: vault.totalShares,
            totalSupply: vault.totalSupply,
            lastPrice: vault.lastPrice,
            totalAmount0: vault.totalAmount0,
            totalAmount1: vault.totalAmount1,
          },
          vaultShareBalance: share.vaultShareBalance,
          tokenASymbol: tokenAInfo?.symbol || 'Unknown',
          tokenBSymbol: tokenBInfo?.symbol || 'Unknown',
          tokenALogoURI: tokenAInfo?.logoURI,
          tokenBLogoURI: tokenBInfo?.logoURI,
          userAmount0: userAmount0.toFixed(6),
          userAmount1: userAmount1.toFixed(6),
          totalValueUSD: totalValueUSD.toFixed(2),
          chainId: chainResult.chainId,
          chainName: chainResult.chainName,
        };
      })
  );

  // Sort by share balance (highest first)
  return sortByValue(
    allVaultShares,
    (share) => parseFloat(share.vaultShareBalance),
    false
  );
}
