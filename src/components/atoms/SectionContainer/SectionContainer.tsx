"use client";
import styles from "./SectionContainer.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function SectionContainer({
  children,
  title,
  bgColor,
  ...props
}: Readonly<{
  children: React.ReactNode;
  bgColor?: string;
  title?: string;
}>) {
  return (
    <motion.section
      className={classNames(
        styles["section-container"],
        title ? styles["has-title"] : null
      )}
      {...props}
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {title && <h2 className={styles["title"]}>{title}</h2>}
      <div className={styles["section-content"]}>{children}</div>
    </motion.section>
  );
}
