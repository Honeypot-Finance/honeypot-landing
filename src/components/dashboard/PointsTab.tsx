import React from 'react';
import { LoyaltyAccount, CURRENCY_IDS, formatPoints } from '@/lib/snag/snagApi';
import { StatCard } from './StatCard';

interface PointsTabProps {
  userPoints: Record<string, LoyaltyAccount | null>;
  pointsLoading: boolean;
}

export const PointsTab: React.FC<PointsTabProps> = ({
  userPoints,
  pointsLoading,
}) => {
  const lpPoints = userPoints[CURRENCY_IDS.LP_POINTS]?.amount || 0;
  const dexPoints = userPoints[CURRENCY_IDS.DEX_POINTS]?.amount || 0;
  const socialPoints = userPoints[CURRENCY_IDS.SOCIAL_POINTS]?.amount || 0;

  return (
    <>
      <div className="stats-grid">
        <StatCard
          label="LP Points"
          value={formatPoints(lpPoints)}
          loading={pointsLoading}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
        />

        <StatCard
          label="DEX Points"
          value={formatPoints(dexPoints)}
          loading={pointsLoading}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          }
        />

        <StatCard
          label="Social Points"
          value={formatPoints(socialPoints)}
          loading={pointsLoading}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
      </div>

      <div className="points-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h3>Earn More Points!</h3>
            <p>Complete quests and climb the leaderboard</p>
          </div>
          <a
            href="https://points.honeypotfinance.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-btn"
          >
            View Quests
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
      </div>
    </>
  );
};
