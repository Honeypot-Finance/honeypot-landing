"use client";
import React from "react";
import styles from "./ImageTextIllustration.module.scss";
import classNames from "classnames";

interface ImageTextIllustrationProps {
  title: string;
  paragraph: string;
  children?: React.ReactNode;
  swap?: boolean;
}

export default function ImageTextIllustration({
  title,
  paragraph,
  children,
  swap,
}: ImageTextIllustrationProps) {
  return (
    <div
      className={classNames(styles["container"], swap ? styles["swap"] : "")}
    >
      {/**
       * Fair Access: Uniform pricing across all users ensures no single user gains an unfair advantage,
       * promoting equitable token distribution.
       */}
      <div className={styles["image-content"]}>{children}</div>
      <div className={styles["text-content"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["paragraph"]}>{paragraph}</p>
      </div>
    </div>
  );
}
