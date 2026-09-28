import Image from "next/image";
import Link from "next/link";
import styles from "./Editorial.module.scss";

export function PotMark({ className = "", sizes = "128px" }: { className?: string; sizes?: string }) {
  return (
    <span className={`${styles.potMark} ${className}`} aria-hidden="true">
      <Image
        src="/images/editorial/honeypot-logo.png"
        alt=""
        width={1254}
        height={1254}
        sizes={sizes}
      />
    </span>
  );
}

export default function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Honeypot Finance home">
      <PotMark />
      <span className={styles.wordmark}>
        honeypot<span>FINANCE</span>
      </span>
    </Link>
  );
}
