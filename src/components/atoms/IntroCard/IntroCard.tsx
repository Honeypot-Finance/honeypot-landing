"use client";
import styles from "./IntroCard.module.scss";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button/Button";

export default function IntroCard({
  title,
  description,
  image,
  linkTo,
  ...props
}: Readonly<{
  title: string;
  description: string;
  image: StaticImageData;
  linkTo?: {
    href: string;
    display?: string;
  };
}>) {
  return (
    <motion.div
      className={styles["intro-card"]}
      {...props}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={styles["image-container"]}>
        <Image src={image} alt={title} />
      </div>
      <h3 className={styles["title"]}>{title}</h3>
      <p className={styles["description"]}>{description}</p>
      {linkTo && <Button linkTo={linkTo.href}>{linkTo.display}</Button>}
    </motion.div>
  );
}
