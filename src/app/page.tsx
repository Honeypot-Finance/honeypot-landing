import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, type Article } from "@/content/articles";
import { investors } from "@/config/partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Arrow from "@/components/editorial/Arrow";
import { PotMark } from "@/components/editorial/Brand";
import ArticleVisual from "@/components/editorial/ArticleVisual";
import { appPathsList, legacyAppLinks } from "@/config/allAppPath";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function StoryCard({ article }: { article: Article }) {
  return (
    <article className={styles.storyCard}>
      <Link href={`/articles/${article.slug}`}>
        <ArticleVisual visual={article.visual} sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1440px) 46vw, 650px" />
        <div className={styles.storyBody}>
          <h3>{article.title}</h3>
          <div className={styles.storyMeta}><span>{article.readTime}</span><Arrow /></div>
        </div>
      </Link>
    </article>
  );
}

function AlphaMotif({ subject }: { subject: "crypto" | "ai" | "semiconductors" }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true" className={styles.alphaMotif}>
      {subject === "crypto" ? (
        <>
          <circle cx="160" cy="112" r="77" fill="#e1e5cd" />
          <path d="m160 39 68 38v78l-68 39-68-39V77l68-38Zm0 0v76m68-38-68 38-68-38m68 38v79m-68-39 68-40 68 40" stroke="#536744" strokeWidth="2" />
          <circle cx="160" cy="115" r="27" fill="#ffd342" stroke="#536744" strokeWidth="2" />
          <path d="m150 107 10-6 10 6v16l-10 6-10-6v-16Zm0 0 10 6 10-6m-10 6v16" stroke="#536744" strokeWidth="1.5" />
          {[[160, 39], [228, 77], [228, 155], [160, 194], [92, 155], [92, 77]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#f7f5ee" stroke="#536744" strokeWidth="2" />)}
        </>
      ) : subject === "ai" ? (
        <>
          <circle cx="160" cy="112" r="77" fill="#eee1c7" />
          <path d="M86 65h50m-50 92h50m48-46h47m-95-46 24 46-24 46m24-46h-55m79-46-24 46 24 46" stroke="#76694b" strokeWidth="2" />
          <rect x="69" y="48" width="34" height="34" rx="10" fill="#fffdf4" stroke="#76694b" strokeWidth="2" />
          <rect x="69" y="140" width="34" height="34" rx="10" fill="#fffdf4" stroke="#76694b" strokeWidth="2" />
          <rect x="217" y="94" width="34" height="34" rx="10" fill="#fffdf4" stroke="#76694b" strokeWidth="2" />
          <circle cx="160" cy="111" r="32" fill="#ffd342" stroke="#76694b" strokeWidth="2" />
          <path d="m160 91 5 14 15 6-15 5-5 15-5-15-15-5 15-6 5-14Z" fill="#76694b" />
          <circle cx="136" cy="65" r="7" fill="#c5d0b1" stroke="#76694b" strokeWidth="2" />
          <circle cx="184" cy="65" r="7" fill="#c5d0b1" stroke="#76694b" strokeWidth="2" />
          <circle cx="136" cy="157" r="7" fill="#c5d0b1" stroke="#76694b" strokeWidth="2" />
          <circle cx="184" cy="157" r="7" fill="#c5d0b1" stroke="#76694b" strokeWidth="2" />
        </>
      ) : (
        <>
          <circle cx="160" cy="112" r="77" fill="#dbe1cf" />
          <path d="M122 45v24m25-24v24m26-24v24m25-24v24M122 155v24m25-24v24m26-24v24m25-24v24M93 87H69m24 25H69m24 25H69m158-50h24m-24 25h24m-24 25h24" stroke="#536744" strokeWidth="3" strokeLinecap="round" />
          <rect x="93" y="69" width="134" height="86" rx="10" fill="#8b9a74" stroke="#536744" strokeWidth="2" />
          <rect x="118" y="86" width="84" height="52" rx="4" fill="#f6e19b" stroke="#536744" strokeWidth="2" />
          <path d="M145 86v52m29-52v52m-56-26h84" stroke="#536744" strokeWidth="1.5" />
          <circle cx="214" cy="143" r="3" fill="#f7f5ee" />
        </>
      )}
    </svg>
  );
}

export default function HomePage() {
  const aiArticles = articles.filter((article) => article.section === "AI");
  const web3Articles = articles.filter((article) => article.section === "Web3");
  const educationArticles = articles.filter((article) => article.section === "Technical Education");

  return (
    <div className={styles.site}>
      <a href="#main-content" className={styles.skipLink}>Skip to content</a>
      <Navbar menuList={appPathsList} showWallet={false} />
      <main id="main-content" className={styles.main}>
        <section className={`${styles.hero} ${styles.container}`} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <h1 id="hero-title">Good ideas<br />deserve<br /><span>attention.</span></h1>
            <p>Independent perspectives on AI, Web3, and the technology behind them.</p>
            <a href="#ai" className={styles.primaryButton}>Explore the stories<Arrow /></a>
          </div>
          <div className={styles.heroImage}>
            <Image src="/images/editorial/honeypot-world.png" alt="An anime-inspired world of floating islands, with a sunglasses-wearing honey pot reading beside a curious explorer." fill priority sizes="(max-width: 760px) 100vw, (max-width: 1440px) 60vw, 780px" />
          </div>
        </section>

        <section id="ai" className={`${styles.readingSection} ${styles.container}`} aria-labelledby="ai-title">
          <h2 id="ai-title" className={styles.sectionTitle}>AI</h2>
          <div className={styles.storyGrid}>{aiArticles.map((article) => <StoryCard key={article.slug} article={article} />)}</div>
        </section>

        <section id="web3" className={`${styles.web3Section} ${styles.container}`} aria-labelledby="web3-title">
          <h2 id="web3-title" className={styles.sectionTitle}>Web3</h2>
          {web3Articles.map((article) => (
            <article key={article.slug} className={styles.web3Feature}>
              <Link href={`/articles/${article.slug}`}>
                <ArticleVisual visual={article.visual} sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1440px) 56vw, 750px" />
                <div className={styles.web3StoryBody}>
                  <h3>{article.title}</h3>
                  <div className={styles.storyMeta}><span>{article.readTime}</span><Arrow /></div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <section id="technical-education" className={styles.academy} aria-labelledby="academy-title">
          <div className={styles.container}>
            <div className={styles.academyHeading}>
              <h2 id="academy-title" className={styles.sectionTitle}>Technical<br />Education</h2>
              <figure className={styles.professorPot}>
                <Image src="/images/experiment-bear.png" alt="Professor Pot in his original red cap, lab coat, and goggles, holding a flask of honey." width={230} height={276} sizes="(max-width: 540px) 112px, 170px" />
                <figcaption>Learn with<br />Professor Pot</figcaption>
              </figure>
            </div>
            <div className={styles.storyGrid}>{educationArticles.map((article) => <StoryCard key={article.slug} article={article} />)}</div>
          </div>
        </section>

        <section id="alpha" className={`${styles.alphaSection} ${styles.container}`} aria-labelledby="alpha-title">
          <div className={styles.alphaPanel}>
            <div className={styles.alphaHeading}>
              <h2 id="alpha-title" className={styles.sectionTitle}>Alpha</h2>
              <span className={styles.comingSoon}>Coming soon</span>
            </div>
            <p>Investment insights across crypto, AI, and semiconductors.</p>
            <div className={styles.alphaSubjects}>
              <div><AlphaMotif subject="crypto" /><h3>Crypto</h3></div>
              <div><AlphaMotif subject="ai" /><h3>AI</h3></div>
              <div><AlphaMotif subject="semiconductors" /><h3>Semiconductors</h3></div>
            </div>
          </div>
        </section>

        <section id="licensing" className={`${styles.licensing} ${styles.container}`} aria-labelledby="licensing-title">
          <div className={styles.licensingHeading}>
            <h2 id="licensing-title" className={styles.sectionTitle}>Technology<br />licensing</h2>
            <p>Smart-contract technology for token launches, liquidity, NFTs, and community infrastructure. Talk to us about the technology and licensing scope that fit your project.</p>
            <div className={styles.licensingContacts}>
              <a href="https://t.me/wilsoncaroline1210" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Discuss licensing<Arrow diagonal /></a>
              <a href="mailto:contact@honeypotfinance.xyz" className={styles.licensingEmail}>contact@honeypotfinance.xyz<Arrow diagonal /></a>
            </div>
          </div>
          <aside className={styles.auditProof}>
            <h3>Audited smart contracts.<br />Built through crypto cycles.</h3>
            <p>Our FTO launchpad, All-in-One Vault, Pot2Pump, and NFT staking contracts have undergone independent security reviews by Hashlock and Shieldify.</p>
            <div className={styles.auditLinks}>
              <a href="https://docs.honeypotfinance.xyz/more-info/security-audit" target="_blank" rel="noopener noreferrer">Audit reports<Arrow diagonal /></a>
              <a href="https://github.com/shieldify-security/audits-portfolio/blob/main/reports/Honeypot-Finance-NFTStaking-Security-Review.pdf" target="_blank" rel="noopener noreferrer">NFT staking report<Arrow diagonal /></a>
            </div>
          </aside>
        </section>

        <section id="community" className={styles.community} aria-labelledby="community-title">
          <div className={`${styles.communityInner} ${styles.container}`}>
            <div className={styles.communityPot} aria-hidden="true"><PotMark sizes="420px" /></div>
            <div className={styles.communityCopy}>
              <h2 id="community-title" className={styles.sectionTitle}>The Honeypot community</h2>
              <div className={styles.communityActions}>
                <a href="https://discord.gg/NfnK78KJxH" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Join Discord<Arrow diagonal /></a>
                <a href="https://x.com/honeypotfinance" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Follow on X<Arrow diagonal /></a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.investorSection} ${styles.container}`} aria-labelledby="investor-title">
          <h2 id="investor-title" className={styles.sectionTitle}>Our investors</h2>
          <div className={styles.investorGrid}>
            {investors.map((investor) => (
              <a href={investor.partnerLink} key={investor.name} target="_blank" rel="noopener noreferrer">
                <span><Image src={investor.partnerImage} alt="" width={72} height={72} sizes="72px" /></span>
                <span>{investor.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="legacy" className={`${styles.legacySection} ${styles.container}`} aria-labelledby="legacy-title">
          <h2 id="legacy-title" className={styles.sectionTitle}>Legacy apps</h2>
          <nav aria-label="Original Honeypot applications" className={styles.legacyLinks}>
            {legacyAppLinks.map((link) => <a key={link.title} href={link.path} target="_blank" rel="noopener noreferrer">{link.title}<Arrow diagonal /></a>)}
          </nav>
        </section>
      </main>
      <Footer />
    </div>
  );
}
