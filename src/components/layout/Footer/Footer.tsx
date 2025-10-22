import styles from "./Footer.module.scss";
import Image from "next/image";
import logoLight from "@/assets/logo_light.svg";
import stayUpToDateText from "@/assets/effectItems/stay-up-to-date-text.svg";

import discord from "@/assets/medias/discord.svg";
import twitter from "@/assets/medias/twitter.svg";
import medium from "@/assets/medias/medium.svg";
import telegram from "@/assets/medias/telegram.svg";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div>
        {" "}
        <Image
          src={logoLight}
          alt="logo"
          className={styles["logo"]}
          width={200}
          height={100}
        />
      </div>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <h3>Learn More</h3>
          <ul>
            <li>
              <a href="https://docs.honeypotfinance.xyz/">Docs</a>
            </li>
            <li>
              <a href="https://github.com/Honeypot-Finance">GitHub</a>
            </li>
            <li>
              <a href="https://medium.com/@HoneypotFinance1">Medium</a>
            </li>
            <li>
              <a href="https://magiceden.io/collections/berachain/honeygenesis-44">
                HoneyGenesis
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h3>Apps</h3>
          <ul>
            <li>
              <a href="https://pot2pump.honeypotfinance.xyz/">Pot2Pump</a>
            </li>
            <li>
              <a href="https://beta4.honeypotfinance.xyz/swap">
                Pot-Wasabee Dex
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <Image
            src={stayUpToDateText}
            alt="stay up to date"
            className={styles["stay-up-to-date-text"]}
            width={200}
            height={100}
          />
          <ul className={styles["media-container"]}>
            <li>
              <a href="https://discord.gg/honeypotfi">
                <div>
                  <Image
                    src={discord}
                    alt="discord"
                    className={styles["image"]}
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://t.me/+tE1KgsD-GxJhOTg0">
                <div>
                  <Image
                    src={telegram}
                    alt="telegram"
                    className={styles["image"]}
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/honeypotfinance">
                <div>
                  <Image
                    src={twitter}
                    alt="twitter"
                    className={styles["image"]}
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@HoneypotFinance1">
                <div>
                  <Image
                    src={medium}
                    alt="medium"
                    className={styles["image"]}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
