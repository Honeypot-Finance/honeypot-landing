import React from 'react';
import Image from 'next/image';
import { LiquidityPositionWithChain } from '@/lib/subgraph/queries/dex';
import TokenLogo from '@/components/TokenLogo';
import { DEX_DOMAIN } from '@/config/domains';
import { getChainMetadata, formatUSD } from '@/lib/subgraph';

interface LiquidityCardProps {
  position: LiquidityPositionWithChain;
}

export const LiquidityCard: React.FC<LiquidityCardProps> = ({ position }) => {
  const getChainIcon = (chainId: number) => {
    const chainMeta = getChainMetadata(chainId);
    return chainMeta?.iconUrl || '/images/chains/berachain.png';
  };

  return (
    <a
      href={`${DEX_DOMAIN}pool-detail/${position.poolId}?chainid=${position.chainId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="liquidity-card-link"
    >
      <div className="liquidity-card">
        <div className="liquidity-header">
          <div className="liquidity-pair">
            <span>
              {position.token0Symbol}/{position.token1Symbol}
            </span>
          </div>
          <div className="chain-icon-wrapper" title={position.chainName}>
            <Image
              src={getChainIcon(position.chainId)}
              alt={position.chainName}
              width={24}
              height={24}
              style={{ height: 'auto' }}
              className="chain-icon"
            />
          </div>
        </div>
        <div className="liquidity-details">
          <div className="liquidity-info">
            <span className="info-label">Liquidity:</span>
            <span className="info-value">
              {formatUSD(position.liquidityUSD)}
            </span>
          </div>
        </div>

        <div className="position-amounts">
          <div className="amount-row">
            <div className="amount-token">
              <TokenLogo
                address={position.token0Address}
                chainId={position.chainId}
                symbol={position.token0Symbol}
                size={20}
                className="amount-token-icon"
              />
              <span className="amount-label">{position.token0Symbol}:</span>
            </div>
            <span className="amount-value">
              {parseFloat(position.depositedToken0).toFixed(4)}
            </span>
          </div>
          <div className="amount-row">
            <div className="amount-token">
              <TokenLogo
                address={position.token1Address}
                chainId={position.chainId}
                symbol={position.token1Symbol}
                size={20}
                className="amount-token-icon"
              />
              <span className="amount-label">{position.token1Symbol}:</span>
            </div>
            <span className="amount-value">
              {parseFloat(position.depositedToken1).toFixed(4)}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
