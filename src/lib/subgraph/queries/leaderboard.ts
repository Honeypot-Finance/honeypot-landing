import { gql } from 'graphql-request';
import { queryMultiChain } from '../client';
import { getChainsForSubgraph } from '@/config/subgraphEndpoints';

// Account type from DEX subgraph
export interface DexAccount {
  id: string; // wallet address
  swapCount: string;
  totalSpendUSD: string;
  holdingPoolCount: string;
  memeTokenHoldingCount: string;
  platformTxCount: string;
  participateCount: string;
  pot2PumpLaunchCount: string;
  totalDepositPot2pumpUSD: string;
}

export interface DexAccountWithChain extends DexAccount {
  chainId: number;
}

// Query to get top accounts ordered by totalSpendUSD
const DEX_ACCOUNTS_QUERY = gql`
  query DexAccounts($first: Int!) {
    accounts(
      first: $first
      orderBy: totalSpendUSD
      orderDirection: desc
    ) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Query to get top accounts ordered by pot2PumpLaunchCount
const LAUNCHES_QUERY = gql`
  query LaunchesAccounts($first: Int!) {
    accounts(
      first: $first
      orderBy: pot2PumpLaunchCount
      orderDirection: desc
    ) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Query to get top accounts ordered by participateCount
const PARTICIPATIONS_QUERY = gql`
  query ParticipationsAccounts($first: Int!) {
    accounts(
      first: $first
      orderBy: participateCount
      orderDirection: desc
    ) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Query to get top accounts ordered by totalDepositPot2pumpUSD
const DEPOSITS_QUERY = gql`
  query DepositsAccounts($first: Int!) {
    accounts(
      first: $first
      orderBy: totalDepositPot2pumpUSD
      orderDirection: desc
    ) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Query to get top accounts ordered by swapCount
const SWAPS_QUERY = gql`
  query SwapsAccounts($first: Int!) {
    accounts(
      first: $first
      orderBy: swapCount
      orderDirection: desc
    ) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Query to get specific user's account data
const USER_DEX_ACCOUNT_QUERY = gql`
  query UserDexAccount($address: ID!) {
    accounts(where: { id: $address }) {
      id
      swapCount
      totalSpendUSD
      holdingPoolCount
      memeTokenHoldingCount
      platformTxCount
      participateCount
      pot2PumpLaunchCount
      totalDepositPot2pumpUSD
    }
  }
`;

// Get top DEX accounts by volume from all chains
export async function getTopDexAccountsByVolume(
  limit: number = 1000
): Promise<DexAccountWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    DEX_ACCOUNTS_QUERY,
    { first: limit }
  );

  // Aggregate accounts by address across all chains
  const accountMap = new Map<string, DexAccountWithChain>();

  for (const result of results) {
    if (result.data && result.data.accounts) {
      result.data.accounts.forEach((account) => {
        const accountId = account.id.toLowerCase();

        if (!accountMap.has(accountId)) {
          accountMap.set(accountId, {
            ...account,
            chainId: result.chainId,
          });
        } else {
          // Aggregate data from multiple chains
          const existing = accountMap.get(accountId)!;
          existing.totalSpendUSD = (
            parseFloat(existing.totalSpendUSD) + parseFloat(account.totalSpendUSD)
          ).toString();
          existing.swapCount = (
            parseInt(existing.swapCount) + parseInt(account.swapCount)
          ).toString();
          existing.pot2PumpLaunchCount = (
            parseInt(existing.pot2PumpLaunchCount) + parseInt(account.pot2PumpLaunchCount)
          ).toString();
          existing.participateCount = (
            parseInt(existing.participateCount) + parseInt(account.participateCount)
          ).toString();
          existing.totalDepositPot2pumpUSD = (
            parseFloat(existing.totalDepositPot2pumpUSD) + parseFloat(account.totalDepositPot2pumpUSD)
          ).toString();
        }
      });
    }
  }

  // Convert map to array and sort by totalSpendUSD descending
  const allAccounts = Array.from(accountMap.values());
  allAccounts.sort((a, b) => parseFloat(b.totalSpendUSD) - parseFloat(a.totalSpendUSD));

  return allAccounts;
}

// Get top DEX accounts by swap count from all chains
export async function getTopDexAccountsBySwaps(
  limit: number = 1000
): Promise<DexAccountWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    SWAPS_QUERY,
    { first: limit }
  );

  // Aggregate accounts by address across all chains
  const accountMap = new Map<string, DexAccountWithChain>();

  for (const result of results) {
    if (result.data && result.data.accounts) {
      result.data.accounts.forEach((account) => {
        const accountId = account.id.toLowerCase();

        if (!accountMap.has(accountId)) {
          accountMap.set(accountId, {
            ...account,
            chainId: result.chainId,
          });
        } else {
          // Aggregate data from multiple chains
          const existing = accountMap.get(accountId)!;
          existing.totalSpendUSD = (
            parseFloat(existing.totalSpendUSD) + parseFloat(account.totalSpendUSD)
          ).toString();
          existing.swapCount = (
            parseInt(existing.swapCount) + parseInt(account.swapCount)
          ).toString();
          existing.pot2PumpLaunchCount = (
            parseInt(existing.pot2PumpLaunchCount) + parseInt(account.pot2PumpLaunchCount)
          ).toString();
          existing.participateCount = (
            parseInt(existing.participateCount) + parseInt(account.participateCount)
          ).toString();
          existing.totalDepositPot2pumpUSD = (
            parseFloat(existing.totalDepositPot2pumpUSD) + parseFloat(account.totalDepositPot2pumpUSD)
          ).toString();
        }
      });
    }
  }

  // Convert map to array and sort by swapCount descending
  const allAccounts = Array.from(accountMap.values());
  allAccounts.sort((a, b) => parseInt(b.swapCount) - parseInt(a.swapCount));

  return allAccounts;
}

// Get specific user's DEX account data
export async function getUserDexAccount(
  userAddress: string
): Promise<DexAccountWithChain | null> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return null;
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    USER_DEX_ACCOUNT_QUERY,
    { address: userAddress.toLowerCase() }
  );

  // Aggregate user's data from all chains
  let aggregatedAccount: DexAccountWithChain | null = null;

  for (const result of results) {
    if (result.data && result.data.accounts && result.data.accounts.length > 0) {
      const account = result.data.accounts[0];

      console.log(`Chain ${result.chainId} data for user:`, {
        pot2PumpLaunchCount: account.pot2PumpLaunchCount,
        participateCount: account.participateCount,
        totalDepositPot2pumpUSD: account.totalDepositPot2pumpUSD,
      });

      if (!aggregatedAccount) {
        aggregatedAccount = {
          ...account,
          chainId: result.chainId,
        };
      } else {
        // Aggregate data from multiple chains
        aggregatedAccount.totalSpendUSD = (
          parseFloat(aggregatedAccount.totalSpendUSD) +
          parseFloat(account.totalSpendUSD)
        ).toString();
        aggregatedAccount.swapCount = (
          parseInt(aggregatedAccount.swapCount) + parseInt(account.swapCount)
        ).toString();
        aggregatedAccount.holdingPoolCount = (
          parseInt(aggregatedAccount.holdingPoolCount) +
          parseInt(account.holdingPoolCount)
        ).toString();
        aggregatedAccount.memeTokenHoldingCount = (
          parseInt(aggregatedAccount.memeTokenHoldingCount) +
          parseInt(account.memeTokenHoldingCount)
        ).toString();
        aggregatedAccount.platformTxCount = (
          parseInt(aggregatedAccount.platformTxCount) +
          parseInt(account.platformTxCount)
        ).toString();
        aggregatedAccount.participateCount = (
          parseInt(aggregatedAccount.participateCount) +
          parseInt(account.participateCount)
        ).toString();
        aggregatedAccount.pot2PumpLaunchCount = (
          parseInt(aggregatedAccount.pot2PumpLaunchCount) +
          parseInt(account.pot2PumpLaunchCount)
        ).toString();
        aggregatedAccount.totalDepositPot2pumpUSD = (
          parseFloat(aggregatedAccount.totalDepositPot2pumpUSD) +
          parseFloat(account.totalDepositPot2pumpUSD)
        ).toString();
      }
    }
  }

  console.log('Final aggregated account:', {
    pot2PumpLaunchCount: aggregatedAccount?.pot2PumpLaunchCount,
    participateCount: aggregatedAccount?.participateCount,
    totalDepositPot2pumpUSD: aggregatedAccount?.totalDepositPot2pumpUSD,
  });

  return aggregatedAccount;
}

// Get top accounts by pot2pump launches from all chains
export async function getTopAccountsByLaunches(
  limit: number = 1000
): Promise<DexAccountWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    LAUNCHES_QUERY,
    { first: limit }
  );

  // Aggregate accounts by address across all chains
  const accountMap = new Map<string, DexAccountWithChain>();

  for (const result of results) {
    if (result.data && result.data.accounts) {
      result.data.accounts.forEach((account) => {
        const accountId = account.id.toLowerCase();

        if (!accountMap.has(accountId)) {
          accountMap.set(accountId, {
            ...account,
            chainId: result.chainId,
          });
        } else {
          // Aggregate data from multiple chains
          const existing = accountMap.get(accountId)!;
          existing.pot2PumpLaunchCount = (
            parseInt(existing.pot2PumpLaunchCount) + parseInt(account.pot2PumpLaunchCount)
          ).toString();
          existing.participateCount = (
            parseInt(existing.participateCount) + parseInt(account.participateCount)
          ).toString();
          existing.totalDepositPot2pumpUSD = (
            parseFloat(existing.totalDepositPot2pumpUSD) + parseFloat(account.totalDepositPot2pumpUSD)
          ).toString();
          existing.totalSpendUSD = (
            parseFloat(existing.totalSpendUSD) + parseFloat(account.totalSpendUSD)
          ).toString();
          existing.swapCount = (
            parseInt(existing.swapCount) + parseInt(account.swapCount)
          ).toString();
        }
      });
    }
  }

  // Convert map to array and sort by pot2PumpLaunchCount descending
  const allAccounts = Array.from(accountMap.values());
  allAccounts.sort((a, b) => parseInt(b.pot2PumpLaunchCount) - parseInt(a.pot2PumpLaunchCount));

  return allAccounts;
}

// Get top accounts by pot2pump participations from all chains
export async function getTopAccountsByParticipations(
  limit: number = 1000
): Promise<DexAccountWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    PARTICIPATIONS_QUERY,
    { first: limit }
  );

  // Aggregate accounts by address across all chains
  const accountMap = new Map<string, DexAccountWithChain>();

  for (const result of results) {
    if (result.data && result.data.accounts) {
      result.data.accounts.forEach((account) => {
        const accountId = account.id.toLowerCase();

        if (!accountMap.has(accountId)) {
          accountMap.set(accountId, {
            ...account,
            chainId: result.chainId,
          });
        } else {
          // Aggregate data from multiple chains
          const existing = accountMap.get(accountId)!;
          existing.pot2PumpLaunchCount = (
            parseInt(existing.pot2PumpLaunchCount) + parseInt(account.pot2PumpLaunchCount)
          ).toString();
          existing.participateCount = (
            parseInt(existing.participateCount) + parseInt(account.participateCount)
          ).toString();
          existing.totalDepositPot2pumpUSD = (
            parseFloat(existing.totalDepositPot2pumpUSD) + parseFloat(account.totalDepositPot2pumpUSD)
          ).toString();
          existing.totalSpendUSD = (
            parseFloat(existing.totalSpendUSD) + parseFloat(account.totalSpendUSD)
          ).toString();
          existing.swapCount = (
            parseInt(existing.swapCount) + parseInt(account.swapCount)
          ).toString();
        }
      });
    }
  }

  // Convert map to array and sort by participateCount descending
  const allAccounts = Array.from(accountMap.values());
  allAccounts.sort((a, b) => parseInt(b.participateCount) - parseInt(a.participateCount));

  return allAccounts;
}

// Get top accounts by pot2pump total deposit from all chains
export async function getTopAccountsByDeposit(
  limit: number = 1000
): Promise<DexAccountWithChain[]> {
  const chains = getChainsForSubgraph('dex');

  if (chains.length === 0) {
    console.warn('No DEX subgraphs configured');
    return [];
  }

  const results = await queryMultiChain<{ accounts: DexAccount[] }>(
    chains,
    'dex',
    DEPOSITS_QUERY,
    { first: limit }
  );

  // Aggregate accounts by address across all chains
  const accountMap = new Map<string, DexAccountWithChain>();

  for (const result of results) {
    if (result.data && result.data.accounts) {
      result.data.accounts.forEach((account) => {
        const accountId = account.id.toLowerCase();

        if (!accountMap.has(accountId)) {
          accountMap.set(accountId, {
            ...account,
            chainId: result.chainId,
          });
        } else {
          // Aggregate data from multiple chains
          const existing = accountMap.get(accountId)!;
          existing.pot2PumpLaunchCount = (
            parseInt(existing.pot2PumpLaunchCount) + parseInt(account.pot2PumpLaunchCount)
          ).toString();
          existing.participateCount = (
            parseInt(existing.participateCount) + parseInt(account.participateCount)
          ).toString();
          existing.totalDepositPot2pumpUSD = (
            parseFloat(existing.totalDepositPot2pumpUSD) + parseFloat(account.totalDepositPot2pumpUSD)
          ).toString();
          existing.totalSpendUSD = (
            parseFloat(existing.totalSpendUSD) + parseFloat(account.totalSpendUSD)
          ).toString();
          existing.swapCount = (
            parseInt(existing.swapCount) + parseInt(account.swapCount)
          ).toString();
        }
      });
    }
  }

  // Convert map to array and sort by totalDepositPot2pumpUSD descending
  const allAccounts = Array.from(accountMap.values());
  allAccounts.sort((a, b) => parseFloat(b.totalDepositPot2pumpUSD) - parseFloat(a.totalDepositPot2pumpUSD));

  return allAccounts;
}
