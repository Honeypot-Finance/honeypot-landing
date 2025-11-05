"use client";
import React, { useState } from "react";
import "./dashboard.scss";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import MissionsSidebar from "@/components/MissionsSidebar/MissionsSidebar";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useUserPositions, useUserStats, useUserVaultShares, formatUSD, getChainMetadata } from "@/lib/subgraph";
import Image from "next/image";
import TokenLogo from "@/components/TokenLogo";
import { DEX_DOMAIN } from "@/config/domains";

type TabType = "dex" | "points" | "nft" | "leaderboard" | "vault";
type DexSubTabType = "concentrated" | "vaults";

export default function DashboardPage() {
  const { address, isConnected, isConnecting } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [activeTab, setActiveTab] = useState<TabType>("dex");
  const [activeDexSubTab, setActiveDexSubTab] = useState<DexSubTabType>("concentrated");

  // Fetch user data from subgraph
  const { data: positions, isLoading: positionsLoading } = useUserPositions();
  const { data: stats, isLoading: statsLoading } = useUserStats();
  const { data: vaultShares, isLoading: vaultSharesLoading } = useUserVaultShares();

  const formatAddress = (addressStr: string) => {
    if (!addressStr) return "";
    if (addressStr.length < 12) return addressStr;
    return `${addressStr.slice(0, 6)}...${addressStr.slice(-4)}`;
  };

  const getChainIcon = (chainId: number) => {
    const chainMeta = getChainMetadata(chainId);
    return chainMeta?.iconUrl || "/images/chains/berachain.png";
  };

  return (
    <div className="min-h-screen bg-[#140E06] font-inter relative overflow-hidden flex flex-col items-center w-full">
      {/* Honeycomb Pattern Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/images/background_honeycomb_pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      {/* Navbar */}
      <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-10 w-full fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="flex justify-center items-center">
          <Navbar menuList={appPathsList} />
        </div>
      </div>

      {!isConnected && !isConnecting ? (
        /* Connect Wallet Prompt */
        <div className="connect-wallet-prompt">
          <div className="prompt-container">
            <div className="prompt-icon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
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
                <circle
                  cx="12"
                  cy="16"
                  r="1.5"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2>Connect Your Wallet</h2>
            <p>
              Please connect your wallet to access the User Data Hub and view
              your stats, missions, and rewards.
            </p>
            <button
              onClick={openConnectModal}
              className="connect-wallet-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
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
              Connect Wallet
            </button>
          </div>
        </div>
      ) : isConnected && address ? (
        <div className="dashboard-page">
          {/* Header */}
          <div className="dashboard-header">
            <div className="header-top">
              <div className="header-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="8"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="13"
                    y="3"
                    width="8"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="3"
                    y="13"
                    width="8"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="13"
                    y="13"
                    width="8"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h1>User Hub</h1>
            </div>
            {address && (
              <div className="wallet-address-subtitle">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
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
                <span className="full-address">{address}</span>
                <span className="short-address">{formatAddress(address)}</span>
              </div>
            )}
          </div>

          <div className="dashboard-wrapper">
            <div className="dashboard-container">
              {/* Navigation Tabs */}
              <div className="dashboard-tabs">
                <button
                  className={`tab ${activeTab === "dex" ? "active" : ""}`}
                  onClick={() => setActiveTab("dex")}
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
                      width="7"
                      height="7"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                  DEX
                </button>
                <button
                  className={`tab ${activeTab === "points" ? "active" : ""}`}
                  onClick={() => setActiveTab("points")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  Points
                </button>
                <button
                  className={`tab ${activeTab === "nft" ? "active" : ""}`}
                  onClick={() => setActiveTab("nft")}
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
                  NFT
                </button>
                <button
                  className={`tab ${
                    activeTab === "leaderboard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("leaderboard")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                  Leaderboard
                </button>
                <button
                  className={`tab ${activeTab === "vault" ? "active" : ""}`}
                  onClick={() => setActiveTab("vault")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
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
                  Vault
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "dex" && (
                <>
                  {/* Stats Cards */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-header">
                        <span className="stat-label">Total Liquidity</span>
                        <div className="stat-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 17L9 11L13 15L21 7"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <path
                              d="M14 7H21V14"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="stat-value">
                        {statsLoading
                          ? "Loading..."
                          : formatUSD(stats?.totalLiquidityUSD || 0)}
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-header">
                        <span className="stat-label">Total Positions</span>
                        <div className="stat-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 2C9 2 6 2 6 5V7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18V5C18 2 15 2 15 2H9Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="stat-value">
                        {statsLoading ? "Loading..." : stats?.positionCount || 0}
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-header">
                        <span className="stat-label">Total Swaps</span>
                        <div className="stat-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 16V4M7 4L3 8M7 4L11 8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 8V20M17 20L21 16M17 20L13 16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="stat-value">
                        {statsLoading ? "Loading..." : stats?.totalSwaps.toLocaleString() || 0}
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-header">
                        <span className="stat-label">Total Volume</span>
                        <div className="stat-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 2V22M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14M12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14M12 14C10.3431 14 9 15.3431 9 17C9 18.6569 10.3431 20 12 20M12 14C13.6569 14 15 15.3431 15 17C15 18.6569 13.6569 20 12 20M12 20C10.3431 20 9 21.3431 9 23M12 20C13.6569 20 15 21.3431 15 23"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="stat-value">
                        {statsLoading ? "Loading..." : formatUSD(stats?.totalVolumeUSD || 0)}
                      </div>
                    </div>
                  </div>

                  {/* Your Earning Assets */}
                  <div className="liquidity-section">
                    <div className="section-header">
                      <div className="section-title">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
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

                    {/* Sub-tabs for Concentrated Liquidity and Automated Vaults */}
                    <div className="dex-sub-tabs">
                      <button
                        className={`sub-tab ${activeDexSubTab === "concentrated" ? "active" : ""}`}
                        onClick={() => setActiveDexSubTab("concentrated")}
                      >
                        Concentrated Liquidity
                      </button>
                      <button
                        className={`sub-tab ${activeDexSubTab === "vaults" ? "active" : ""}`}
                        onClick={() => setActiveDexSubTab("vaults")}
                      >
                        Automated Vaults
                      </button>
                    </div>

                    {/* Concentrated Liquidity Tab */}
                    {activeDexSubTab === "concentrated" && (
                      <>
                        {positionsLoading ? (
                          <div className="loading-state">
                            <div className="loading-spinner"></div>
                            <p>Loading positions...</p>
                          </div>
                        ) : positions && positions.length > 0 ? (
                          <div className="liquidity-cards">
                            {positions.map((position) => (
                              <a
                                href={`${DEX_DOMAIN}pool-detail/${position.poolId}?chainid=${position.chainId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={`${position.chainId}-${position.poolId}`}
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
                                        <span className="amount-label">
                                          {position.token0Symbol}:
                                        </span>
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
                                        <span className="amount-label">
                                          {position.token1Symbol}:
                                        </span>
                                      </div>
                                      <span className="amount-value">
                                        {parseFloat(position.depositedToken1).toFixed(4)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
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

                    {/* Automated Vaults Tab */}
                    {activeDexSubTab === "vaults" && (
                      <>
                        {vaultSharesLoading ? (
                          <div className="loading-state">
                            <div className="loading-spinner"></div>
                            <p>Loading vault positions...</p>
                          </div>
                        ) : vaultShares && vaultShares.length > 0 ? (
                          <div className="liquidity-cards">
                            {vaultShares.map((share) => {
                              // Extract vault address from share ID (format: "vaultAddress-userAddress")
                              const vaultAddress = share.id.split('-')[0];
                              return (
                                <a
                                  href={`${DEX_DOMAIN}vault/${vaultAddress}?chainid=${share.chainId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  key={share.id}
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
                                          <span className="amount-label">
                                            {share.tokenASymbol}:
                                          </span>
                                        </div>
                                        <span className="amount-value">
                                          {share.userAmount0}
                                        </span>
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
                                          <span className="amount-label">
                                            {share.tokenBSymbol}:
                                          </span>
                                        </div>
                                        <span className="amount-value">
                                          {share.userAmount1}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
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
              )}

              {activeTab === "points" && (
                <div className="tab-content-panel">
                  <h2 className="panel-title">Points Overview</h2>
                  <p className="panel-description">
                    Track your rewards points and earning history
                  </p>
                </div>
              )}

              {activeTab === "nft" && (
                <div className="tab-content-panel">
                  <h2 className="panel-title">NFT Collection</h2>
                  <p className="panel-description">
                    View and manage your NFT assets
                  </p>
                </div>
              )}

              {activeTab === "leaderboard" && (
                <div className="tab-content-panel">
                  <h2 className="panel-title">Leaderboard Rankings</h2>
                  <p className="panel-description">
                    See how you rank among other users
                  </p>
                </div>
              )}

              {activeTab === "vault" && (
                <div className="tab-content-panel">
                  <h2 className="panel-title">Vault Assets</h2>
                  <p className="panel-description">
                    Manage your staked and locked assets
                  </p>
                </div>
              )}
            </div>

            {/* Missions Sidebar */}
            <MissionsSidebar />
          </div>
        </div>
      ) : (
        /* Loading State */
        <div className="connect-wallet-prompt">
          <div className="prompt-container">
            <div className="loading-spinner"></div>
            <p>Checking wallet connection...</p>
          </div>
        </div>
      )}
    </div>
  );
}
