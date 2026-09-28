"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Menu } from "@/config/allAppPath";
import WalletBar from "@/components/WalletBar/WalletBarLazy";
import Brand from "@/components/editorial/Brand";
import Arrow from "@/components/editorial/Arrow";
import styles from "@/components/editorial/Editorial.module.scss";

interface NavbarProps {
  menuList: Menu[];
  showWallet?: boolean;
}

export default function HoneyNavbar({ menuList, showWallet = true }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  function closeMenus() {
    setIsMenuOpen(false);
    header.current?.querySelectorAll("details[open]").forEach((details) => {
      details.removeAttribute("open");
    });
  }

  return (
    <header
      ref={header}
      className={`${styles.header} ${showWallet ? styles.headerWithWallet : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const openDetails = header.current?.querySelector("details[open]");
          closeMenus();
          if (isMenuOpen) menuButton.current?.focus();
          else openDetails?.querySelector("summary")?.focus();
        }
      }}
    >
      <div className={styles.headerInner}>
        <Brand />
        <button
          ref={menuButton}
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={isMenuOpen ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <nav id="site-navigation" aria-label="Main navigation" className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}>
          {menuList.map((menu) =>
            typeof menu.path === "string" ? (
              <Link key={menu.title} href={menu.path} onClick={closeMenus} className={styles.navLink}>
                {menu.title}
              </Link>
            ) : (
              <details className={styles.legacyDropdown} key={menu.title}>
                <summary>{menu.title}<span aria-hidden="true">⌄</span></summary>
                <div className={styles.dropdownContent}>
                  <span className={styles.dropdownLabel}>For our original community</span>
                  {menu.path.map((item) => (
                    <a key={item.title} href={item.path} target="_blank" rel="noopener noreferrer" onClick={closeMenus}>
                      {item.title}<Arrow diagonal />
                    </a>
                  ))}
                </div>
              </details>
            )
          )}
          <a className={styles.joinButton} href="https://discord.gg/NfnK78KJxH" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>
            Join the hive<Arrow diagonal />
          </a>
        </nav>
        {showWallet ? <div className={styles.wallet}><WalletBar /></div> : null}
      </div>
    </header>
  );
}
