import Link from "next/link";
import { legacyAppLinks } from "@/config/allAppPath";
import Brand from "@/components/editorial/Brand";
import Arrow from "@/components/editorial/Arrow";
import styles from "@/components/editorial/Editorial.module.scss";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Brand />
          <p>AI, Web3, and the people building them.</p>
        </div>
        <nav aria-label="Explore" className={styles.footerColumn}>
          <h2>Explore</h2>
          <Link href="/#ai">AI</Link>
          <Link href="/#web3">Web3</Link>
          <Link href="/#technical-education">Technical Education</Link>
          <Link href="/#alpha">Alpha</Link>
          <Link href="/#licensing">Technology licensing</Link>
          <Link href="/articles/attention-network-for-the-agi-era">Our new chapter<Arrow /></Link>
        </nav>
        <nav aria-label="Community" className={styles.footerColumn}>
          <h2>Community</h2>
          <a href="https://www.youtube.com/@potuber" target="_blank" rel="noopener noreferrer">Potuber / YouTube<Arrow diagonal /></a>
          <a href="https://x.com/honeypotfinance" target="_blank" rel="noopener noreferrer">X / Twitter<Arrow diagonal /></a>
          <a href="https://discord.gg/NfnK78KJxH" target="_blank" rel="noopener noreferrer">Discord<Arrow diagonal /></a>
          <a href="https://github.com/Honeypot-Finance" target="_blank" rel="noopener noreferrer">GitHub<Arrow diagonal /></a>
          <h2 className={styles.footerSubheading}>Licensing enquiries</h2>
          <a href="https://t.me/wilsoncaroline1210" target="_blank" rel="noopener noreferrer">Telegram<Arrow diagonal /></a>
          <a href="mailto:contact@honeypotfinance.xyz">contact@honeypotfinance.xyz</a>
        </nav>
        <nav aria-label="Legacy apps" className={styles.footerColumn}>
          <h2>Legacy apps</h2>
          {legacyAppLinks.map((link) => <a key={link.title} href={link.path} target="_blank" rel="noopener noreferrer">{link.title}<Arrow diagonal /></a>)}
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Honeypot Finance</p>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-use">Terms</Link></div>
      </div>
      <div className={styles.footerCredits}>GTM powered by <a href="https://florus.ai/" target="_blank" rel="noopener noreferrer">florus.ai</a></div>
    </footer>
  );
}
