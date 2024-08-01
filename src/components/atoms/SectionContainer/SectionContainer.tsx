"use client";
import styles from "./SectionContainer.module.scss";
import classNames from "classnames";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import styleVar from "@/styles/variables";

interface SectionContainerProps extends MotionProps {
  title?: string;
  bgColor?: string;
}

export default function SectionContainer({
  children,
  title,
  bgColor,
  ...props
}: SectionContainerProps) {
  return (
    <motion.section
      className={classNames(
        styles["section-container"],
        title ? styles["has-title"] : null
      )}
      {...props}
      style={{
        backgroundColor: bgColor ? bgColor : styleVar.backgroundColor,
        ...props.style,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {title && <h2 className={styles["title"]}>{title}</h2>}
      <div className={styles["section-content"]}>{children as ReactNode}</div>
    </motion.section>
  );
}
