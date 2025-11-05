/**
 * Subgraph Endpoints Configuration
 *
 * Configure subgraph endpoints for each chain.
 * Empty string means that chain doesn't have this subgraph deployed.
 */

import { ChainId } from "./chains";

export type SubgraphType = "dex" | "nft" | "nft-staking" | "points" | "leaderboard" | "vault";

export interface ChainEndpoints {
  dex: string;
  nft: string;
  "nft-staking": string;
  points: string;
  leaderboard: string;
  vault: string;
}

export interface MultiChainSubgraphConfig {
  [chainId: number]: ChainEndpoints;
}

// TODO: Update these with your actual subgraph endpoints
// Empty string means that chain doesn't have this subgraph deployed
export const SUBGRAPH_ENDPOINTS: MultiChainSubgraphConfig = {
  // Berachain Mainnet
  80094: {
    dex: "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/hpot-algebra-core/2.4.0/gn",
    nft: "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/honeygenesis-berachain/1.0.2/gn",
    "nft-staking":
      "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/nft-staking-berachain/1.1.0/gn",
    points: "",
    leaderboard: "",
    vault: "",
  },

  // BNB Smart Chain
  56: {
    dex: "https://api.goldsky.com/api/public/project_cm78242tjtmme01uvcbkaay27/subgraphs/hpot-algebra-bsc/1.0.3/gn",
    nft: "",
    "nft-staking": "",
    points: "",
    leaderboard: "",
    vault: "",
  },

  // Add more chains as needed
};

/**
 * Get subgraph endpoint for specific chain and type
 * @param chainId - The blockchain network ID
 * @param type - The subgraph type
 * @returns Endpoint URL or null if not available
 */
export function getSubgraphEndpoint(
  chainId: ChainId,
  type: SubgraphType
): string | null {
  const chainEndpoints = SUBGRAPH_ENDPOINTS[chainId];

  if (!chainEndpoints) {
    console.warn(`No subgraph endpoints configured for chain ${chainId}`);
    return null;
  }

  const endpoint = chainEndpoints[type];

  if (!endpoint || endpoint === "") {
    console.warn(
      `No ${type} subgraph endpoint configured for chain ${chainId}`
    );
    return null;
  }

  return endpoint;
}

/**
 * Get all available chain IDs that have at least one subgraph configured
 */
export function getAvailableChains(): ChainId[] {
  return Object.keys(SUBGRAPH_ENDPOINTS).map(Number);
}

/**
 * Check if a specific subgraph is available on a chain
 */
export function isSubgraphAvailable(
  chainId: ChainId,
  type: SubgraphType
): boolean {
  const endpoint = getSubgraphEndpoint(chainId, type);
  return endpoint !== null && endpoint !== "";
}

/**
 * Get all chains where a specific subgraph type is deployed
 */
export function getChainsForSubgraph(type: SubgraphType): ChainId[] {
  return getAvailableChains().filter((chainId) =>
    isSubgraphAvailable(chainId, type)
  );
}
