import React from 'react';
import Image from 'next/image';
import { getTokenInfo, type ChainId } from '@/config/chains';
import './TokenLogo.scss';

interface TokenLogoProps {
  /** Token contract address */
  address: string;
  /** Chain ID where the token exists */
  chainId: ChainId;
  /** Token symbol (optional, used for placeholder text) */
  symbol?: string;
  /** Size of the logo in pixels (default: 24) */
  size?: number;
  /** Additional CSS class name */
  className?: string;
}

/**
 * TokenLogo Component
 *
 * Displays a token logo with automatic fallback to a placeholder if no logo is available.
 * Fetches token metadata from chain configuration and shows either:
 * - Token logo image if available
 * - Placeholder with token symbol if no logo found
 *
 * @example
 * ```tsx
 * <TokenLogo address="0x..." chainId={80094} symbol="HONEY" size={32} />
 * ```
 */
export default function TokenLogo({
  address,
  chainId,
  symbol,
  size = 24,
  className = '',
}: TokenLogoProps) {
  const tokenInfo = getTokenInfo(chainId, address);
  const logoURI = tokenInfo?.logoURI;
  const tokenSymbol = symbol || tokenInfo?.symbol || '?';

  // If logo exists, show image
  if (logoURI) {
    return (
      <div
        className={`token-logo ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={logoURI}
          alt={tokenSymbol}
          width={size}
          height={size}
          className="token-logo-image"
        />
      </div>
    );
  }

  // Otherwise show placeholder with "?"
  return (
    <div
      className={`token-logo token-logo-placeholder ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.5 }}
      title={tokenSymbol}
    >
      ?
    </div>
  );
}
