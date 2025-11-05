import { gql } from 'graphql-request';
import { queryGhostlogsWithRetry } from '../client';

export interface Receipt {
  claimableAt: string; // Timestamp when receipt can be claimed
  id: string; // Unique identifier
  isClaimed: boolean; // Has it been claimed
  receiptId: string; // Receipt number
  receiptWeight: string; // Weight value
  token: string; // Token address
  user: string; // User wallet address
}

export interface ReceiptsResponse {
  receipts: {
    items: Receipt[];
  };
}

const RECEIPTS_QUERY = gql`
  query ReceiptsList($user: String!) {
    receipts(where: { user: $user }) {
      items {
        claimableAt
        id
        isClaimed
        receiptId
        receiptWeight
        token
        user
      }
    }
  }
`;

/**
 * Fetch user's receipt data from All In One Vault
 * @param userAddress - User's wallet address
 * @returns Array of receipts
 */
export async function getUserReceipts(userAddress: string): Promise<Receipt[]> {
  try {
    const result = await queryGhostlogsWithRetry<ReceiptsResponse>(
      RECEIPTS_QUERY,
      { user: userAddress.toLowerCase() }
    );

    return result.receipts?.items || [];
  } catch (error) {
    console.error('Failed to fetch user receipts:', error);
    return [];
  }
}

/**
 * Get statistics from receipts
 */
export function getReceiptStats(receipts: Receipt[]) {
  const totalReceipts = receipts.length;
  const claimedReceipts = receipts.filter(r => r.isClaimed).length;
  const unclaimedReceipts = totalReceipts - claimedReceipts;
  const totalWeight = receipts.reduce((sum, r) => sum + parseFloat(r.receiptWeight), 0);

  return {
    totalReceipts,
    claimedReceipts,
    unclaimedReceipts,
    totalWeight,
  };
}

/**
 * Check if receipt is claimable
 */
export function isReceiptClaimable(receipt: Receipt): boolean {
  if (receipt.isClaimed) return false;

  const claimableTimestamp = parseInt(receipt.claimableAt);
  const now = Math.floor(Date.now() / 1000);

  return now >= claimableTimestamp;
}

/**
 * Format timestamp to readable date
 */
export function formatClaimableDate(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
