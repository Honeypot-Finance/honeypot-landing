import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import {
  fetchLoyaltyAccounts,
  CURRENCY_IDS,
  formatPoints,
  LoyaltyAccount,
} from '@/lib/snag/snagApi';
import {
  getTopDexAccountsByVolume,
  getTopDexAccountsBySwaps,
  getUserDexAccount,
  getTopAccountsByLaunches,
  getTopAccountsByParticipations,
  getTopAccountsByDeposit,
  DexAccountWithChain,
} from '@/lib/subgraph/queries/leaderboard';

interface LeaderboardTabProps {
  // Can be extended with additional props if needed
}

type MainTabType = 'points' | 'dex' | 'meme';
type PointsSubTabType = 'lp' | 'dex' | 'social';

export const LeaderboardTab: React.FC<LeaderboardTabProps> = () => {
  const { address } = useAccount();
  const [activeMainTab, setActiveMainTab] = useState<MainTabType>('points');

  // Points tab state - store user data for all three point types
  const [userPointsData, setUserPointsData] = useState<{
    lp: { rank: number | null; points: number };
    dex: { rank: number | null; points: number };
    social: { rank: number | null; points: number };
  }>({
    lp: { rank: null, points: 0 },
    dex: { rank: null, points: 0 },
    social: { rank: null, points: 0 },
  });
  const [pointsLoading, setPointsLoading] = useState(true);
  const [pointsDataFetched, setPointsDataFetched] = useState(false);

  // DEX tab state
  const [dexVolumeRank, setDexVolumeRank] = useState<number | null>(null);
  const [dexVolume, setDexVolume] = useState<number>(0);
  const [dexSwapRank, setDexSwapRank] = useState<number | null>(null);
  const [dexSwapCount, setDexSwapCount] = useState<number>(0);
  const [dexLoading, setDexLoading] = useState(true);
  const [dexDataFetched, setDexDataFetched] = useState(false);

  // Meme tab state
  const [memeLaunchRank, setMemeLaunchRank] = useState<number | null>(null);
  const [memeLaunchCount, setMemeLaunchCount] = useState<number>(0);
  const [memeParticipationRank, setMemeParticipationRank] = useState<number | null>(null);
  const [memeParticipationCount, setMemeParticipationCount] = useState<number>(0);
  const [memeDepositRank, setMemeDepositRank] = useState<number | null>(null);
  const [memeDepositAmount, setMemeDepositAmount] = useState<number>(0);
  const [memeLoading, setMemeLoading] = useState(true);
  const [memeDataFetched, setMemeDataFetched] = useState(false);

  // Fetch user points data for all three point types
  useEffect(() => {
    // Only fetch for Points tab
    if (activeMainTab !== 'points' || !address) {
      setPointsLoading(false);
      return;
    }

    // Don't refetch if data has already been fetched
    if (pointsDataFetched) {
      setPointsLoading(false);
      return;
    }

    const fetchAllPointsData = async () => {
      setPointsLoading(true);
      try {
        // Fetch data for all three point types in parallel
        const [lpResult, dexResult, socialResult] = await Promise.all([
          fetchUserRankAndPoints(CURRENCY_IDS.LP_POINTS),
          fetchUserRankAndPoints(CURRENCY_IDS.DEX_POINTS),
          fetchUserRankAndPoints(CURRENCY_IDS.SOCIAL_POINTS),
        ]);

        setUserPointsData({
          lp: lpResult,
          dex: dexResult,
          social: socialResult,
        });

        // Mark data as fetched
        setPointsDataFetched(true);
      } catch (error) {
        console.error('Failed to fetch points data:', error);
      } finally {
        setPointsLoading(false);
      }
    };

    fetchAllPointsData();
  }, [activeMainTab, address, pointsDataFetched]);

  // Fetch DEX leaderboard data
  useEffect(() => {
    // Only fetch for DEX tab
    if (activeMainTab !== 'dex' || !address) {
      setDexLoading(false);
      return;
    }

    // Don't refetch if data has already been fetched
    if (dexDataFetched) {
      setDexLoading(false);
      return;
    }

    const fetchDexLeaderboard = async () => {
      setDexLoading(true);
      try {
        console.log('Fetching DEX data for address:', address);

        // Fetch user's account data
        const userAccount = await getUserDexAccount(address);
        console.log('User account data:', userAccount);

        if (!userAccount) {
          console.log('No user account found');
          setDexVolumeRank(null);
          setDexVolume(0);
          setDexSwapRank(null);
          setDexSwapCount(0);
          setDexLoading(false);
          return;
        }

        const userVolume = parseFloat(userAccount.totalSpendUSD);
        const userSwaps = parseInt(userAccount.swapCount);
        console.log('User volume:', userVolume, 'User swaps:', userSwaps);
        setDexVolume(userVolume);
        setDexSwapCount(userSwaps);

        // Fetch top 1000 accounts by volume and swaps separately
        console.log('Fetching top accounts...');
        const [topAccountsByVolume, topAccountsBySwaps] = await Promise.all([
          getTopDexAccountsByVolume(1000),
          getTopDexAccountsBySwaps(1000),
        ]);
        console.log('Top accounts fetched - Volume:', topAccountsByVolume.length, 'Swaps:', topAccountsBySwaps.length);

        // Find user's rank by volume
        const volumeIndex = topAccountsByVolume.findIndex(
          (account) => account.id.toLowerCase() === address.toLowerCase()
        );

        if (volumeIndex !== -1) {
          setDexVolumeRank(volumeIndex + 1);
        } else {
          setDexVolumeRank(null); // > 1000
        }

        // Find user's rank by swap count
        const swapIndex = topAccountsBySwaps.findIndex(
          (account) => account.id.toLowerCase() === address.toLowerCase()
        );

        if (swapIndex !== -1) {
          setDexSwapRank(swapIndex + 1);
        } else {
          setDexSwapRank(null); // > 1000
        }

        // Mark data as fetched
        setDexDataFetched(true);
      } catch (error) {
        console.error('Failed to fetch DEX leaderboard:', error);
        setDexVolumeRank(null);
        setDexVolume(0);
        setDexSwapRank(null);
        setDexSwapCount(0);
      } finally {
        setDexLoading(false);
      }
    };

    fetchDexLeaderboard();
  }, [activeMainTab, address, dexDataFetched]);

  // Fetch Meme leaderboard data
  useEffect(() => {
    // Only fetch for Meme tab
    if (activeMainTab !== 'meme' || !address) {
      setMemeLoading(false);
      return;
    }

    // Don't refetch if data has already been fetched
    if (memeDataFetched) {
      setMemeLoading(false);
      return;
    }

    const fetchMemeLeaderboard = async () => {
      setMemeLoading(true);
      try {
        console.log('Fetching Meme data for address:', address);

        // Fetch user's account data
        const userAccount = await getUserDexAccount(address);
        console.log('User account data:', userAccount);

        if (!userAccount) {
          console.log('No user account found');
          setMemeLaunchRank(null);
          setMemeLaunchCount(0);
          setMemeParticipationRank(null);
          setMemeParticipationCount(0);
          setMemeDepositRank(null);
          setMemeDepositAmount(0);
          setMemeLoading(false);
          return;
        }

        const userLaunches = parseInt(userAccount.pot2PumpLaunchCount);
        const userParticipations = parseInt(userAccount.participateCount);
        const userDeposit = parseFloat(userAccount.totalDepositPot2pumpUSD);
        console.log('User launches:', userLaunches, 'Participations:', userParticipations, 'Deposit:', userDeposit);
        setMemeLaunchCount(userLaunches);
        setMemeParticipationCount(userParticipations);
        setMemeDepositAmount(userDeposit);

        // Fetch top 1000 accounts by launches, participations, and deposits separately
        console.log('Fetching top accounts...');
        const [topAccountsByLaunches, topAccountsByParticipations, topAccountsByDeposit] = await Promise.all([
          getTopAccountsByLaunches(1000),
          getTopAccountsByParticipations(1000),
          getTopAccountsByDeposit(1000),
        ]);
        console.log('Top accounts fetched - Launches:', topAccountsByLaunches.length, 'Participations:', topAccountsByParticipations.length, 'Deposits:', topAccountsByDeposit.length);

        // Debug: Show top 30 by participations
        console.log('Top 30 by participations:', topAccountsByParticipations.slice(0, 30).map((acc, idx) => ({
          rank: idx + 1,
          address: acc.id.slice(0, 10) + '...',
          count: acc.participateCount
        })));

        // Find user's rank by launches
        const launchIndex = topAccountsByLaunches.findIndex(
          (account) => account.id.toLowerCase() === address.toLowerCase()
        );

        if (launchIndex !== -1) {
          setMemeLaunchRank(launchIndex + 1);
        } else {
          setMemeLaunchRank(null); // > 1000
        }

        // Find user's rank by participations
        const participationIndex = topAccountsByParticipations.findIndex(
          (account) => account.id.toLowerCase() === address.toLowerCase()
        );

        if (participationIndex !== -1) {
          setMemeParticipationRank(participationIndex + 1);
        } else {
          setMemeParticipationRank(null); // > 1000
        }

        // Find user's rank by deposit
        const depositIndex = topAccountsByDeposit.findIndex(
          (account) => account.id.toLowerCase() === address.toLowerCase()
        );

        if (depositIndex !== -1) {
          setMemeDepositRank(depositIndex + 1);
        } else {
          setMemeDepositRank(null); // > 1000
        }

        // Mark data as fetched
        setMemeDataFetched(true);
      } catch (error) {
        console.error('Failed to fetch Meme leaderboard:', error);
        setMemeLaunchRank(null);
        setMemeLaunchCount(0);
        setMemeParticipationRank(null);
        setMemeParticipationCount(0);
        setMemeDepositRank(null);
        setMemeDepositAmount(0);
      } finally {
        setMemeLoading(false);
      }
    };

    fetchMemeLeaderboard();
  }, [activeMainTab, address, memeDataFetched]);

  // Helper function to fetch user's rank and points for a specific currency
  const fetchUserRankAndPoints = async (
    currencyId: string
  ): Promise<{ rank: number | null; points: number }> => {
    try {
      if (!address) {
        return { rank: null, points: 0 };
      }

      console.log('Fetching points for currency:', currencyId, 'address:', address);

      // Always fetch user's individual data first to get accurate points
      const userResponse = await fetchLoyaltyAccounts({
        loyaltyCurrencyId: currencyId,
        walletAddress: address,
        limit: 1,
      });

      console.log('User response for', currencyId, ':', userResponse);

      const userPoints = userResponse.data?.[0]?.amount || 0;

      console.log('User points for', currencyId, ':', userPoints);

      // If user has no points, return early
      if (userPoints === 0) {
        return { rank: null, points: 0 };
      }

      // Fetch top 100 to determine rank (API limit is 100)
      const topResponse = await fetchLoyaltyAccounts({
        loyaltyCurrencyId: currencyId,
        limit: 100,
        sortDir: 'desc',
      });

      // Find user in top 100
      const userIndex = topResponse.data?.findIndex(
        (account) =>
          account.user?.walletAddress?.toLowerCase() === address.toLowerCase()
      );

      if (userIndex !== undefined && userIndex !== -1) {
        // User is in top 100
        return {
          rank: userIndex + 1,
          points: userPoints,
        };
      }

      // User not in top 100
      return {
        rank: null, // > 100
        points: userPoints,
      };
    } catch (error) {
      console.error('Failed to fetch rank and points:', error);
      return { rank: null, points: 0 };
    }
  };

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const formatVolume = (volume: number) => {
    return `$${volume.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <>
      <div className="leaderboard-section">
        {/* Header */}
        <div className="section-header">
          <div className="section-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
          </div>
          <div className="section-subtitle">
            Rankings across all Honeypot platforms
          </div>
        </div>

        {/* Main Tabs */}
        <div className="leaderboard-main-tabs">
          <button
            className={`main-tab ${
              activeMainTab === 'points' ? 'active' : ''
            }`}
            onClick={() => setActiveMainTab('points')}
          >
            Points
          </button>
          <button
            className={`main-tab ${activeMainTab === 'dex' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('dex')}
          >
            Dex
          </button>
          <button
            className={`main-tab ${activeMainTab === 'meme' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('meme')}
          >
            Meme
          </button>
        </div>

        {/* Points Tab Content */}
        {activeMainTab === 'points' && (
          <>
            {pointsLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading points data...</p>
              </div>
            ) : (
              <div className="points-leaderboard-grid">
                {/* LP Points */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>LP Points</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {userPointsData.lp.rank !== null
                          ? `#${userPointsData.lp.rank}`
                          : '> 100'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Your Points</span>
                      <span className="stat-value">
                        {formatPoints(userPointsData.lp.points)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* DEX Points */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>DEX Points</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {userPointsData.dex.rank !== null
                          ? `#${userPointsData.dex.rank}`
                          : '> 100'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Your Points</span>
                      <span className="stat-value">
                        {formatPoints(userPointsData.dex.points)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Points */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Social Points</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {userPointsData.social.rank !== null
                          ? `#${userPointsData.social.rank}`
                          : '> 100'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Your Points</span>
                      <span className="stat-value">
                        {formatPoints(userPointsData.social.points)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Dex Tab Content */}
        {activeMainTab === 'dex' && (
          <>
            {dexLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading DEX data...</p>
              </div>
            ) : (
              <div className="points-leaderboard-grid">
                {/* Trading Volume */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Trading Volume</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {dexVolumeRank !== null ? `#${dexVolumeRank}` : '> 1000'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Volume</span>
                      <span className="stat-value">{formatVolume(dexVolume)}</span>
                    </div>
                  </div>
                </div>

                {/* Swap Count */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Swap Count</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {dexSwapRank !== null ? `#${dexSwapRank}` : '> 1000'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Swaps</span>
                      <span className="stat-value">
                        {dexSwapCount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Meme Tab Content */}
        {activeMainTab === 'meme' && (
          <>
            {memeLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading Meme data...</p>
              </div>
            ) : (
              <div className="points-leaderboard-grid">
                {/* Launches */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Launches</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {memeLaunchRank !== null ? `#${memeLaunchRank}` : '> 1000'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Launches</span>
                      <span className="stat-value">
                        {memeLaunchCount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Participations */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Participations</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {memeParticipationRank !== null ? `#${memeParticipationRank}` : '> 1000'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Participations</span>
                      <span className="stat-value">
                        {memeParticipationCount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Total Deposit */}
                <div className="points-type-card">
                  <div className="points-type-header">
                    <h3>Total Deposit</h3>
                  </div>
                  <div className="points-type-stats">
                    <div className="stat-item">
                      <span className="stat-label">Your Rank</span>
                      <span className="stat-value">
                        {memeDepositRank !== null ? `#${memeDepositRank}` : '> 1000'}
                      </span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Deposit</span>
                      <span className="stat-value">
                        {formatVolume(memeDepositAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
