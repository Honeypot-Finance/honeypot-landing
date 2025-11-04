'use client';
import React from 'react';
import './dashboard.scss';
import Navbar from '@/components/Navbar';
import { appPathsList } from '@/components/Navbar/allAppPath';
import MissionsSidebar from '@/components/MissionsSidebar/MissionsSidebar';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function DashboardPage() {
  const { address, isConnected, isConnecting } = useAccount();
  const { openConnectModal } = useConnectModal();

  const formatAddress = (addressStr: string) => {
    if (!addressStr) return '';
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
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-20 w-full fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="flex justify-center items-center">
          <Navbar menuList={appPathsList} />
        </div>
      </div>

      {!isConnected && !isConnecting ? (
        /* Connect Wallet Prompt */
        <div className="connect-wallet-prompt">
          <div className="prompt-container">
            <div className="prompt-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <h2>Connect Your Wallet</h2>
            <p>Please connect your wallet to access the User Data Hub and view your stats, missions, and rewards.</p>
            <button onClick={openConnectModal} className="connect-wallet-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor"/>
                <rect x="13" y="3" width="8" height="8" rx="1" fill="currentColor"/>
                <rect x="3" y="13" width="8" height="8" rx="1" fill="currentColor"/>
                <rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor"/>
              </svg>
            </div>
            <h1>User Data Hub</h1>
          </div>
          {address && (
            <div className="wallet-address-subtitle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
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
            <button className="tab active">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
              </svg>
              DEX
            </button>
            <button className="tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              Points
            </button>
            <button className="tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              NFT
            </button>
            <button className="tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor"/>
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor"/>
              </svg>
              Leaderboard
            </button>
            <button className="tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Vault
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Total Value Locked</span>
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">$125,432.50</div>
              <div className="stat-change positive">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                +12.5%
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Trading Volume (24h)</span>
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">$45,821.30</div>
              <div className="stat-change positive">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                +8.2%
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Total Trades</span>
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">1,247</div>
              <div className="stat-change negative">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7L17 17M17 17H8M17 17V8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                -2.1%
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-label">Portfolio Value</span>
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">$89,234.12</div>
              <div className="stat-change positive">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                +15.7%
              </div>
            </div>
          </div>

          {/* Active Liquidity Positions */}
          <div className="liquidity-section">
            <div className="section-header">
              <div className="section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 2C9 2 6 2 6 5V7H4C3.44772 7 3 7.44772 3 8V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18V5C18 2 15 2 15 2H9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M6 7V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V7" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Active Liquidity Positions
              </div>
              <div className="section-subtitle">Your current liquidity pools and earnings</div>
            </div>

            <div className="liquidity-cards">
              <div className="liquidity-card">
                <div className="liquidity-pair">ETH/USDT</div>
                <div className="liquidity-details">
                  <div className="liquidity-info">
                    <span className="info-label">Liquidity:</span>
                    <span className="info-value">$12,500</span>
                  </div>
                  <div className="liquidity-apr">24.5% APR</div>
                </div>
                <div className="liquidity-earned">
                  <span className="earned-label">Earned:</span>
                  <span className="earned-value">$125.30</span>
                </div>
              </div>

              <div className="liquidity-card">
                <div className="liquidity-pair">BTC/USDT</div>
                <div className="liquidity-details">
                  <div className="liquidity-info">
                    <span className="info-label">Liquidity:</span>
                    <span className="info-value">$25,000</span>
                  </div>
                  <div className="liquidity-apr">18.2% APR</div>
                </div>
                <div className="liquidity-earned">
                  <span className="earned-label">Earned:</span>
                  <span className="earned-value">$342.80</span>
                </div>
              </div>
            </div>
          </div>
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
