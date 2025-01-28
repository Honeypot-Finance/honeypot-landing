import styles from "./BerachainIntro.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";

import whatIsBerachain from "./what-is-berachain.png";
import whatIsAdvantage from "./what-is-advantage.png";

export default function BerachainIntro() {
  return (
    <div className={styles["honeypot-academia-intro"]}>
      <h2 className="w-full text-center text-2xl font-bold ">
        Honeypot Academia
      </h2>
      <div className={styles["academy-cards"]}>
        <BerachainIntroCard
          icon={whatIsAdvantage}
          title="What is the advantage"
          description="Honeypot is a comprehensive DeFi hub that acts as the PoL Accelerator, we are committed to providing the tools and protocols needed for launching and trading long-tail assets, maintaining their quality, and supporting their expansion"
        />
        <BerachainIntroCard
          icon={whatIsBerachain}
          title="What is Berachain"
          description="Berachain is a high-performance EVM-identical blockchain built on Proof-of-Liquidity consensus, and supported by the BeaconKit framework. "
        />
      </div>
    </div>
  );
}

export function BerachainIntroCard({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className={styles["academy-card"]}>
      <Image src={icon} alt={title} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
