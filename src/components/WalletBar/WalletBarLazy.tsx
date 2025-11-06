"use client";
import dynamic from 'next/dynamic';
import styles from './WalletBar.module.scss';

const WalletBar = dynamic(() => import('./WalletBar'), {
  loading: () => (
    <div className={styles["wallet-bar"]}>
      {/* Profile button placeholder */}
      <div
        className={styles["profile-button"]}
        style={{ opacity: 0.5, cursor: 'default' }}
      />
      {/* Connect button placeholder */}
      <div
        className={styles["connect-button-custom"]}
        style={{ opacity: 0.6, cursor: 'default' }}
      >
        <span className={styles["connect-text"]} style={{ opacity: 0.7 }}>
          Loading...
        </span>
      </div>
    </div>
  ),
  ssr: false,
});

export default WalletBar;
