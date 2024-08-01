"use client";
import React from "react";
import ImageTextIllustration from "@/components/molecule/ImageTextIllustration/ImageTextIllustration";

//beras
import ChartSvg from "./ChartSvg";

export default function FTOPriceStability() {
  return (
    <ImageTextIllustration
      title="Price Stability"
      paragraph="Balanced liquidity removal according to the constant K formula prevents price disruption due to liquidity changes."
    >
      <ChartSvg />
    </ImageTextIllustration>
  );
}
