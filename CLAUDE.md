# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Honeypot Landing is a Next.js 14 application for Honeypot Finance, a multi-chain DeFi platform. The project includes:
1. **Marketing Website** - Heavy animations, product showcases, partner displays
2. **User Dashboard** - Real-time DeFi data from multiple blockchain networks via GraphQL subgraphs
3. **Leaderboard System** - Multi-chain ranking and aggregation system

## Development Commands

```bash
# Install dependencies (use pnpm as primary package manager)
pnpm install

# Run development server (port 3100)
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint
```

## Architecture & Key Patterns

### Component Organization
The codebase follows atomic design principles:
- `/src/components/atoms/` - Basic reusable UI components (Button, IntroCard)
- `/src/components/molecules/` - Composite components combining atoms
- `/src/components/layout/` - Layout components (Header, Footer, LayoutWrapper)
- `/src/components/HomePage/` - Marketing page sections
- `/src/components/dashboard/` - Dashboard-specific components (DexStats, LeaderboardTab, PositionsTab, etc.)

### Multi-Chain Subgraph Architecture

The dashboard queries GraphQL subgraphs across multiple chains (Berachain, BSC) to aggregate DeFi data:

**Configuration** (`/src/config/subgraphEndpoints.ts`):
- Centralized subgraph endpoint configuration per chain
- Supports multiple subgraph types: `dex`, `nft`, `nft-staking`, `aiov`
- Helper functions: `getSubgraphEndpoint()`, `getChainsForSubgraph()`, `isSubgraphAvailable()`
- Currently supports: Berachain (all subgraphs) and BSC (DEX only)

**Client** (`/src/lib/subgraph/client.ts`):
- `querySubgraph()` - Single chain query with 60s cache revalidation
- `querySubgraphWithRetry()` - Retry logic with exponential backoff
- `queryMultiChain()` - Parallel queries across multiple chains, returns results with chainId

**Query Pattern** (`/src/lib/subgraph/queries/`):
- Each query module defines GraphQL queries and data fetching functions
- Queries use specific `orderBy` fields matching the ranking metric (e.g., `LAUNCHES_QUERY` orders by `pot2PumpLaunchCount`)
- Multi-chain aggregation: Data from same address across chains is summed using `Map<address, account>` pattern
- Rankings calculated after aggregation to ensure accurate cross-chain positioning

**Example Multi-Chain Query Flow**:
```typescript
// 1. Get chains with DEX subgraph deployed
const chains = getChainsForSubgraph('dex');

// 2. Query all chains in parallel
const results = await queryMultiChain(chains, 'dex', QUERY, variables);

// 3. Aggregate by address
const accountMap = new Map<string, Account>();
for (const result of results) {
  // Sum values for same address across chains
}

// 4. Sort aggregated results
const sorted = Array.from(accountMap.values()).sort(...);
```

### Dashboard Data Fetching Pattern

**Dashboard Tabs**: The dashboard includes 5 main tabs - DEX (positions/stats), Points (loyalty metrics), NFT (wallet + staked), Leaderboard (multi-chain rankings), and AIOV (vault data).

**Client-Side Fetching with Caching**:
- Each tab manages its own data fetching with React hooks
- Data fetched only when tab becomes active (`if (activeTab !== 'target') return;`)
- One-time fetch per session using `dataFetched` flag to prevent refetching on tab switches
- User must refresh browser to reload data
- Wallet connection required for dashboard access (guard in dashboard/page.tsx)

**State Management Pattern**:
```typescript
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
const [dataFetched, setDataFetched] = useState(false);

useEffect(() => {
  if (activeTab !== 'target' || !address || dataFetched) {
    setLoading(false);
    return;
  }
  // Fetch data...
  setDataFetched(true);
}, [activeTab, address, dataFetched]);
```

### Styling Strategy
- **Tailwind CSS** for utility classes
- **SCSS modules** for component-specific styles (co-located with components)
- **Dashboard styles** in `/src/app/dashboard/dashboard.scss` - comprehensive styling for all dashboard components
- **Global styles** in `/src/styles/global.scss`
- **Theme**: Gold/honey color scheme (`#ffc107`) with dark backgrounds

### Web3 Integration
- **Wagmi v2** for wallet connection and blockchain interactions
- **RainbowKit v2** for wallet connection UI (custom brown/gold theme)
- Multi-chain support configured in `/src/config/chains.ts` (Berachain, BSC)
- Chain-specific token/NFT metadata in `/src/config/`
- Providers setup in `/src/components/Providers.tsx` (Wagmi + RainbowKit + React Query)

### Key Technical Decisions
1. **Animation Library**: Framer Motion for complex animations
2. **Carousel**: React Slick with CDN-loaded stylesheets
3. **GraphQL Client**: Custom fetch-based client with retry logic (no Apollo/URQL)
4. **Data Aggregation**: Client-side aggregation across multiple chains
5. **Caching Strategy**: Server-side 60s revalidation + client-side session persistence

### Important Files & Locations
- **Main Landing Page**: `/src/app/page.tsx` - Marketing page with scroll animations
- **Dashboard Page**: `/src/app/dashboard/page.tsx` - Main dashboard with wallet connection guard
- **Dashboard Styles**: `/src/app/dashboard/dashboard.scss` - All dashboard styling including loading states
- **Subgraph Config**: `/src/config/subgraphEndpoints.ts` - Multi-chain endpoint configuration
- **Subgraph Client**: `/src/lib/subgraph/client.ts` - GraphQL query utilities
- **Subgraph Queries**: `/src/lib/subgraph/queries/` - Query definitions (leaderboard, positions, nft, etc.)
- **SNAG API Client**: `/src/lib/snag/snagApi.ts` - Points/loyalty API integration
- **Ghostlogs Client**: `/src/lib/ghostlogs/` - AIOV vault data queries
- **Layout Configuration**: `/src/app/layout.tsx` - Metadata and root layout with CDN styles
- **Chain Config**: `/src/config/chains.ts` - Chain metadata, tokens, RPC endpoints
- **Domain Config**: `/src/config/domains.ts` - External service URLs (DEX, NFT marketplace, etc.)
- **App Paths Config**: `/src/config/allAppPath.tsx` - Comprehensive navigation menu structure (shared via API)
- **Wagmi Config**: `/src/config/wagmi.ts` - Web3 wallet configuration

### External Dependencies & CDN
The project loads Slick carousel styles from CDN in the layout:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```

## API Endpoints

The application exposes several API endpoints:

### `/api/navbar` - Navbar Configuration
Returns comprehensive navbar/menu configuration for sharing across different repositories. Includes logo settings and complete menu structure with nested submenus (Trade, Earn, Token Launch, Leaderboard, Docs). Static generation with long-term caching enabled.

**Response Structure:**
```json
{
  "logo": { "src": "/logo.svg", "alt": "Honeypot Finance Logo", "width": 100, "height": 100 },
  "menu": [
    {
      "title": "Trade",
      "path": [
        { "title": "Perp", "path": "...", "routePath": "...", "external": true },
        { "title": "Swap", "path": "...", "routePath": "...", "external": true }
      ]
    },
    { "title": "Docs", "path": "https://docs.honeypotfinance.xyz/", "external": true }
  ]
}
```

Data source: `/src/config/allAppPath.tsx`
See `/src/app/api/navbar/README.md` for full documentation.

### `/api/dex-stats` - DEX Statistics
Returns aggregated DEX statistics (users, chains, trades, volume) from database and Berachain GraphQL subgraph.

### `/api/loyalty/accounts` - Loyalty Accounts
Returns loyalty/points account data.

## Development Notes

- Development server runs on **port 3100** (not default 3000)
- No testing framework currently configured
- ESLint configured for code quality (run with `pnpm lint`)
- Both pnpm-lock.yaml and package-lock.json exist - **use pnpm as primary package manager**
- Subgraph queries may timeout if including expensive nested fields (avoid deeply nested transaction data)
- When adding new chains, update `/src/config/subgraphEndpoints.ts` with endpoint URLs
- Dashboard requires wallet connection - ensure wallet is connected before testing dashboard features
- Custom fonts (Gliker, Bebas Neue) loaded via CSS in global styles
- Alternative homepage versions exist in `/src/app/homepage1-4/` for testing/comparison