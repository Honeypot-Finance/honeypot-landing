"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FTOFairAccess.module.scss";
import ImageTextIllustration from "@/components/molecule/ImageTextIllustration/ImageTextIllustration";

//beras
import blackHoodie from "@/assets/beras/blackHoodie.png";
import blackSuit from "@/assets/beras/blackSuit.png";
import holdHoney from "@/assets/beras/holdHoney.png";
import purpleHeadcover from "@/assets/beras/purpleHeadcover.png";
import whiteShirt from "@/assets/beras/whiteShirt.png";

export default function FTOFairAccess() {
  return (
    <ImageTextIllustration
      title="Fair Access"
      paragraph="Uniform pricing across all users ensures no single user gains an unfair advantage, promoting equitable token distribution."
    >
      <div
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
        >
          <Image
            src={whiteShirt}
            alt="svg placeholder"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </ImageTextIllustration>
  );
}
