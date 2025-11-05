"use client";
import React, { useState } from "react";
import "./dashboard.scss";
import Navbar from "@/components/Navbar";
import { appPathsList } from "@/components/Navbar/allAppPath";
import MissionsSidebar from "@/components/MissionsSidebar/MissionsSidebar";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  useUserPositions,
  useUserStats,
  useUserVaultShares,
} from "@/lib/subgraph";
import { fetchLoyaltyAccounts, CURRENCY_IDS } from "@/lib/snag/snagApi";
import type { LoyaltyAccount } from "@/lib/snag/snagApi";
import { DexStats } from "@/components/dashboard/DexStats";
import { PositionsTab } from "@/components/dashboard/PositionsTab";
import { PointsTab } from "@/components/dashboard/PointsTab";

type TabType = "dex" | "points" | "nft" | "leaderboard" | "vault";
type DexSubTabType = "concentrated" | "vaults";

export default function DashboardPage() {
  const { address, isConnected, isConnecting } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [activeTab, setActiveTab] = useState<TabType>("dex");
  const [activeDexSubTab, setActiveDexSubTab] =
    useState<DexSubTabType>("concentrated");

  // Fetch user data from subgraph
  const { data: positions, isLoading: positionsLoading } = useUserPositions();
  const { data: stats, isLoading: statsLoading } = useUserStats();
  const { data: vaultShares, isLoading: vaultSharesLoading } =
    useUserVaultShares();

  // Points state
  const [userPoints, setUserPoints] = React.useState<
    Record<string, LoyaltyAccount | null>
  >({});
  const [pointsLoading, setPointsLoading] = React.useState(false);

  // Fetch user points when address changes
  React.useEffect(() => {
    if (!address) {
      setUserPoints({});
      return;
    }

    const fetchUserPoints = async () => {
      setPointsLoading(true);
      try {
        const [lpPoints, dexPoints, socialPoints] = await Promise.all([
          fetchLoyaltyAccounts({
            loyaltyCurrencyId: CURRENCY_IDS.LP_POINTS,
            walletAddress: address,
            limit: 1,
          }),
          fetchLoyaltyAccounts({
            loyaltyCurrencyId: CURRENCY_IDS.DEX_POINTS,
            walletAddress: address,
            limit: 1,
          }),
          fetchLoyaltyAccounts({
            loyaltyCurrencyId: CURRENCY_IDS.SOCIAL_POINTS,
            walletAddress: address,
            limit: 1,
          }),
        ]);

        setUserPoints({
          [CURRENCY_IDS.LP_POINTS]: lpPoints.data[0] || null,
          [CURRENCY_IDS.DEX_POINTS]: dexPoints.data[0] || null,
          [CURRENCY_IDS.SOCIAL_POINTS]: socialPoints.data[0] || null,
        });
      } catch (error) {
        console.error("Failed to fetch user points:", error);
        setUserPoints({});
      } finally {
        setPointsLoading(false);
      }
    };

    fetchUserPoints();
  }, [address]);

  const formatAddress = (addressStr: string) => {
    if (!addressStr) return "";
    if (addressStr.length < 12) return addressStr;
    return `${addressStr.slice(0, 6)}...${addressStr.slice(-4)}`;
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
                  <DexStats stats={stats} statsLoading={statsLoading} />
                  <PositionsTab
                    positions={positions}
                    positionsLoading={positionsLoading}
                    vaultShares={vaultShares}
                    vaultSharesLoading={vaultSharesLoading}
                    liquiditySubTab={activeDexSubTab}
                    setLiquiditySubTab={setActiveDexSubTab}
                  />
                </>
              )}

              {activeTab === "points" && (
                <PointsTab
                  userPoints={userPoints}
                  pointsLoading={pointsLoading}
                />
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
