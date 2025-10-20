import { NextResponse } from 'next/server';
import { pg } from '@/lib/db/db';

export async function GET() {
  try {
    // GraphQL endpoint for Berachain mainnet
    const BERACHAIN_MAINNET = "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/hpot-algebra-core/2.4.0/gn";

    // Query to fetch trades and volume from GraphQL
    const statsQuery = `
      query DexStats {
        factories {
          txCount
          untrackedVolumeUSD
        }
      }
    `;

    // Fetch total users and chain count from database (aggregates across all chains)
    const [usersResult, chainCountResult] = await Promise.all([
      pg<{ total: number }[]>`
        SELECT SUM(total_account) as total FROM subgraph_meta_data
      `,
      pg<{ count: number }[]>`
        SELECT COUNT(*) as count FROM subgraph_meta_data
      `
    ]);

    // Fetch trades and volume from Berachain mainnet GraphQL
    const response = await fetch(BERACHAIN_MAINNET, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: statsQuery }),
    });

    const data = await response.json();

    console.log("Database users result:", usersResult);
    console.log("Berachain API Response:", data);

    if (data.errors) {
      throw new Error("GraphQL query failed");
    }

    const factory = data.data?.factories[0];
    const users = usersResult[0]?.total || 0;
    const chainCount = chainCountResult[0]?.count || 0;
    const totalTrades = factory?.txCount || "0";
    const totalVolume = factory?.untrackedVolumeUSD || "0";

    console.log("Extracted values - Users:", users, "Chains:", chainCount, "Trades:", totalTrades, "Volume:", totalVolume);

    return NextResponse.json({
      users,
      chainCount,
      totalTrades,
      totalVolume,
    });
  } catch (error) {
    console.error("Error fetching DEX stats:", error);
    return NextResponse.json(
      { error: "Failed to load DEX statistics" },
      { status: 500 }
    );
  }
}
