import React, { useState, useEffect } from "react";
import { useAccount, useReadContracts } from "wagmi";
import {
  getSupportedTokens,
  SupportReceipt,
} from "@/lib/ghostlogs/queries/stakingTokens";
import { AIOV_DOMAIN, NFT_DOMAIN, MAGIC_EDEN_URL } from "@/config/domains";
import TokenLogo from "@/components/TokenLogo/TokenLogo";
import { formatUnits } from "viem";

const ERC20_ABI = [
  {
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

const CHAIN_ID = 80094; // Berachain

interface StakingTokensTabProps {
  isActive: boolean;
}

export const StakingTokensTab: React.FC<StakingTokensTabProps> = ({ isActive }) => {
  const { address: userAddress } = useAccount();
  const [tokens, setTokens] = useState<SupportReceipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    // Only fetch when tab is active
    if (!isActive) {
      setLoading(false);
      return;
    }

    // Don't refetch if data has already been fetched
    if (dataFetched) {
      setLoading(false);
      return;
    }

    const fetchTokens = async () => {
      setLoading(true);
      try {
        console.log("Fetching supported burn tokens...");
        const supportedTokens = await getSupportedTokens();
        console.log("Burn tokens fetched:", supportedTokens);
        setTokens(supportedTokens);
        setDataFetched(true);
      } catch (error) {
        console.error("Failed to fetch tokens:", error);
        setTokens([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [dataFetched, isActive]);

  // Fetch user balances and token metadata for all tokens
  const contracts = tokens.flatMap((token) => [
    {
      address: token.id as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "balanceOf",
      args: userAddress ? [userAddress] : undefined,
      chainId: CHAIN_ID,
    },
    {
      address: token.id as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "decimals",
      chainId: CHAIN_ID,
    },
    {
      address: token.id as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "symbol",
      chainId: CHAIN_ID,
    },
  ]);

  const { data: contractData } = useReadContracts({
    contracts,
    query: {
      enabled: tokens.length > 0,
    },
  });

  // Process token data with balances
  const tokensWithBalances = tokens.map((token, index) => {
    const balanceIndex = index * 3;
    const decimalsIndex = index * 3 + 1;
    const symbolIndex = index * 3 + 2;

    const balanceResult = contractData?.[balanceIndex];
    const decimalsResult = contractData?.[decimalsIndex];
    const symbolResult = contractData?.[symbolIndex];

    const balance =
      balanceResult?.status === "success"
        ? BigInt(balanceResult.result as string | number | bigint)
        : BigInt(0);
    const decimals =
      decimalsResult?.status === "success"
        ? Number(decimalsResult.result)
        : 18;
    const symbol =
      symbolResult?.status === "success"
        ? String(symbolResult.result)
        : "???";

    const formattedBalance = formatUnits(balance, decimals);
    const displayBalance = parseFloat(formattedBalance).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
      }
    );

    return {
      ...token,
      balance,
      decimals,
      symbol,
      formattedBalance,
      displayBalance,
    };
  });

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleStakeClick = () => {
    window.open(AIOV_DOMAIN, "_blank", "noopener,noreferrer");
  };

  // Don't render anything if not active
  if (!isActive) {
    return null;
  }

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loading-spinner"></div>
        <p>Loading burn tokens...</p>
      </div>
    );
  }

  const tokensWithBalance = tokensWithBalances.filter(
    (token) => token.balance > BigInt(0)
  );

  if (tokens.length === 0) {
    return (
      <div className="empty-state staking-empty">
        <div className="empty-icon-wrapper">
          <div className="empty-icon-bg"></div>
          <svg
            className="empty-icon"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="currentColor"
              opacity="0.5"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="empty-content">
          <h3>No Burn Tokens Available</h3>
          <p>
            There are currently no burn tokens configured in the All In One Vault. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  if (tokensWithBalance.length === 0) {
    return (
      <div className="empty-state staking-empty">
        <div className="empty-icon-wrapper">
          <div className="empty-icon-bg"></div>
          <svg
            className="empty-icon"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M12 8V12L15 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="empty-content">
          <h3>No Burn Tokens in Wallet</h3>
          <p>
            Looks like you don&apos;t have burn tokens in your wallet. Get an NFT to stake to AIOV, earning burn tokens daily!
          </p>
          <div className="empty-cta-group">
            <button
              className="empty-cta secondary"
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
              Buy NFT
            </button>
            <button
              className="empty-cta secondary"
              onClick={() => window.open(NFT_DOMAIN, "_blank", "noopener,noreferrer")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="currentColor"
                  opacity="0.5"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              Stake NFT
            </button>
            <button
              className="empty-cta primary"
              onClick={() => window.open(AIOV_DOMAIN, "_blank", "noopener,noreferrer")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C12 2 7 4 7 8V12C7 16 12 18 12 18C12 18 17 16 17 12V8C17 4 12 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M9 11L11 13L15 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Burn in AIOV
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="staking-tokens-section">
      {/* Tokens List */}
      <div className="staking-tokens-list-section">
        <div className="section-header">
          <div className="section-title" title="Burn these tokens to earn rewards in the All In One Vault">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
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
            Supported Burn Tokens
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="staking-tokens-grid">
          {tokensWithBalance.map((token) => (
              <div
                key={token.id}
                className="staking-token-card stakeable-card"
                onClick={handleStakeClick}
              >
                <div className="token-header">
                  <div className="token-address-wrapper">
                    <TokenLogo
                      address={token.id}
                      chainId={CHAIN_ID}
                      symbol={token.symbol}
                      size={40}
                    />
                    <div className="token-address-info">
                      <span className="token-symbol">{token.symbol}</span>
                      <span
                        className="token-address"
                        title={token.id}
                      >
                        {shortenAddress(token.id)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="token-details">
                  <div className="token-detail-row">
                    <span className="detail-label">Your Balance</span>
                    <span className="detail-value balance-value">
                      {token.displayBalance}
                    </span>
                  </div>
                </div>

                <div className="token-stake-overlay">
                  <div className="stake-text">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Stake
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
