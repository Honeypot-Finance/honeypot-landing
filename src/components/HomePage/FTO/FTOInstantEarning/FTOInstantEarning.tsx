"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FTOInstantEarning.module.scss";
import ImageTextIllustration from "@/components/molecule/ImageTextIllustration/ImageTextIllustration";

//beras
import goldCoin from "@/assets/effectItems/goldcoin.png";
import shineEffect from "@/assets/effectItems/shineEffect.png";

export default function FTOInstantEarning() {
  return (
    <ImageTextIllustration
      swap
      title="Instant earning"
      paragraph=" as we auto-add liquidity to the defi-hub, whether you are users or project, you instantly start to earn the transaction fee and yields from the partner protocols."
    >
      <motion.div
        style={{
          width: "100%",
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
        initial={{
          opacity: 0,
          transform: "translate(-50%,-50%) scale(0) rotate(0deg)",
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          transform: [
            "translate(-50%,-50%) scale(0) rotate(0deg)",
            "translate(-50%,-50%) scale(0.9) rotate(360deg)",
            "translate(-50%,-50%) scale(1.2) rotate(360deg)",
            "translate(-50%,-50%) scale(1) rotate(360deg)",
            "translate(-50%,-50%) scale(1.2) rotate(360deg)",
            "translate(-50%,-50%) scale(0.9) rotate(360deg)",
            "translate(-50%,-50%) scale(0) rotate(0deg)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={goldCoin}
          alt="svg placeholder"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>

      {/**
       * shines
       */}

      <motion.div
        style={{
          width: "100%",
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0, 1, 0, 1, 0, 0],
          transform: [
            "translate(-50%,-50%) scale(0.9) ",
            "translate(-50%,-50%) scale(1) ",
            "translate(-50%,-50%) scale(1.2)",
            "translate(-50%,-50%) scale(1) ",
            "translate(-50%,-50%) scale(1.2) ",
            "translate(-50%,-50%) scale(1) ",
            "translate(-50%,-50%) scale(0.9)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={shineEffect}
          alt="svg placeholder"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
    </ImageTextIllustration>
  );
}
