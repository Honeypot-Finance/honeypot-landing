"use client";
import styles from "./HomePageBanner.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

//images
import bannerImage from "@/assets/banner.png";
import beraLabTester from "@/assets/beraLabTester.png";
import cloudSvg from "@/assets/banner/cloud.svg";
import moneybagSvg from "@/assets/banner/moneyBag.svg";

export default function HomePageBanner() {
  return (
    <div className={styles["banner-container"]}>
      <div className="overflow-hidden w-full h-full relative ">
        <div className="clouds">
          <motion.div
            className="absolute top-[-5rem] left-0 w-[20vw]"
            initial={{ left: "-40vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 0,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[5rem] left-0 w-[20vw]"
            initial={{ left: "-20vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 0,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[10rem] left-0 w-[20vw]"
            initial={{ left: "-30vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 55,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 0,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[20rem] left-0 w-[20vw]"
            initial={{ left: "-60vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute bottom-[3rem] left-0 w-[20vw]"
            initial={{ left: "-80vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute bottom-[-5rem] left-0 w-[20vw]"
            initial={{ left: "-60vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[-5rem] left-0 w-[20vw]"
            initial={{ left: "-40vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 10,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[5rem] left-0 w-[20vw]"
            initial={{ left: "-20vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 8,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[10rem] left-0 w-[20vw]"
            initial={{ left: "-30vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 55,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 28,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-[20rem] left-0 w-[20vw]"
            initial={{ left: "-30vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 8,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute bottom-[3rem] left-0 w-[20vw]"
            initial={{ left: "-80vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 8,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>

          <motion.div
            className="absolute bottom-[-5rem] left-0 w-[20vw]"
            initial={{ left: "-60vw" }}
            animate={{ left: "100vw" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              delay: 13,
            }}
          >
            <Image src={cloudSvg} alt="" />
          </motion.div>
        </div>
        <motion.div
          className="w-[20vw] absolute bottom-0 left-0 flex justify-center"
          initial={{ bottom: "-5vw", left: "0vw" }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 0, 10, 0],
            transition: {
              duration: 0.5,
            },
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Image
            src={moneybagSvg}
            alt=""
            className="cursor-pointer active:scale-125 transition-all"
          />
        </motion.div>
        <h1 className={styles["banner-title"]}>
          Welcome to the Premier Proof of Liquidity Accelerator on Berachain
        </h1>
      </div>
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
