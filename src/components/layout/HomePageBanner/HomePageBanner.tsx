"use client";
import styles from "./HomePageBanner.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

//images
import bannerImage from "@/assets/banner.png";
import beraLabTester from "@/assets/beraLabTester.png";

export default function HomePageBanner() {
  return (
    <div className={styles["banner-container"]}>
      <Image
        src={bannerImage}
        alt="banner"
        className={styles["banner-image"]}
      />
      <motion.div
        className={styles["bera-lab-tester"]}
        initial={{ right: "-10vw" }}
        whileHover={{ right: "0" }}
      >
        <Image src={beraLabTester} alt="beraLabTester" />
      </motion.div>
    </div>
  );
}
