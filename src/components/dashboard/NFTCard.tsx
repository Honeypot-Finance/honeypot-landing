import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NFTWithChain, StakedNFTWithChain } from '@/lib/subgraph/queries/nft';
import { getChainMetadata } from '@/lib/subgraph';
import { NFT_DOMAIN, NFT_METADATA_BASE_URL, IPFS_GATEWAY } from '@/config/domains';

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

interface NFTCardProps {
  nft: NFTWithChain | StakedNFTWithChain;
  type: 'wallet' | 'staked';
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft, type }) => {
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getChainIcon = (chainId: number) => {
    const chainMeta = getChainMetadata(chainId);
    return chainMeta?.iconUrl || '/images/chains/berachain.png';
  };

  const isStakedNFT = (
    nft: NFTWithChain | StakedNFTWithChain
  ): nft is StakedNFTWithChain => {
    return 'status' in nft && 'burned' in nft;
  };

  const stakedNFT = isStakedNFT(nft) ? nft : null;
  const isStakedOrBurned = stakedNFT !== null;
  const hoverText = isStakedOrBurned ? 'Claim Reward' : 'Stake';

  // Fetch NFT metadata
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const metadataUrl = `${NFT_METADATA_BASE_URL}${nft.tokenId}`;
        const response = await fetch(metadataUrl);
        const data: NFTMetadata = await response.json();
        setMetadata(data);

        // Convert IPFS URI to HTTP URL
        if (data.image) {
          const ipfsHash = data.image.replace('ipfs://', '');
          const httpUrl = `${IPFS_GATEWAY}${ipfsHash}`;
          setImageUrl(httpUrl);
        }
      } catch (error) {
        console.error('Failed to fetch NFT metadata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [nft.tokenId]);

  return (
    <a
      href={`${NFT_DOMAIN}staking`}
      target="_blank"
      rel="noopener noreferrer"
      className="nft-card-link"
    >
      <div className="nft-card">
      <div className="nft-image-container">
        {/* NFT Image or Placeholder */}
        {loading ? (
          <div className="nft-image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={metadata?.name || `NFT #${nft.tokenId}`}
            fill
            className="nft-image"
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        ) : (
          <div className="nft-image-placeholder">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}

        {/* Hover overlay with action text */}
        <div className="nft-hover-overlay">
          <span className="nft-hover-text">{hoverText}</span>
        </div>

        {/* Chain badge */}
        <div className="nft-chain-badge">
          <Image
            src={getChainIcon(nft.chainId)}
            alt={nft.chainName}
            width={16}
            height={16}
            className="chain-icon"
          />
        </div>

        {/* Status badges */}
        {stakedNFT && (
          <div className="nft-status-badges">
            {stakedNFT.burned ? (
              <span className="nft-badge nft-badge-burned">Burned</span>
            ) : (
              <span className="nft-badge nft-badge-staked">Staked</span>
            )}
          </div>
        )}
      </div>

      <div className="nft-info">
        <div className="nft-id">#{nft.tokenId}</div>
        {stakedNFT && stakedNFT.status && (
          <div className="nft-status-text">{stakedNFT.status}</div>
        )}
      </div>
      </div>
    </a>
  );
};
