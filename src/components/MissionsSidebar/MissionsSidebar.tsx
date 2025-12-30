"use client";
import React from "react";
import styles from "./MissionsSidebar.module.scss";

interface RecommendedMove {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: string;
  link: string;
  gradient: string;
}

const recommendedMoves: RecommendedMove[] = [
  {
    id: "1",
    title: "Earn POT Points",
    description:
      "Participate in activities to earn points for the upcoming TGE airdrop allocation",
    icon: "🎯",
    action: "Start Earning",
    link: "https://points.honeypotfinance.xyz",
    gradient: "linear-gradient(135deg, #FFCD4D 0%, #FF9500 100%)",
  },
  {
    id: "2",
    title: "Stake Your NFT",
    description:
      "Stake HoneyGenesis NFTs to earn continuous reward tokens while maintaining ownership",
    icon: "🎨",
    action: "Stake Now",
    link: "https://nft.honeypotfinance.xyz/staking",
    gradient: "linear-gradient(135deg, #9333EA 0%, #EC4899 100%)",
  },
  {
    id: "3",
    title: "AIOV Vault",
    description:
      "Burn tokens in the All in One Vault to claim your share of $LBGT rewards",
    icon: "🔥",
    action: "Enter Vault",
    link: "https://leaderboard.honeypotfinance.xyz/",
    gradient: "linear-gradient(135deg, #DC2626 0%, #F97316 100%)",
  },
];

export default function MissionsSidebar() {
  const handleAction = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles["missions-sidebar"]}>
      {/* Header */}
      <div className={styles["sidebar-header"]}>
        <div className={styles["header-title"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              fill="currentColor"
            />
          </svg>
          <h2>Recommended Moves</h2>
        </div>
        <p className={styles["header-subtitle"]}>
          Take these actions to maximize your rewards in the Honeypot ecosystem
        </p>
      </div>

      {/* Recommended Moves List */}
      <div className={styles["missions-list"]}>
        {recommendedMoves.map((move) => (
          <div
            key={move.id}
            className={styles["mission-card"]}
          >
            <div
              className={styles["move-icon-wrapper"]}
              style={{ background: move.gradient }}
            >
              <span className={styles["move-icon"]}>{move.icon}</span>
            </div>
            <div className={styles["mission-content"]}>
              <h3 className={styles["move-title"]}>{move.title}</h3>
              <p className={styles["mission-description"]}>
                {move.description}
              </p>
              <button
                className={styles["action-btn"]}
                onClick={() => handleAction(move.link)}
                style={{ background: move.gradient }}
              >
                {move.action}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className={styles["sidebar-footer"]}>
        <p className={styles["footer-text"]}>
          💡 Complete all actions to maximize your benefits
        </p>
      </div>
    </div>
  );
}
