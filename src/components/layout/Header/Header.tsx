"use client";
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { DOMAIN_MAP } from "@/data/pathData";

export default function Header() {
  const [headerBg, setHeaderBg] = useState("#80BFE5");
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
            <li className={styles["nav-item"]}>
              <Link href={`${DOMAIN_MAP.POT2PUMP}`} target="_blank">
                <span className={styles["nav-link"]}>Launch App</span>
              </Link>
            </li>{" "}
            <li className={styles["nav-item"]}>
              <Link href="https://docs.honeypotfinance.xyz/" target="_blank">
                <span className={styles["nav-link"]}>Docs</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOS9Ws_jlUtWl79OFQHnyUlgKHOReK826sppzj8lTmEQCjCQ/viewform"
                target="_blank"
              >
                <span className={styles["nav-link"]}>Get In Touch</span>
              </Link>
            </li>
            {/* <li className={styles["nav-item"]}>
              <Link href="/homepage1">
                <span className={styles["nav-link"]}>Introduction</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/homepage2">
                <span className={styles["nav-link"]}>Architecture</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/homepage3">
                <span className={styles["nav-link"]}>FTO Model</span>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/homepage4">
                <span className={styles["nav-link"]}>Custom Hooks</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
