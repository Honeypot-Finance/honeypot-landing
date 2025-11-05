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
          <div className="section-title" title="Your wallet and staked NFTs">
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
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
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
          <div className="empty-state nft-empty">
            <div className="empty-icon-wrapper">
              <div className="empty-icon-bg"></div>
              <svg
                className="empty-icon"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <path
                  d="M21 15L16 10L5 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="empty-content">
              <h3>No NFTs in Wallet</h3>
              <p>
                You don&apos;t have any Honeypot NFTs yet. Get NFTs to stake and earn rewards in the All In One Vault!
              </p>
              <div className="empty-cta-group">
                <button
                  className="empty-cta primary"
                  onClick={() => window.open(MAGIC_EDEN_URL, "_blank", "noopener,noreferrer")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M9 9L15 15M15 9L9 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Buy from Magic Eden
                </button>
                <button
                  className="empty-cta secondary"
                  onClick={() => window.open(BERACHAIN_BRIDGE_URL, "_blank", "noopener,noreferrer")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Bridge to Berachain
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
