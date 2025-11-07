"use client";
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { appPathsList } from "@/config/allAppPath";
import WalletBar from "@/components/WalletBar/WalletBar";

// Helper function to check if URL is external
const isExternalUrl = (url: string): boolean => {
  if (typeof window === "undefined") return true; // SSR: assume external
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.hostname !== window.location.hostname;
  } catch {
    return false; // Relative URLs are internal
  }
};

export default function Header() {
  const [headerBg, setHeaderBg] = useState("#80BFE5");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setHeaderBg("#80BFE5");
    } else {
      setHeaderBg("#80BFE5");
    }
  });

  return (
    <header className={styles["header"]}>
      <motion.div
        className={styles["header-container"]}
        initial={{ y: -100 }}
        animate={{ y: 0, backgroundColor: headerBg }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Image
            src={"/logo.svg"}
            alt="logo"
            className={styles["logo"]}
            width={100}
            height={100}
          />
        </Link>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-list"]}>
            {appPathsList.map((menu, index) => {
              const isDropdown = Array.isArray(menu.path);
              const isOpen = openDropdown === menu.title;

              if (isDropdown) {
                return (
                  <li
                    key={index}
                    className={`${styles["nav-item"]} ${styles["nav-dropdown"]}`}
                    onMouseEnter={() => setOpenDropdown(menu.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {menu.beforeElement}
                    <span className={styles["nav-link"]}>
                      {menu.title}
                      <span className={styles["dropdown-arrow"]}>▼</span>
                    </span>
                    {menu.afterElement}
                    {isOpen && Array.isArray(menu.path) && (
                      <ul className={styles["dropdown-menu"]}>
                        {menu.path.map((subItem, subIndex) => (
                          <li key={subIndex} className={styles["dropdown-item"]}>
                            <Link
                              href={subItem.path}
                              target={isExternalUrl(subItem.path) ? "_blank" : "_self"}
                              rel={isExternalUrl(subItem.path) ? "noopener noreferrer" : undefined}
                            >
                              {subItem.beforeElement}
                              {subItem.title}
                              {subItem.afterElement}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              // Simple menu item (path is string)
              const menuPath = menu.path as string;
              return (
                <li key={index} className={styles["nav-item"]}>
                  <Link
                    href={menuPath}
                    target={isExternalUrl(menuPath) ? "_blank" : "_self"}
                    rel={isExternalUrl(menuPath) ? "noopener noreferrer" : undefined}
                  >
                    {menu.beforeElement}
                    <span className={styles["nav-link"]}>{menu.title}</span>
                    {menu.afterElement}
                  </Link>
                </li>
              );
            })}
          </ul>
          <WalletBar />
        </nav>
      </motion.div>
    </header>
  );
}
