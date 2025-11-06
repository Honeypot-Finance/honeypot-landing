import React from 'react';
import Image from 'next/image';
import { VaultShareWithChain } from '@/lib/subgraph/queries/dex';
import TokenLogo from '@/components/TokenLogo';
import { DEX_DOMAIN } from '@/config/domains';
import { getChainMetadata } from '@/lib/subgraph';

interface VaultCardProps {
  share: VaultShareWithChain;
}

export const VaultCard: React.FC<VaultCardProps> = ({ share }) => {
  const vaultAddress = share.id.split('-')[0];

  const getChainIcon = (chainId: number) => {
    const chainMeta = getChainMetadata(chainId);
    return chainMeta?.iconUrl || '/images/chains/berachain.png';
  };

  return (
    <a
      href={`${DEX_DOMAIN}vault/${vaultAddress}?chainid=${share.chainId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="liquidity-card-link"
    >
      <div className="liquidity-card">
        <div className="liquidity-header">
          <div className="liquidity-pair">
            <span>
              {share.tokenASymbol}/{share.tokenBSymbol}
            </span>
          </div>
          <div className="chain-icon-wrapper" title={share.chainName}>
            <Image
              src={getChainIcon(share.chainId)}
              alt={share.chainName}
              width={24}
              height={24}
              style={{ height: 'auto' }}
              className="chain-icon"
            />
          </div>
        </div>

        <div className="position-amounts">
          <div className="amount-row">
            <div className="amount-token">
              <TokenLogo
                address={share.vault.tokenA}
                chainId={share.chainId}
                symbol={share.tokenASymbol}
                size={20}
                className="amount-token-icon"
              />
              <span className="amount-label">{share.tokenASymbol}:</span>
            </div>
            <span className="amount-value">{share.userAmount0}</span>
          </div>
          <div className="amount-row">
            <div className="amount-token">
              <TokenLogo
                address={share.vault.tokenB}
                chainId={share.chainId}
                symbol={share.tokenBSymbol}
                size={20}
                className="amount-token-icon"
              />
              <span className="amount-label">{share.tokenBSymbol}:</span>
            </div>
            <span className="amount-value">{share.userAmount1}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
