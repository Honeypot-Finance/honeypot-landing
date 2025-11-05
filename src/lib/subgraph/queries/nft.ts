/**
 * NFT Subgraph Queries
 *
 * Queries for NFT wallet holdings and staking data
 */

import type { ChainId } from '@/config/chains';
import { queryMultiChain } from '../client';
import { aggregateMultiChainData } from '../utils';
import { getChainsForSubgraph } from '@/config/subgraphEndpoints';

// ============================================================================
// Types
// ============================================================================

export interface NFT {
  id: string;
  tokenId: string;
}

export interface NFTWithChain extends NFT {
  chainId: ChainId;
  chainName: string;
}

export interface StakedNFT {
  id: string;
  tokenId: string;
  status: string;
  burned: boolean;
}

export interface StakedNFTWithChain extends StakedNFT {
  chainId: ChainId;
  chainName: string;
}

// ============================================================================
// GraphQL Queries
// ============================================================================

const USER_NFTS_QUERY = `
  query GetUserNFTs($owner: Bytes!) {
    nfts(where: { owner: $owner }) {
      id
      tokenId
    }
  }
`;

const USER_STAKED_NFTS_QUERY = `
  query GetUserStakedNFTs($owner: Bytes!) {
    stakes(where: { owner: $owner }) {
      id
      tokenId
      status
      burned
    }
  }
`;

// ============================================================================
// Query Functions
// ============================================================================

/**
 * Get user's wallet NFTs across all chains
 */
export async function getUserNFTs(
  userAddress: string
): Promise<NFTWithChain[]> {
  const chains = getChainsForSubgraph('nft');

  if (chains.length === 0) {
    console.warn('No NFT subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ nfts: NFT[] }>(
    chains,
    'nft',
    USER_NFTS_QUERY,
    { owner: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  // Transform to typed data with chain info
  const allNFTs: NFTWithChain[] = [];

  aggregated.success.forEach((chainResult) => {
    const nfts = chainResult.data.nfts || [];
    nfts.forEach((nft) => {
      allNFTs.push({
        ...nft,
        chainId: chainResult.chainId,
        chainName: chainResult.chainName,
      });
    });
  });

  return allNFTs;
}

/**
 * Get user's staked NFTs across all chains
 */
export async function getUserStakedNFTs(
  userAddress: string
): Promise<StakedNFTWithChain[]> {
  const chains = getChainsForSubgraph('nft-staking');

  if (chains.length === 0) {
    console.warn('No NFT staking subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ stakes: StakedNFT[] }>(
    chains,
    'nft-staking',
    USER_STAKED_NFTS_QUERY,
    { owner: userAddress.toLowerCase() }
  );

  const aggregated = aggregateMultiChainData(results);

  // Transform to typed data with chain info
  const allStakedNFTs: StakedNFTWithChain[] = [];

  aggregated.success.forEach((chainResult) => {
    const stakes = chainResult.data.stakes || [];
    stakes.forEach((stake) => {
      allStakedNFTs.push({
        ...stake,
        chainId: chainResult.chainId,
        chainName: chainResult.chainName,
      });
    });
  });

  return allStakedNFTs;
}

/**
 * Get all user NFT data (wallet + staked)
 */
export async function getUserAllNFTs(userAddress: string): Promise<{
  walletNFTs: NFTWithChain[];
  stakedNFTs: StakedNFTWithChain[];
}> {
  const [walletNFTs, stakedNFTs] = await Promise.all([
    getUserNFTs(userAddress),
    getUserStakedNFTs(userAddress),
  ]);

  return {
    walletNFTs,
    stakedNFTs,
  };
}
