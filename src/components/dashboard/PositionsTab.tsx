import React from 'react';
import {
  LiquidityPositionWithChain,
  VaultShareWithChain,
} from '@/lib/subgraph/queries/dex';
import { LiquidityCard } from './LiquidityCard';
import { VaultCard } from './VaultCard';
import { DEX_DOMAIN } from '@/config/domains';

interface PositionsTabProps {
  positions: LiquidityPositionWithChain[] | null;
  positionsLoading: boolean;
  vaultShares: VaultShareWithChain[] | null;
  vaultSharesLoading: boolean;
  liquiditySubTab: 'concentrated' | 'vaults';
  setLiquiditySubTab: (tab: 'concentrated' | 'vaults') => void;
}

export const PositionsTab: React.FC<PositionsTabProps> = ({
  positions,
  positionsLoading,
  vaultShares,
  vaultSharesLoading,
  liquiditySubTab,
  setLiquiditySubTab,
}) => {
  return (
    <>
      {/* Your Earning Assets Section */}
      <div className="liquidity-section">
        <div className="section-header">
          <div className="section-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 2C9 2 6 2 6 5V7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18V5C18 2 15 2 15 2H9Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M6 7V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Your Earning Assets
          </div>
          <div className="section-subtitle">
            Your current liquidity pools and vault positions
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="dex-sub-tabs">
          <button
            className={`sub-tab ${liquiditySubTab === 'concentrated' ? 'active' : ''}`}
            onClick={() => setLiquiditySubTab('concentrated')}
          >
            Concentrated Liquidity
          </button>
          <button
            className={`sub-tab ${liquiditySubTab === 'vaults' ? 'active' : ''}`}
            onClick={() => setLiquiditySubTab('vaults')}
          >
            Automated Vaults
          </button>
        </div>

      {liquiditySubTab === 'concentrated' && (
        <>
          {positionsLoading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading positions...</p>
            </div>
          ) : positions && positions.length > 0 ? (
            <>
              <div className="liquidity-cards">
                {positions.map((position) => (
                  <LiquidityCard
                    key={`${position.chainId}-${position.poolId}`}
                    position={position}
                  />
                ))}
              </div>
              <div className="see-more-container">
                <a
                  href={`${DEX_DOMAIN}pools?my=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
                <path
                  d="M9 2C9 2 6 2 6 5V7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18V5C18 2 15 2 15 2H9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <h3>No Liquidity Positions</h3>
              <p>You don&apos;t have any active liquidity positions yet.</p>
            </div>
          )}
        </>
      )}

      {liquiditySubTab === 'vaults' && (
        <>
          {vaultSharesLoading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading vault positions...</p>
            </div>
          ) : vaultShares && vaultShares.length > 0 ? (
            <>
              <div className="liquidity-cards">
                {vaultShares.map((share) => (
                  <VaultCard key={share.id} share={share} />
                ))}
              </div>
              <div className="see-more-container">
                <a
                  href={`${DEX_DOMAIN}pools?opentab=vault&my=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <h3>No Vault Positions</h3>
              <p>You don&apos;t have any automated vault positions yet.</p>
            </div>
          )}
        </>
      )}
      </div>
    </>
  );
};
