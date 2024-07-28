"use client";
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [headerBg, setHeaderBg] = useState("transparent");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setHeaderBg("#80BFE5");
    } else {
      setHeaderBg("#80BFE500");
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
            width={50}
            height={50}
          />
        </Link>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <Link href="/">
                <span className={styles["nav-link"]}>About</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/">
                <span className={styles["nav-link"]}>Services</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/">
                <span className={styles["nav-link"]}>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
