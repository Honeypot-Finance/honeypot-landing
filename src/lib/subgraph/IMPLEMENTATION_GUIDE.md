# Multi-Chain Subgraph Implementation Guide

This guide shows you how to implement actual data fetching for your dashboard using the multi-chain subgraph system.

## Quick Start

### 1. Configure Endpoints

Edit `src/config/subgraphEndpoints.ts`:

```typescript
export const SUBGRAPH_ENDPOINTS: MultiChainSubgraphConfig = {
  80084: { // Berachain
    dex: 'https://api.studio.thegraph.com/query/YOUR_ACTUAL_DEX_SUBGRAPH_ID',
    nft: 'https://api.studio.thegraph.com/query/YOUR_ACTUAL_NFT_SUBGRAPH_ID',
    points: '',  // Not deployed yet
    leaderboard: '',
    vault: '',
  },
  56: { // BSC
    dex: 'https://api.studio.thegraph.com/query/YOUR_BSC_DEX_SUBGRAPH_ID',
    nft: '', // Not deployed on BSC
    points: '',
    leaderboard: '',
    vault: '',
  },
};
```

### 2. Update Chain Metadata

Edit `src/config/chains.ts` to add chain icons:

```typescript
export const CHAIN_METADATA: Record<ChainId, ChainMetadata> = {
  80084: {
    id: 80084,
    name: 'Berachain Bartio',
    shortName: 'Berachain',
    nativeCurrency: { name: 'BERA', symbol: 'BERA', decimals: 18 },
    rpcUrls: ['https://bartio.rpc.berachain.com'],
    blockExplorerUrls: ['https://bartio.beratrail.io'],
    iconUrl: '/images/chains/berachain.svg', // Add your icon here
  },
  // Add your other chains...
};
```

### 3. Create Query File

Create `src/lib/subgraph/queries/dex.ts`:

```typescript
import { queryMultiChain, ChainId } from '../client';
import { aggregateMultiChainData, sortByValue } from '../utils';
import { getChainsForSubgraph } from '../config';

export interface LiquidityPosition {
  poolId: string;
  token0Symbol: string;
  token1Symbol: string;
  liquidityUSD: string;
  earnedUSD: string;
  chainId: ChainId;
  chainName: string;
}

const USER_POSITIONS_QUERY = `
  query GetUserPositions($userAddress: Bytes!) {
    liquidityPositions(
      where: { user: $userAddress, liquidityTokenBalance_gt: "0" }
    ) {
      id
      pair {
        id
        token0 { symbol }
        token1 { symbol }
      }
      liquidityUSD
    }
  }
`;

export async function getUserPositions(
  userAddress: string
): Promise<LiquidityPosition[]> {
  const chains = getChainsForSubgraph('dex');

  const results = await queryMultiChain(
    chains,
    'dex',
    USER_POSITIONS_QUERY,
    { userAddress: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  const positions = aggregated.success.flatMap((chainResult) =>
    chainResult.data.liquidityPositions.map((pos: any) => ({
      poolId: pos.pair.id,
      token0Symbol: pos.pair.token0.symbol,
      token1Symbol: pos.pair.token1.symbol,
      liquidityUSD: pos.liquidityUSD,
      earnedUSD: '0', // Calculate based on your logic
      chainId: chainResult.chainId,
      chainName: chainResult.chainName,
    }))
  );

  return sortByValue(
    positions,
    (pos) => parseFloat(pos.liquidityUSD),
    false
  );
}
```

### 4. Create React Hook

Create `src/lib/subgraph/hooks/useDexData.ts`:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { getUserPositions, LiquidityPosition } from '../queries/dex';

export function useUserPositions() {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<LiquidityPosition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!isConnected || !address) {
      setData([]);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const positions = await getUserPositions(address);
        setData(positions);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Refetch every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [address, isConnected]);

  return { data, isLoading, error };
}
```

### 5. Use in Dashboard Component

Update `src/app/dashboard/page.tsx`:

```typescript
'use client';
import { useUserPositions } from '@/lib/subgraph/hooks/useDexData';
import { formatUSD } from '@/lib/subgraph';

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const { data: positions, isLoading } = useUserPositions();

  if (!isConnected) {
    return <ConnectWalletPrompt />;
  }

  return (
    <div className="dashboard-page">
      <h1>User Data Hub</h1>

      {/* Liquidity Positions */}
      <section>
        <h2>Your Liquidity Positions</h2>

        {isLoading ? (
          <div>Loading positions...</div>
        ) : positions.length === 0 ? (
          <div>No positions found</div>
        ) : (
          <div className="liquidity-cards">
            {positions.map((position) => (
              <div
                key={`${position.chainId}-${position.poolId}`}
                className="liquidity-card"
              >
                <div className="liquidity-pair">
                  {position.token0Symbol}/{position.token1Symbol}
                </div>
                <div className="chain-badge">
                  {position.chainName}
                </div>
                <div className="liquidity-details">
                  <span>Liquidity:</span>
                  <span>{formatUSD(position.liquidityUSD)}</span>
                </div>
                <div className="liquidity-earned">
                  <span>Earned:</span>
                  <span>{formatUSD(position.earnedUSD)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
```

## Common Patterns

### Pattern 1: Display Total Across Chains

```typescript
import { sumAcrossChains, formatUSD } from '@/lib/subgraph';

const totalLiquidity = positions.reduce(
  (sum, pos) => sum + parseFloat(pos.liquidityUSD),
  0
);

// Display
<div>Total Liquidity: {formatUSD(totalLiquidity)}</div>
```

### Pattern 2: Group by Pool Pair

```typescript
import { groupByKey } from '@/lib/subgraph';

const grouped = groupByKey(
  positions,
  (pos) => `${pos.token0Symbol}/${pos.token1Symbol}`
);

// Display grouped
{Array.from(grouped.entries()).map(([pair, positions]) => (
  <div key={pair}>
    <h3>{pair}</h3>
    {positions.map(pos => (
      <div key={pos.chainId}>
        {pos.chainName}: {formatUSD(pos.liquidityUSD)}
      </div>
    ))}
  </div>
))}
```

### Pattern 3: Show Chain Badge/Icon

```typescript
import { getChainMetadata } from '@/lib/subgraph';

function ChainBadge({ chainId }: { chainId: number }) {
  const chain = getChainMetadata(chainId);
  if (!chain) return null;

  return (
    <div className="chain-badge">
      {chain.iconUrl && (
        <img src={chain.iconUrl} alt={chain.name} width={16} height={16} />
      )}
      <span>{chain.shortName}</span>
    </div>
  );
}
```

## Testing

### Test with Mock Data

Before implementing real queries, test with mock data:

```typescript
export async function getUserPositions(address: string) {
  // Return mock data for testing UI
  return [
    {
      poolId: '1',
      token0Symbol: 'BERA',
      token1Symbol: 'HONEY',
      liquidityUSD: '25000',
      earnedUSD: '125.30',
      chainId: 80084,
      chainName: 'Berachain',
    },
    {
      poolId: '2',
      token0Symbol: 'BNB',
      token1Symbol: 'USDT',
      liquidityUSD: '10000',
      earnedUSD: '50.00',
      chainId: 56,
      chainName: 'BSC',
    },
  ];
}
```

### Gradually Replace with Real Data

1. Start with mock data
2. Implement one chain's real query
3. Test thoroughly
4. Add more chains
5. Enable multi-chain querying

## Troubleshooting

### Issue: "Subgraph endpoint not available"

**Solution:** Check that the endpoint is configured in `config.ts` and not an empty string.

```typescript
// Check availability
import { isSubgraphAvailable } from '@/lib/subgraph';

if (isSubgraphAvailable(80084, 'dex')) {
  // Query is safe
}
```

### Issue: Some chains fail silently

**Solution:** Check the failed results in aggregated data:

```typescript
const aggregated = aggregateMultiChainData(results);

if (aggregated.failed.length > 0) {
  console.warn('Failed chains:', aggregated.failed);
  // Show warning to user or log for monitoring
}
```

### Issue: Data not refreshing

**Solution:** Ensure refetch interval is set up correctly:

```typescript
useEffect(() => {
  fetchData();
  const interval = setInterval(fetchData, 30000); // 30 seconds
  return () => clearInterval(interval); // Clean up
}, [address]);
```

## Next Steps

1. Copy `queries/example-dex.ts.example` → `queries/dex.ts`
2. Update with your actual GraphQL schema
3. Copy `hooks/example-useMultiChainData.ts.example` → `hooks/useDexData.ts`
4. Implement one query at a time
5. Test with your subgraph endpoints
6. Repeat for other domains (NFT, Points, etc.)

## Need Help?

Check the example files:
- `queries/example-dex.ts.example` - Full query implementation
- `hooks/example-useMultiChainData.ts.example` - React hooks
- `README.md` - API reference
