/**
 * Subgraph Utility Functions
 *
 * Helpers for aggregating and formatting multi-chain data
 */

import { getChainName } from '@/config/chains';
import type { ChainId } from '@/config/chains';

// ============================================================================
// Multi-Chain Data Types
// ============================================================================

/**
 * Generic wrapper for data with chain context
 */
export interface ChainData<T> {
  chainId: ChainId;
  chainName: string;
  data: T;
}

/**
 * Result from multi-chain query with chain info
 */
export interface MultiChainResult<T> {
  success: ChainData<T>[];
  failed: Array<{
    chainId: ChainId;
    chainName: string;
    error: string;
  }>;
  total: number;
}

// ============================================================================
// Data Aggregation Helpers
// ============================================================================

/**
 * Transform multi-chain query results into structured format
 * Separates successful results from failed ones and adds chain metadata
 */
export function aggregateMultiChainData<T>(
  results: Array<{ chainId: ChainId; data: T | null; error?: string }>
): MultiChainResult<T> {
  const success: ChainData<T>[] = [];
  const failed: Array<{ chainId: ChainId; chainName: string; error: string }> =
    [];

  results.forEach((result) => {
    const chainName = getChainName(result.chainId);

    if (result.data !== null) {
      success.push({
        chainId: result.chainId,
        chainName,
        data: result.data,
      });
    } else {
      failed.push({
        chainId: result.chainId,
        chainName,
        error: result.error || "Unknown error",
      });
    }
  });

  return {
    success,
    failed,
    total: results.length,
  };
}

/**
 * Merge and flatten multi-chain array data
 * Useful for lists like liquidity pools, trades, etc.
 */
export function flattenMultiChainData<T>(
  results: MultiChainResult<T[]>
): Array<T & { chainId: ChainId; chainName: string }> {
  return results.success.flatMap((chainResult) =>
    chainResult.data.map((item) => ({
      ...item,
      chainId: chainResult.chainId,
      chainName: chainResult.chainName,
    }))
  );
}

/**
 * Sum numeric values across chains
 * Useful for totals like TVL, volume, etc.
 */
export function sumAcrossChains<T>(
  results: MultiChainResult<T>,
  getValue: (data: T) => number
): number {
  return results.success.reduce(
    (sum, chainResult) => sum + getValue(chainResult.data),
    0
  );
}

/**
 * Group multi-chain data by a key
 * Useful for grouping same pools/pairs across different chains
 */
export function groupByKey<T>(
  items: Array<T & { chainId: ChainId; chainName: string }>,
  getKey: (item: T) => string
): Map<string, Array<T & { chainId: ChainId; chainName: string }>> {
  const grouped = new Map<
    string,
    Array<T & { chainId: ChainId; chainName: string }>
  >();

  items.forEach((item) => {
    const key = getKey(item);
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(item);
  });

  return grouped;
}

// ============================================================================
// Formatting Helpers
// ============================================================================

/**
 * Format USD value
 */
export function formatUSD(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "$0.00";

  if (num >= 1_000_000) {
    return `$${(num / 1_000_000).toFixed(2)}M`;
  }
  if (num >= 1_000) {
    return `$${(num / 1_000).toFixed(2)}K`;
  }
  return `$${num.toFixed(2)}`;
}

/**
 * Format token amount
 */
export function formatTokenAmount(
  value: string | number,
  decimals: number = 2
): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0";

  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(decimals)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(decimals)}K`;
  }
  return num.toFixed(decimals);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

// ============================================================================
// Sorting Helpers
// ============================================================================

/**
 * Sort multi-chain items by a numeric value (descending)
 */
export function sortByValue<T>(
  items: Array<T & { chainId: ChainId; chainName: string }>,
  getValue: (item: T) => number,
  ascending: boolean = false
): Array<T & { chainId: ChainId; chainName: string }> {
  return [...items].sort((a, b) => {
    const valueA = getValue(a);
    const valueB = getValue(b);
    return ascending ? valueA - valueB : valueB - valueA;
  });
}

/**
 * Sort by chain ID
 */
export function sortByChain<T>(
  items: Array<T & { chainId: ChainId; chainName: string }>,
  chainOrder?: ChainId[]
): Array<T & { chainId: ChainId; chainName: string }> {
  if (!chainOrder) {
    return [...items].sort((a, b) => a.chainId - b.chainId);
  }

  return [...items].sort((a, b) => {
    const indexA = chainOrder.indexOf(a.chainId);
    const indexB = chainOrder.indexOf(b.chainId);
    return indexA - indexB;
  });
}
