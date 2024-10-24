import style from "./page.module.scss";
import Image from "next/image";

import seagull from "@/assets/other/seagull.png";
import sun from "@/assets/other/sun.png";
import cloud from "@/assets/what_is_berachain/cloud.png";
import beach from "@/assets/what_is_berachain/beach.png";
import seaStar from "@/assets/other/sea_star.svg";
import seaLayer from "@/assets/what_is_berachain/sea_layer.png";
import wibTitle from "@/assets/what_is_berachain/wib_title.png";
import questionBera from "@/assets/beras/question.png";

export default function WhatIsBerachain() {
  return (
    <div className={style["whatisberachain"]}>
      <WIBBanner />
    </div>
  );
}

function WIBBanner() {
  return (
    <div className={style["wib_banner"]}>
      <div className={style["layer_bg"]}>
        <Image
          className={style["seagull_1"]}
          alt=""
          src={seagull}
          width={1024}
          height={1024}
        ></Image>
        <Image
          className={style["seagull_2"]}
          alt=""
          src={seagull}
          width={1024}
          height={1024}
        ></Image>
        <Image
          className={style["seagull_3"]}
          alt=""
          src={seagull}
          width={1024}
          height={1024}
        ></Image>

        <Image
          className={style["sun"]}
          alt=""
          src={sun}
          width={1024}
          height={1024}
        ></Image>

        <Image
          className={style["cloud_1"]}
          alt=""
          src={cloud}
          width={1024}
          height={1024}
        ></Image>
        <Image
          className={style["cloud_2"]}
          alt=""
          src={cloud}
          width={1024}
          height={1024}
        ></Image>
      </div>
      <div className={style["layer_sea"]}></div>
      <div className={style["layer_beach"]}>
        <Image
          className={style["sea_star_1"]}
          alt=""
          src={seaStar}
          width={1024}
          height={1024}
        ></Image>
        <Image
          className={style["sea_star_2"]}
          alt=""
          src={seaStar}
          width={1024}
          height={1024}
        ></Image>

        <Image
          className={style["question_bera"]}
          alt=""
          src={questionBera}
          width={1024}
          height={1024}
        ></Image>
      </div>
      <Image
        className={style["title"]}
        alt=""
        src={wibTitle}
        width={1024}
        height={1024}
      ></Image>
    </div>
  );
}
