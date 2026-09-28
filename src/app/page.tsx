import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";
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
            <div className={styles.eyebrow}><span className={styles.statusDot} />INDEPENDENT MINDS. SHARED DISCOVERY.</div>
            <h1 id="hero-title">Good ideas<br />deserve<br /><span>attention.</span><span className={styles.headlineStar} aria-hidden="true">✳</span></h1>
            <p>Finding the signal in AI & Web3.<br />Fresh perspectives, useful knowledge, and the technology to build what comes next.</p>
            <div className={styles.heroActions}>
              <a href="#ai" className={styles.primaryButton}>Follow your curiosity<Arrow /></a>
              <Link href="/articles/attention-network-for-the-agi-era" className={styles.textLink}>Our new chapter<Arrow /></Link>
            </div>
            <div className={styles.heroFootnote}><span aria-hidden="true">↳</span>A new chapter for Honeypot Finance.</div>
          </div>
          <div className={styles.heroArtwork}>
            <div className={styles.artworkLabel}><span>THE WORLD IS STILL BEING BUILT.</span><span aria-hidden="true">↗</span></div>
            <div className={styles.heroImage}>
              <Image src="/images/editorial/honeypot-world.png" alt="An anime-inspired world of floating islands, with a sunglasses-wearing honey pot reading beside a curious explorer." fill priority sizes="(max-width: 760px) 100vw, (max-width: 1440px) 52vw, 700px" />
              <span className={styles.artworkSticker}>Stay curious.<br /><span>There’s more out there.</span></span>
            </div>
            <div className={styles.artworkCaption}><span>FIELD NOTES FROM THE NEXT FRONTIER</span><span>AI · WEB3 · HUMAN CURIOSITY</span></div>
          </div>
        </section>

        <div className={`${styles.beliefStrip} ${styles.container}`}>
          <span className={styles.beliefIntro}>A home for what’s next.</span>
          <span><span aria-hidden="true">✳</span> Ideas worth your attention</span>
          <span><span aria-hidden="true">↗</span> Technology worth understanding</span>
          <span><span aria-hidden="true">⌘</span> Innovation worth sharing</span>
        </div>

        <section id="ai" className={`${styles.readingSection} ${styles.container}`} aria-labelledby="ai-title">
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>01 / ARTIFICIAL INTELLIGENCE</span><h2 id="ai-title">AI, beyond the demo.</h2></div>
            <p className={styles.sectionDescription}>The ideas, agents, and people changing what technology can do. A closer look at what comes next.</p>
          </div>
          <div className={styles.aiStories}>
            {aiArticles.map((article) => <article key={article.slug} className={styles.nativeCard}><Link href={`/articles/${article.slug}`}><ArticleVisual visual={article.visual} /><div className={styles.nativeCardBody}><span className={styles.cardEyebrow}>{article.eyebrow}</span><h3>{article.title}</h3><p>{article.description}</p><div className={styles.nativeCardMeta}><span>Honeypot Editorial · {article.readTime}</span><span>Read the story<Arrow /></span></div></div></Link></article>)}
          </div>
        </section>

        <section id="web3" className={`${styles.web3Section} ${styles.container}`} aria-labelledby="web3-title">
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>02 / THE ONCHAIN WORLD</span><h2 id="web3-title">Web3, beneath the surface.</h2></div>
            <p className={styles.sectionDescription}>Ownership, trust, and coordination. The infrastructure matters as much as the narrative.</p>
          </div>
          {web3Articles.map((article) => <article key={article.slug} className={styles.web3Feature}><ArticleVisual visual={article.visual} sizes="(max-width: 760px) calc(100vw - 80px), (max-width: 1440px) 42vw, 550px" /><div><span className={styles.cardEyebrow}>{article.eyebrow}</span><h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><div className={styles.web3FeatureBottom}><Link className={styles.primaryButton} href={`/articles/${article.slug}`}>Explore the story<Arrow /></Link><span>{article.readTime} · An illustrated field note</span></div></div></article>)}
        </section>

        <section id="technical-education" className={`${styles.academy} ${styles.container}`} aria-labelledby="academy-title">
          <div className={styles.academyIntro}>
            <div className={styles.academyHeadingCopy}><span className={styles.eyebrow}>03 / TECHNICAL EDUCATION</span>
            <h2 id="academy-title">Big breakthroughs.<br /><span>Small first steps.</span></h2>
            <p>The future makes more sense when you know how it works. Original guides, clear diagrams, and practical questions to help you get past the headline.</p>
            <span className={styles.academyNote}><span aria-hidden="true">✳</span> Keep learning. Keep a little wonder.</span></div>
            <figure className={styles.professorPot}><Image src="/images/experiment-bear.png" alt="Professor Pot in his original red cap, lab coat, and goggles, holding a flask of honey." width={230} height={276} sizes="(max-width: 540px) 150px, 200px" /><figcaption><span>YOUR FIELD GUIDE</span><strong>Learn with<br />Professor Pot.</strong><p>A familiar face.<br />A new world to understand.</p></figcaption></figure>
          </div>
          <div className={styles.educationStories}>
            {educationArticles.map((article) => <article key={article.slug}><Link href={`/articles/${article.slug}`} className={styles.educationStory}><ArticleVisual visual={article.visual} compact sizes="(max-width: 760px) calc(100vw - 76px), (max-width: 1440px) 42vw, 570px" /><div><span className={styles.cardEyebrow}>{article.eyebrow}</span><h3>{article.title}</h3><p>{article.description}</p><div className={styles.educationStoryMeta}><span>{article.readTime} · With a visual walkthrough</span><Arrow /></div></div></Link></article>)}
          </div>
        </section>

        <section id="licensing" className={`${styles.licensing} ${styles.container}`} aria-labelledby="licensing-title">
          <div className={styles.licensingHeading}><span className={styles.eyebrow}>04 / TECHNOLOGY, SHARED</span><h2 id="licensing-title">Good technology<br />should go further.</h2><p>We license smart-contract technology and connect our innovations with teams ready to take them forward.</p><div className={styles.licensingContacts}><a href="https://t.me/wilsoncaroline1210" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Talk licensing on Telegram<Arrow diagonal /></a><a href="mailto:contact@honeypotfinance.xyz" className={styles.licensingEmail}>contact@honeypotfinance.xyz<Arrow diagonal /></a></div></div>
          <div className={styles.licensingDetails}>
            <aside className={styles.auditProof}><strong>Audited smart contracts.<br />Built through crypto cycles.</strong><a href="https://docs.honeypotfinance.xyz/more-info/security-audit" target="_blank" rel="noopener noreferrer">Read the audit reports<Arrow diagonal /></a><p>Our FTO launchpad, All-in-One Vault, Pot2Pump, and NFT staking contracts have undergone independent security reviews by Hashlock and Shieldify.</p><a href="https://github.com/shieldify-security/audits-portfolio/blob/main/reports/Honeypot-Finance-NFTStaking-Security-Review.pdf" target="_blank" rel="noopener noreferrer">NFT staking report<Arrow diagonal /></a></aside>
            <div><span className={styles.detailNumber}>01</span><div><h3>Built to find its next chapter</h3><p>Explore our technology across token launches, liquidity, NFT mechanics, and community infrastructure.</p></div></div>
            <div><span className={styles.detailNumber}>02</span><div><h3>Your team. New possibilities.</h3><p>Tell us what you’re building. We’ll discuss which technology, integration approach, and licensing scope could fit.</p></div></div>
            <div><span className={styles.detailNumber}>03</span><div><h3>A conversation before a contract</h3><p>Availability, technical maturity, and licensing terms are reviewed together. Contact our licensing team on Telegram or email to explore a fit.</p></div></div>
          </div>
        </section>

        <section id="community" className={styles.community} aria-labelledby="community-title">
          <div className={`${styles.communityInner} ${styles.container}`}>
            <div className={styles.communityDoodle} aria-hidden="true"><PotMark sizes="420px" /><span>hello, curious human.</span><i>✦</i></div>
            <div className={styles.communityCopy}><span className={styles.eyebrow}>THE BEST DISCOVERIES ARE SHARED.</span><h2 id="community-title">Find your people.<br />Bring your curiosity.</h2><p>For the builders, the deep divers, and the ones asking better questions. There’s a place for you in the hive.</p><div className={styles.communityActions}><a href="https://discord.gg/NfnK78KJxH" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Meet us on Discord<Arrow diagonal /></a><a href="https://x.com/honeypotfinance" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Follow on X<Arrow diagonal /></a></div></div>
          </div>
        </section>

        <section className={`${styles.investorSection} ${styles.container}`} aria-labelledby="investor-title">
          <div className={styles.investorHeading}><span className={styles.eyebrow}>PART OF OUR JOURNEY</span><h2 id="investor-title">Our investors.</h2></div>
          <div className={styles.investorGrid}>{investors.map((investor) => <a href={investor.partnerLink} key={investor.name} target="_blank" rel="noopener noreferrer"><span><Image src={investor.partnerImage} alt={investor.name} width={72} height={72} sizes="72px" /></span><span>{investor.name}</span></a>)}</div>
        </section>

        <section id="legacy" className={`${styles.legacySection} ${styles.container}`} aria-labelledby="legacy-title">
          <div><span className={styles.eyebrow}>PART OF OUR STORY. STILL HERE FOR YOU.</span><h2 id="legacy-title">Looking for the original apps?</h2><p>Quick access for our existing Honeypot community.</p></div>
          <nav aria-label="Original Honeypot applications" className={styles.legacyLinks}>{legacyAppLinks.map((link) => <a key={link.title} href={link.path} target="_blank" rel="noopener noreferrer">{link.title}<Arrow diagonal /></a>)}</nav>
        </section>
        <div className={`${styles.editorialNote} ${styles.container}`}><span>AI-native discovery. Human editorial judgment.</span><p>Our distribution brings together <a href="https://www.florus.ai/" target="_blank" rel="noopener noreferrer">Florus</a> and <a href="https://www.launchvibes.tech/" target="_blank" rel="noopener noreferrer">Launchvibes</a>. Our perspective stays human.</p></div>
      </main>
      <Footer />
    </div>
  );
}
