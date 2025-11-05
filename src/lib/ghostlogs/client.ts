/**
 * Ghostlogs GraphQL Client
 *
 * Client for querying receipt data from the All In One Vault
 */

import { getSubgraphEndpoint } from '@/config/subgraphEndpoints';

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

/**
 * Generic GraphQL query function for Ghostlogs
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @param chainId - Chain ID (defaults to Berachain: 80094)
 * @returns Promise with typed response data
 * @throws Error if query fails
 */
export async function queryGhostlogs<T = any>(
  query: string,
  variables?: Record<string, any>,
  chainId: number = 80094
): Promise<T> {
  const endpoint = getSubgraphEndpoint(chainId, 'aiov');

  if (!endpoint) {
    throw new Error(
      `AIOV subgraph endpoint not available for chain ${chainId}`
    );
  }

  try {
    const response = await fetch(endpoint, {
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
      throw new Error('No data returned from Ghostlogs');
    }

    return result.data;
  } catch (error) {
    console.error('Ghostlogs query error:', error);
    throw error;
  }
}

/**
 * Query with retry logic for better reliability
 */
export async function queryGhostlogsWithRetry<T = any>(
  query: string,
  variables?: Record<string, any>,
  chainId: number = 80094,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await queryGhostlogs<T>(query, variables, chainId);
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
