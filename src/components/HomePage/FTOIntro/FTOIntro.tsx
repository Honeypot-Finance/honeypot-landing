import Image from "next/image";
import styles from "./FTOIntro.module.scss";
import svgPlaceholder from "@/assets/svganimationplaceholder.png";

export default function FTOIntro() {
  return (
    <div className={styles["fto-intro"]}>
      <div className={styles["image-container"]}>
        <Image src={svgPlaceholder} alt="" width={500} height={500}></Image>
      </div>
      <div className={styles["text-container"]}>text contents</div>
    </div>
  );
}
