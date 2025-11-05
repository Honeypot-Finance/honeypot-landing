import React from 'react';
import { NFTWithChain, StakedNFTWithChain } from '@/lib/subgraph/queries/nft';
import { NFTCard } from './NFTCard';
import { MAGIC_EDEN_URL, BERACHAIN_BRIDGE_URL } from '@/config/domains';

interface NFTTabProps {
  walletNFTs: NFTWithChain[] | null;
  stakedNFTs: StakedNFTWithChain[] | null;
  isLoading: boolean;
}

export const NFTTab: React.FC<NFTTabProps> = ({
  walletNFTs,
  stakedNFTs,
  isLoading,
}) => {
  // Combine all NFTs
  const allNFTs = [
    ...(walletNFTs || []),
    ...(stakedNFTs || []),
  ];

  return (
    <>
      {/* NFT Section */}
      <div className="liquidity-section">
        <div className="section-header">
          <div className="section-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                fill="currentColor"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            Your NFT Collection
          </div>
          <div className="section-subtitle">
            Your wallet and staked NFTs
          </div>
        </div>

        {isLoading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading NFTs...</p>
          </div>
        ) : allNFTs.length > 0 ? (
          <>
            <div className="nft-grid">
              {allNFTs.map((nft) => (
                <NFTCard
                  key={`${nft.chainId}-${nft.id}`}
                  nft={nft}
                  type={'status' in nft ? 'staked' : 'wallet'}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="nft-action-buttons">
              <a
                href={MAGIC_EDEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nft-action-btn nft-action-btn-primary"
              >
                Buy from ME
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href={BERACHAIN_BRIDGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nft-action-btn nft-action-btn-secondary"
              >
                Bridge to Berachain
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              className="empty-icon"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <polyline
                points="21 15 16 10 5 21"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <h3>No NFTs</h3>
            <p>You don&apos;t have any NFTs yet.</p>
          </div>
        )}
      </div>
    </>
  );
};
