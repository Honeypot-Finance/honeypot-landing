/**
 * Subgraph GraphQL Client
 *
 * This module provides a typed GraphQL client for querying multiple Honeypot subgraphs
 * across different blockchain networks.
 */

import { getSubgraphEndpoint } from '@/config/subgraphEndpoints';
import type { SubgraphType } from '@/config/subgraphEndpoints';
import type { ChainId } from '@/config/chains';

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

/**
 * Generic GraphQL query function
 * @param chainId - Blockchain network ID
 * @param subgraphType - Type of subgraph (dex, nft, points, etc.)
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @returns Promise with typed response data
 * @throws Error if endpoint is not available or query fails
 */
export async function querySubgraph<T = any>(
  chainId: ChainId,
  subgraphType: SubgraphType,
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const endpointUrl = getSubgraphEndpoint(chainId, subgraphType);

  if (!endpointUrl) {
    throw new Error(
      `Subgraph endpoint not available for chain ${chainId} and type ${subgraphType}`
    );
  }

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Enable caching for better performance
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: GraphQLResponse<T> = await response.json();

    if (result.errors) {
      console.error('GraphQL Errors:', result.errors);
      throw new Error(result.errors[0]?.message || 'GraphQL query failed');
    }

    if (!result.data) {
      throw new Error('No data returned from subgraph');
    }

    return result.data;
  } catch (error) {
    console.error('Subgraph query error:', error);
    throw error;
  }
}

/**
 * Query with retry logic for better reliability
 * @param chainId - Blockchain network ID
 * @param subgraphType - Type of subgraph
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @param maxRetries - Maximum number of retry attempts (default: 3)
 * @returns Promise with typed response data
 */
export async function querySubgraphWithRetry<T = any>(
  chainId: ChainId,
  subgraphType: SubgraphType,
  query: string,
  variables?: Record<string, any>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await querySubgraph<T>(chainId, subgraphType, query, variables);
    } catch (error) {
      lastError = error as Error;

      // Don't retry on the last attempt
      if (attempt < maxRetries - 1) {
        // Exponential backoff: wait 1s, 2s, 4s...
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
  }

  throw lastError || new Error('Query failed after retries');
}

/**
 * Query multiple chains in parallel
 * Useful for aggregating data across multiple networks
 * @param chainIds - Array of chain IDs to query
 * @param subgraphType - Type of subgraph
 * @param query - GraphQL query string
 * @param variables - Query variables (same for all chains)
 * @returns Promise with array of results (null for unavailable chains)
 */
export async function queryMultiChain<T = any>(
  chainIds: ChainId[],
  subgraphType: SubgraphType,
  query: string,
  variables?: Record<string, any>
): Promise<Array<{ chainId: ChainId; data: T | null; error?: string }>> {
  const promises = chainIds.map(async (chainId) => {
    try {
      const data = await querySubgraphWithRetry<T>(
        chainId,
        subgraphType,
        query,
        variables
      );
      return { chainId, data };
    } catch (error) {
      // Return null for unavailable/failed chains
      return {
        chainId,
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  });

  return Promise.all(promises);
}
