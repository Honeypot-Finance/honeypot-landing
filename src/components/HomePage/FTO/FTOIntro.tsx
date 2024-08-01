"use client";
import Image from "next/image";
import styles from "./FTOIntro.module.scss";
import svgPlaceholder from "@/assets/svganimationplaceholder.png";
import Slider from "react-slick";
import { motion } from "framer-motion";

//beras
import blackHoodie from "@/assets/beras/blackHoodie.png";
import blackSuit from "@/assets/beras/blackSuit.png";
import holdHoney from "@/assets/beras/holdHoney.png";
import purpleHeadcover from "@/assets/beras/purpleHeadcover.png";
import whiteShirt from "@/assets/beras/whiteShirt.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function FTOIntro() {
  return (
    <div className={styles["fto-intro"]}>
      <Slider {...settings} className={styles["slider"]}>
        {/**
         * Fair Access: Uniform pricing across all users ensures no single user gains an unfair advantage,
         * promoting equitable token distribution.
         */}
        <div>
          <div className={styles["fto-slide"]}>
            <div>
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
                    width={300}
                    height={300}
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
                    width={300}
                    height={300}
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
                    width={300}
                    height={300}
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
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles["text-content"]}>
              <h1 className={styles["title"]}>Fair Access</h1>
              <p className={styles["paragraph"]}>
                Uniform pricing across all users ensures no single user gains an
                unfair advantage, promoting equitable token distribution.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles["fto-slide"]}>
            <div className={styles["image-container"]}>2</div>
            <div className={styles["text-container"]}>text contents</div>
          </div>
        </div>

        <div>
          <div className={styles["fto-slide"]}>
            <div className={styles["image-container"]}>3</div>
            <div className={styles["text-container"]}>text contents</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
