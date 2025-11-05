# Multi-Chain Subgraph System

A comprehensive GraphQL client system for querying subgraphs across multiple blockchain networks with rich data aggregation utilities.

## Features

- ✅ Multi-chain support with configurable endpoints per chain
- ✅ Automatic retry logic with exponential backoff
- ✅ Skip chains with empty endpoint strings
- ✅ Query multiple chains in parallel
- ✅ Rich data aggregation and formatting utilities
- ✅ Chain metadata and branding (names, icons, explorers)
- ✅ TypeScript typed responses
- ✅ Built-in caching (60s revalidation)
- ✅ React hooks with loading states

## Configuration

The configuration is centralized in the main `src/config/` folder:

### Subgraph Endpoints

Edit `src/config/subgraphEndpoints.ts` to add your subgraph endpoints:

```typescript
export const SUBGRAPH_ENDPOINTS: MultiChainSubgraphConfig = {
  80084: { // Berachain
    dex: 'https://api.studio.thegraph.com/query/YOUR_DEX_SUBGRAPH',
    nft: 'https://api.studio.thegraph.com/query/YOUR_NFT_SUBGRAPH',
    points: '', // Not deployed - will be skipped
    leaderboard: '',
    vault: '',
  },
  56: { // BSC
    dex: '',
    nft: 'https://api.studio.thegraph.com/query/YOUR_BSC_NFT_SUBGRAPH',
    points: '',
    leaderboard: '',
    vault: '',
  },
};
```

**Empty strings mean that chain doesn't have this subgraph deployed and will be skipped.**

### Chain Metadata

Edit `src/config/chains.ts` to add chain information:

```typescript
export const CHAIN_METADATA: Record<ChainId, ChainMetadata> = {
  80084: {
    id: 80084,
    name: "Berachain Bartio",
    shortName: "Berachain",
    nativeCurrency: { name: "BERA", symbol: "BERA", decimals: 18 },
    rpcUrls: ["https://bartio.rpc.berachain.com"],
    blockExplorerUrls: ["https://bartio.beratrail.io"],
    iconUrl: "/images/chains/berachain.png", // Add your chain icon
  },
  // Add more chains...
};
```

## Usage Examples

### Basic Query (Single Chain)

```typescript
import { querySubgraph } from '@/lib/subgraph';

const data = await querySubgraph(
  80084, // Chain ID (Berachain)
  'dex', // Subgraph type
  `
    query GetUserStats($address: Bytes!) {
      user(id: $address) {
        totalValueLocked
        tradingVolume
      }
    }
  `,
  { address: userAddress }
);
```

### With Retry Logic

```typescript
import { querySubgraphWithRetry } from '@/lib/subgraph';

const data = await querySubgraphWithRetry(
  80084,
  'nft',
  query,
  variables,
  3 // Max retries (default: 3)
);
```

### Multi-Chain Query (Parallel)

```typescript
import { queryMultiChain, getAvailableChains } from '@/lib/subgraph';

const chains = getAvailableChains(); // [80084, 1]

const results = await queryMultiChain(
  chains,
  'dex',
  query,
  variables
);

// Results format:
// [
//   { chainId: 80084, data: {...} },
//   { chainId: 1, data: null, error: 'Subgraph not available' }
// ]
```

### Check Availability

```typescript
import { isSubgraphAvailable, getChainsForSubgraph } from '@/lib/subgraph';

// Check if specific subgraph is available on a chain
if (isSubgraphAvailable(80084, 'dex')) {
  // Query dex subgraph
}

// Get all chains where NFT subgraph is deployed
const nftChains = getChainsForSubgraph('nft'); // [80084, 1]
```

## Creating Query Files

Create domain-specific query files in `queries/` directory:

```typescript
// queries/dex.ts
import { querySubgraphWithRetry, ChainId } from '../client';

export interface UserStats {
  totalValueLocked: string;
  tradingVolume: string;
}

const USER_STATS_QUERY = `
  query GetUserStats($address: Bytes!) {
    user(id: $address) {
      totalValueLocked
      tradingVolume
    }
  }
`;

export async function getUserStats(
  chainId: ChainId,
  address: string
): Promise<UserStats> {
  const data = await querySubgraphWithRetry(
    chainId,
    'dex',
    USER_STATS_QUERY,
    { address: address.toLowerCase() }
  );

  return {
    totalValueLocked: data.user.totalValueLocked,
    tradingVolume: data.user.tradingVolume,
  };
}
```

## Error Handling

The client automatically handles:
- Missing endpoints (throws error with helpful message)
- Network failures (retries with exponential backoff)
- GraphQL errors (throws with error details)

```typescript
try {
  const data = await querySubgraph(chainId, 'dex', query, variables);
} catch (error) {
  if (error.message.includes('not available')) {
    // Handle missing subgraph
  } else {
    // Handle other errors
  }
}
```

## Multi-Chain Data Aggregation

The system includes utilities specifically designed for displaying multi-chain data with proper context:

### Aggregating Data with Chain Context

```typescript
import {
  queryMultiChain,
  aggregateMultiChainData,
  flattenMultiChainData,
  getChainsForSubgraph
} from '@/lib/subgraph';

// Get all chains where DEX is deployed
const chains = getChainsForSubgraph('dex');

// Query all chains in parallel
const results = await queryMultiChain(chains, 'dex', POOLS_QUERY, {});

// Aggregate with success/failed separation
const aggregated = aggregateMultiChainData(results);

// aggregated = {
//   success: [
//     { chainId: 80084, chainName: "Berachain", data: {...} },
//     { chainId: 56, chainName: "BSC", data: {...} }
//   ],
//   failed: [
//     { chainId: 1, chainName: "Ethereum", error: "Not available" }
//   ],
//   total: 3
// }
```

### Displaying Pools Across Chains

```typescript
// Real-world example: Show liquidity pools with chain info
const pools = await getTopPoolsAllChains(10);

// pools = [
//   {
//     token0: "BERA",
//     token1: "HONEY",
//     liquidityUSD: "250000",
//     chainId: 80084,
//     chainName: "Berachain"
//   },
//   {
//     token0: "BNB",
//     token1: "USDT",
//     liquidityUSD: "100000",
//     chainId: 56,
//     chainName: "BSC"
//   }
// ]

// In your UI component:
{pools.map(pool => (
  <div key={`${pool.chainId}-${pool.id}`}>
    <div>{pool.token0}/{pool.token1}</div>
    <div>{formatUSD(pool.liquidityUSD)} on {pool.chainName}</div>
  </div>
))}
```

### Grouping Same Pools Across Chains

```typescript
import { groupByKey } from '@/lib/subgraph';

const allPools = await getTopPoolsAllChains(20);

// Group by pair name
const grouped = groupByKey(
  allPools,
  (pool) => `${pool.token0}/${pool.token1}`
);

// grouped = Map {
//   "BERA/HONEY" => [
//     { liquidityUSD: "250000", chainId: 80084, chainName: "Berachain" },
//     { liquidityUSD: "100000", chainId: 56, chainName: "BSC" }
//   ],
//   "ETH/USDT" => [...]
// }

// Display in UI:
{Array.from(grouped.entries()).map(([pair, pools]) => (
  <div key={pair}>
    <h3>{pair}</h3>
    {pools.map(pool => (
      <div key={pool.chainId}>
        {pool.chainName}: {formatUSD(pool.liquidityUSD)}
      </div>
    ))}
  </div>
))}
```

### Summing Values Across Chains

```typescript
import { sumAcrossChains } from '@/lib/subgraph';

const results = await queryMultiChain(chains, 'dex', USER_STATS_QUERY, { address });
const aggregated = aggregateMultiChainData(results);

// Sum total liquidity across all chains
const totalLiquidity = sumAcrossChains(
  aggregated,
  (data) => parseFloat(data.user.totalValueLocked)
);

console.log(`Total liquidity across all chains: $${totalLiquidity}`);
```

## Utility Functions

### Chain Metadata
- `getChainMetadata(chainId)` - Get chain info (name, icon, explorer, etc.)
- `getChainName(chainId)` - Get short chain name for display

### Data Aggregation
- `aggregateMultiChainData(results)` - Separate success/failed with chain context
- `flattenMultiChainData(results)` - Flatten arrays with chain info
- `sumAcrossChains(results, getValue)` - Sum numeric values across chains
- `groupByKey(items, getKey)` - Group items by custom key

### Formatting
- `formatUSD(value)` - Format USD values ($1.2K, $1.2M)
- `formatTokenAmount(value)` - Format token amounts (1.2K, 1.2M)
- `formatPercentage(value)` - Format percentages (+12.5%)

### Sorting
- `sortByValue(items, getValue)` - Sort by numeric value
- `sortByChain(items, chainOrder?)` - Sort by chain ID

## Helper Functions

- `getSubgraphEndpoint(chainId, type)` - Get endpoint URL or null
- `getAvailableChains()` - Get all configured chain IDs
- `isSubgraphAvailable(chainId, type)` - Check if subgraph exists
- `getChainsForSubgraph(type)` - Get chains with specific subgraph deployed

## Example Files

Check these files for complete implementation examples:
- `queries/example-dex.ts.example` - Complete query implementation
- `hooks/example-useMultiChainData.ts.example` - React hooks with loading states
