/**
 * Subgraph Module Index
 *
 * Central export point for all subgraph functionality.
 */

// Client exports
export {
  querySubgraph,
  querySubgraphWithRetry,
  queryMultiChain,
} from './client';
export type { GraphQLResponse } from './client';

// Config exports (re-export from main config folder)
export * from '@/config/chains';
export * from '@/config/subgraphEndpoints';

// Utils exports
export {
  aggregateMultiChainData,
  flattenMultiChainData,
  sumAcrossChains,
  groupByKey,
  formatUSD,
  formatTokenAmount,
  formatPercentage,
  sortByValue,
  sortByChain,
} from './utils';
export type {
  ChainData,
  MultiChainResult,
} from './utils';

// Query module exports
export * from './queries/dex';
export * from './queries/nft';

// Hook exports
export * from './hooks/useDexData';
export * from './hooks/useNftData';

// Additional query modules - Add when ready
// export * from './queries/points';
// export * from './queries/leaderboard';
// export * from './queries/vault';
