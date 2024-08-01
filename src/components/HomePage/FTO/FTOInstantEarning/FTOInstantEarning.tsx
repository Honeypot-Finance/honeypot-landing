"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FTOInstantEarning.module.scss";
import ImageTextIllustration from "@/components/molecule/ImageTextIllustration/ImageTextIllustration";

//beras
import blackHoodie from "@/assets/beras/blackHoodie.png";
import blackSuit from "@/assets/beras/blackSuit.png";
import holdHoney from "@/assets/beras/holdHoney.png";
import purpleHeadcover from "@/assets/beras/purpleHeadcover.png";
import whiteShirt from "@/assets/beras/whiteShirt.png";

export default function FTOInstantEarning() {
  return (
    <ImageTextIllustration
      swap
      title="Instant earning"
      paragraph=" as we auto-add liquidity to the defi-hub, whether you are users or project,  you instantly start to earn the transaction fee."
    >
      <motion.div
        className="bera_animation"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {/**
         * black hoodie bera
         */}
        <motion.div
          style={{
            width: "60%",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-65%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={blackHoodie}
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
         * black suit bera
         */}
        <motion.div
          style={{
            width: "60%",
            height: "auto",
            position: "absolute",
            left: "20%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-65%" }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={blackSuit}
            alt="svg placeholder"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        {/**
         * hold honey bera
         */}
        <motion.div
          style={{
            width: "60%",
            height: "auto",
            position: "absolute",
            left: "40%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-65%" }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={holdHoney}
            alt="svg placeholder"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        {/**
         * purple headcover bera
         */}
        <motion.div
          style={{
            width: "60%",
            height: "auto",
            position: "absolute",
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-35%" }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
        >
          <Image
            src={purpleHeadcover}
            alt="svg placeholder"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        {/**
         * white shirt bera
         */}
        <motion.div
          style={{
            width: "60%",
            height: "auto",
            position: "absolute",
            left: "30%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-35%" }}
          transition={{ duration: 1, delay: 2.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={whiteShirt}
            alt="svg placeholder"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </motion.div>
    </ImageTextIllustration>
  );
}
