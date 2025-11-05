import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import {
  getUserReceipts,
  isReceiptClaimable,
  formatClaimableDate,
  Receipt,
} from "@/lib/ghostlogs/queries/receipts";
import { AIOV_DOMAIN } from "@/config/domains";
import { StakingTokensTab } from "./StakingTokensTab";
import TokenLogo from "@/components/TokenLogo/TokenLogo";

const CHAIN_ID = 80094; // Berachain

type VaultSubTabType = "receipts" | "staking";

export const VaultTab: React.FC = () => {
  const { address } = useAccount();
  const [activeSubTab, setActiveSubTab] = useState<VaultSubTabType>("receipts");
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    // Only fetch receipts for the receipts tab
    if (activeSubTab !== "receipts") {
      setLoading(false);
      return;
    }

    if (!address) {
      setLoading(false);
      return;
    }

    // Don't refetch if data has already been fetched
    if (dataFetched) {
      setLoading(false);
      return;
    }

    const fetchReceipts = async () => {
      setLoading(true);
      try {
        console.log("Fetching receipts for address:", address);
        const userReceipts = await getUserReceipts(address);
        console.log("Receipts fetched:", userReceipts);
        setReceipts(userReceipts);
        setDataFetched(true);
      } catch (error) {
        console.error("Failed to fetch receipts:", error);
        setReceipts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReceipts();
  }, [address, dataFetched, activeSubTab]);

  // Filter out claimed receipts
  const unclaimedReceipts = receipts.filter((r) => !r.isClaimed);

  const formatWeight = (weight: string) => {
    const num = parseFloat(weight);
    if (num < 0.01 && num > 0) return "< 0.01";
    return num.toFixed(2);
  };

  const shortenToken = (token: string) => {
    return `${token.slice(0, 6)}...${token.slice(-4)}`;
  };

  const handleClaimClick = () => {
    window.open(AIOV_DOMAIN, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="vault-section">
      {/* Sub-tab Navigation */}
      <div className="vault-sub-tabs">
        <button
          className={`vault-sub-tab ${activeSubTab === "receipts" ? "active" : ""}`}
          onClick={() => setActiveSubTab("receipts")}
        >
          Your Receipts
        </button>
        <button
          className={`vault-sub-tab ${activeSubTab === "staking" ? "active" : ""}`}
          onClick={() => setActiveSubTab("staking")}
        >
          Burn Tokens
        </button>
      </div>

      {/* Receipts Tab Content */}
      {activeSubTab === "receipts" && (
        <>
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading vault data...</p>
            </div>
          )}

          {!loading && unclaimedReceipts.length === 0 && (
            <div className="empty-state vault-empty">
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
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 14V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="empty-content">
                <h3>No Unclaimed Receipts</h3>
                <p>
                  Start staking tokens in the All In One Vault to receive receipts that you can claim for rewards.
                </p>
                <button
                  className="empty-cta"
                  onClick={() => window.open(AIOV_DOMAIN, "_blank", "noopener,noreferrer")}
                >
                  Go to Vault
                  <svg
                    width="16"
                    height="16"
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
                </button>
              </div>
            </div>
          )}

          {!loading && unclaimedReceipts.length > 0 && (
            <div className="vault-section">
      {/* Receipts List */}
      <div className="vault-receipts-section">
        <div className="section-header">
          <div className="section-title">
            <svg
              width="24"
              height="24"
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
                d="M9 9H15M9 13H15M9 17H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Your Receipts
          </div>
          <div className="section-subtitle">
            Manage your vault receipts and track claimable assets
          </div>
        </div>

        <div className="receipts-grid">
          {unclaimedReceipts.map((receipt) => {
            const claimable = isReceiptClaimable(receipt);
            return (
              <div
                key={receipt.id}
                className={`receipt-card ${claimable ? "claimable-card" : ""}`}
                onClick={claimable ? handleClaimClick : undefined}
                style={{ cursor: claimable ? "pointer" : "default" }}
              >
                <div className="receipt-header">
                  <div className="receipt-id">
                    <span className="receipt-label">Receipt #</span>
                    <span className="receipt-number">{receipt.receiptId}</span>
                  </div>
                  <div
                    className={`receipt-status ${
                      claimable ? "claimable" : "locked"
                    }`}
                  >
                    {claimable ? "Claimable" : "Locked"}
                  </div>
                </div>

                <div className="receipt-details">
                  <div className="receipt-detail-row">
                    <span className="detail-label">Weight</span>
                    <span className="detail-value weight-value">
                      {formatWeight(receipt.receiptWeight)}
                    </span>
                  </div>

                  <div className="receipt-detail-row">
                    <span className="detail-label">Token</span>
                    <div className="receipt-token-info">
                      <TokenLogo
                        address={receipt.token}
                        chainId={CHAIN_ID}
                        size={24}
                      />
                      <span
                        className="detail-value token-value"
                        title={receipt.token}
                      >
                        {shortenToken(receipt.token)}
                      </span>
                    </div>
                  </div>

                  <div className="receipt-detail-row">
                    <span className="detail-label">Claimable At</span>
                    <span className="detail-value date-value">
                      {formatClaimableDate(receipt.claimableAt)}
                    </span>
                  </div>
                </div>

                {claimable && (
                  <div className="receipt-claim-overlay">
                    <div className="claim-text">
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
                      Claim
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
            </div>
          )}
        </>
      )}

      {/* Staking Tokens Tab Content */}
      <StakingTokensTab isActive={activeSubTab === "staking"} />
    </div>
  );
};
