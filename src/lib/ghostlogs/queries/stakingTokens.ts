import { gql } from 'graphql-request';

export interface SupportReceipt {
  id: string; // Token contract address
  weight: string; // Weight value for this token
}

export interface TokenSupportResponse {
  supportReceipts: {
    items: SupportReceipt[];
  };
}

const TOKEN_SUPPORT_QUERY = gql`
  query TokenSupportQuery {
    supportReceipts {
      items {
        id
        weight
      }
    }
  }
`;

// List of blocked tokens
const TOKEN_BLOCK_LIST = ['0x2bde2638045e73dce5c7b0e415d07d2884e39857'];

/**
 * Fetch supported staking tokens
 * @returns Array of support receipts (filtered to remove blocked tokens)
 */
export async function getSupportedTokens(): Promise<SupportReceipt[]> {
  try {
    // Note: This endpoint uses a different ghostlogs endpoint
    const endpoint = 'https://api.ghostlogs.xyz/gg/pub/4d9fda23-4a22-4b3a-9c0f-37077d3edf84';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: TOKEN_SUPPORT_QUERY,
      }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL Errors:', result.errors);
      throw new Error(result.errors[0]?.message || 'GraphQL query failed');
    }

    if (!result.data) {
      throw new Error('No data returned from Ghostlogs');
    }

    const tokens = result.data.supportReceipts?.items || [];

    // Filter out blocked tokens
    return tokens.filter(
      (token: SupportReceipt) =>
        !TOKEN_BLOCK_LIST.includes(token.id.toLowerCase())
    );
  } catch (error) {
    console.error('Failed to fetch supported tokens:', error);
    return [];
  }
}

/**
 * Get total weight of all supported tokens
 */
export function getTotalWeight(tokens: SupportReceipt[]): number {
  return tokens.reduce((sum, token) => sum + parseFloat(token.weight), 0);
}

/**
 * Format weight for display
 */
export function formatTokenWeight(weight: string): string {
  const num = parseFloat(weight);
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
