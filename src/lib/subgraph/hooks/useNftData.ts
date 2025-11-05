/**
 * React Hooks for NFT Data
 *
 * Custom hooks for fetching NFT wallet and staking data
 */

import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import {
  getUserNFTs,
  getUserStakedNFTs,
  getUserAllNFTs,
  type NFTWithChain,
  type StakedNFTWithChain,
} from '../queries/nft';

interface UseDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to fetch user's wallet NFTs
 */
export function useUserNFTs(): UseDataResult<NFTWithChain[]> {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<NFTWithChain[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (!address || !isConnected) {
      setData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await getUserNFTs(address);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch NFTs'));
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address, isConnected]);

  return { data, isLoading, error, refetch: fetchData };
}

/**
 * Hook to fetch user's staked NFTs
 */
export function useUserStakedNFTs(): UseDataResult<StakedNFTWithChain[]> {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<StakedNFTWithChain[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (!address || !isConnected) {
      setData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await getUserStakedNFTs(address);
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to fetch staked NFTs')
      );
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address, isConnected]);

  return { data, isLoading, error, refetch: fetchData };
}

/**
 * Hook to fetch all user NFT data (wallet + staked)
 */
export function useUserAllNFTs(): UseDataResult<{
  walletNFTs: NFTWithChain[];
  stakedNFTs: StakedNFTWithChain[];
}> {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState<{
    walletNFTs: NFTWithChain[];
    stakedNFTs: StakedNFTWithChain[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (!address || !isConnected) {
      setData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await getUserAllNFTs(address);
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to fetch NFT data')
      );
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address, isConnected]);

  return { data, isLoading, error, refetch: fetchData };
}
