'use client';
import React, { useState } from 'react';
import styles from './MissionsSidebar.module.scss';

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  total: number;
  status: 'available' | 'in-progress' | 'completed';
  type: 'trading' | 'social' | 'liquidity' | 'referral';
}

const missionsData: Mission[] = [
  {
    id: '1',
    title: 'First Trade',
    description: 'Complete your first trade on the platform',
    reward: '+100 Points',
    progress: 0,
    total: 1,
    status: 'available',
    type: 'trading',
  },
  {
    id: '2',
    title: 'Trading Volume',
    description: 'Trade at least $1,000 in volume',
    reward: '+500 Points',
    progress: 450,
    total: 1000,
    status: 'in-progress',
    type: 'trading',
  },
  {
    id: '3',
    title: 'Add Liquidity',
    description: 'Provide liquidity to any pool',
    reward: '+250 Points',
    progress: 1,
    total: 1,
    status: 'completed',
    type: 'liquidity',
  },
  {
    id: '4',
    title: 'Follow on Twitter',
    description: 'Follow @honeypotfinance on Twitter',
    reward: '+50 Points',
    progress: 0,
    total: 1,
    status: 'available',
    type: 'social',
  },
  {
    id: '5',
    title: 'Join Discord',
    description: 'Join our Discord community',
    reward: '+50 Points',
    progress: 1,
    total: 1,
    status: 'completed',
    type: 'social',
  },
  {
    id: '6',
    title: 'Refer a Friend',
    description: 'Invite friends to join Honeypot',
    reward: '+200 Points',
    progress: 2,
    total: 5,
    status: 'in-progress',
    type: 'referral',
  },
  {
    id: '7',
    title: 'Daily Login',
    description: 'Login 7 days in a row',
    reward: '+300 Points',
    progress: 4,
    total: 7,
    status: 'in-progress',
    type: 'social',
  },
  {
    id: '8',
    title: 'Stake NFT',
    description: 'Stake a HoneyGenesis NFT',
    reward: '+500 Points',
    progress: 0,
    total: 1,
    status: 'available',
    type: 'liquidity',
  },
];

export default function MissionsSidebar() {
  const [filter, setFilter] = useState<'all' | 'available' | 'in-progress' | 'completed'>('all');

  const getMissionIcon = (type: Mission['type']) => {
    switch (type) {
      case 'trading':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'social':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'liquidity':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'referral':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
    }
  };

  const filteredMissions = filter === 'all'
    ? missionsData
    : missionsData.filter(m => m.status === filter);

  const totalPoints = missionsData
    .filter(m => m.status === 'completed')
    .reduce((acc, m) => acc + parseInt(m.reward.replace(/[^0-9]/g, '')), 0);

  return (
    <div className={styles['missions-sidebar']}>
      {/* Header */}
      <div className={styles['sidebar-header']}>
        <div className={styles['header-title']}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <h2>Missions</h2>
        </div>
        <div className={styles['total-points']}>
          <span className={styles['points-label']}>Total Points</span>
          <span className={styles['points-value']}>{totalPoints}</span>
        </div>
      </div>

      {/* Filters */}
      <div className={styles['mission-filters']}>
        <button
          className={filter === 'all' ? styles['active'] : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'available' ? styles['active'] : ''}
          onClick={() => setFilter('available')}
        >
          Available
        </button>
        <button
          className={filter === 'in-progress' ? styles['active'] : ''}
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button
          className={filter === 'completed' ? styles['active'] : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Missions List */}
      <div className={styles['missions-list']}>
        {filteredMissions.map((mission) => (
          <div
            key={mission.id}
            className={`${styles['mission-card']} ${styles[mission.status]}`}
          >
            <div className={styles['mission-icon']}>
              {getMissionIcon(mission.type)}
            </div>
            <div className={styles['mission-content']}>
              <div className={styles['mission-header']}>
                <h3>{mission.title}</h3>
                <span className={styles['mission-reward']}>{mission.reward}</span>
              </div>
              <p className={styles['mission-description']}>{mission.description}</p>

              {mission.status !== 'completed' && mission.total > 1 && (
                <div className={styles['mission-progress']}>
                  <div className={styles['progress-bar']}>
                    <div
                      className={styles['progress-fill']}
                      style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                    />
                  </div>
                  <span className={styles['progress-text']}>
                    {mission.progress}/{mission.total}
                  </span>
                </div>
              )}

              {mission.status === 'completed' && (
                <div className={styles['mission-completed-badge']}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Completed
                </div>
              )}

              {mission.status === 'available' && (
                <button className={styles['start-mission-btn']}>Start Mission</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
