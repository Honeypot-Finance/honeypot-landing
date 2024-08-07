"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FTOImmediateLiquidity.module.scss";
import ImageTextIllustration from "@/components/molecule/ImageTextIllustration/ImageTextIllustration";

//beras
import blackHoodie from "@/assets/beras/blackHoodie.png";
import blackSuit from "@/assets/beras/blackSuit.png";
import holdHoney from "@/assets/beras/holdHoney.png";
import purpleHeadcover from "@/assets/beras/purpleHeadcover.png";
import whiteShirt from "@/assets/beras/whiteShirt.png";
import PercentSvg from "./PercentSvg";

export default function FTOImmediateLiquidity() {
  return (
    <ImageTextIllustration
      swap
      title="Immediate Liquidity"
      paragraph="A 100% deep liquidity pool is established immediately, enabling instant user trading and improving market efficiency and confidence."
    >
      <PercentSvg />
    </ImageTextIllustration>
  );
}
