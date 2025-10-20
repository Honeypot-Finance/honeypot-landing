# Database Setup for DEX Stats

## Overview
The landing page now fetches real-time DEX statistics from the Honeypot database, which aggregates user counts across all supported chains.

## What Was Changed

### 1. New Files Created
- `/src/lib/db/db.ts` - PostgreSQL database connection using the `postgres` library
- `/src/app/api/dex-stats/route.ts` - API route that queries the database and GraphQL endpoint
- `/.env.local` - Environment variables with database connection string
- `/.env.example` - Example environment file for reference

### 2. Dependencies Added
- `postgres@^3.4.4` - PostgreSQL client library

### 3. Updated Files
- `/src/components/DexStats/index.tsx` - Now fetches from `/api/dex-stats` endpoint
- `/package.json` - Added postgres dependency

## How It Works

1. **User Count**: Fetched from database table `subgraph_meta_data` which aggregates users across all chains (Berachain mainnet, Bartio testnet, etc.)
   - Query: `SELECT SUM(total_account) as total FROM subgraph_meta_data`
   - This gives the accurate total user count (~39,865)

2. **Total Trades & Volume**: Fetched from Berachain mainnet GraphQL endpoint
   - Endpoint: Goldsky API for hpot-algebra-core subgraph

## Setup Instructions

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Verify database connection**:
   The `.env.local` file already contains the database URL from the wasabee app:
   ```
   DB=postgres://default:npg_XIwHYOAyT4v2@ep-jolly-credit-a40duyld-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require
   ```

3. **Restart the dev server** (if it's still running):
   ```bash
   # Stop the current server (Ctrl+C)
   pnpm dev
   ```

4. **Test the API**:
   Visit `http://localhost:3100/api/dex-stats` to see the JSON response

## Environment Variables

### Required
- `DB` - PostgreSQL connection string (already configured in `.env.local`)

### Optional
- `DEBUG=true` - Enable database query logging
- `NODE_ENV=development` - Set environment mode

## Database Schema

The `subgraph_meta_data` table structure:
```sql
CREATE TABLE subgraph_meta_data (
  id TEXT PRIMARY KEY,           -- Chain identifier (e.g., "80094" for Berachain)
  total_account INTEGER NOT NULL -- Total unique users on this chain
);
```

## Troubleshooting

If you see errors about missing the `postgres` module:
```bash
pnpm install postgres
```

If the database connection fails:
1. Check that the `DB` environment variable is set in `.env.local`
2. Verify the database URL is correct
3. Ensure your IP is whitelisted in the Neon database settings

## Production Deployment

For Vercel deployment, add the `DB` environment variable in Vercel project settings:
- Go to Project Settings → Environment Variables
- Add `DB` with the production database URL
