import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Arrow from "@/components/editorial/Arrow";
import ArticleVisual from "@/components/editorial/ArticleVisual";
import { articleArtwork } from "@/components/editorial/articleArtwork";
import ArticleDiagram from "@/components/editorial/ArticleDiagram";
import ArticleMotion from "@/components/editorial/ArticleMotion";
import { appPathsList } from "@/config/allAppPath";
import styles from "@/components/editorial/Articles.module.scss";

interface ArticlePageProps { params: Promise<{ slug: string }> }

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const artwork = articleArtwork[article.visual];
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/articles/${article.slug}`,
      publishedTime: article.date,
      authors: ["Honeypot Finance"],
      tags: [article.section],
      images: [{ url: artwork.src, width: 1536, height: 1024, alt: artwork.alt }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [artwork.src] },
  };
}

const sectionLinks = { AI: "/#ai", Web3: "/#web3", "Technical Education": "/#technical-education" };

function ArticleParagraph({ text, linkLaunchvibes }: { text: string; linkLaunchvibes: boolean }) {
  const index = linkLaunchvibes ? text.indexOf("Launchvibes") : -1;
  return <p>{index < 0 ? text : <>{text.slice(0, index)}<a href="https://www.launchvibes.tech/" target="_blank" rel="noopener noreferrer">Launchvibes</a>{text.slice(index + "Launchvibes".length)}</>}</p>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = article.relatedSlugs.flatMap((slug) => { const item = getArticle(slug); return item ? [item] : []; });
  const firstProductMention = article.sections.flatMap(({ paragraphs }) => paragraphs).find((paragraph) => paragraph.includes("Launchvibes"));
  const date = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(article.date));

  return (
    <div className={styles.articleSite}>
      <a className={styles.skipLink} href="#article-content">Skip to article</a>
      <Navbar menuList={appPathsList} showWallet={false} />
      <main className={styles.articleMain}>
        <header className={styles.articleHeader}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={sectionLinks[article.section]}>{article.section}</Link></nav>
          <div className={styles.articleHeaderGrid}>
            <div><h1>{article.title}</h1><p className={styles.articleDescription}>{article.description}</p><div className={styles.byline}><span>Honeypot Editorial</span><span aria-hidden="true">·</span><time dateTime={article.date}>{date}</time><span aria-hidden="true">·</span><span>{article.readTime}</span></div><p className={styles.writingCredit}>Content writing supported by <a href="https://florus.ai/" target="_blank" rel="noopener noreferrer">florus.ai</a></p></div>
            <ArticleVisual visual={article.visual} priority sizes="(max-width: 800px) calc(100vw - 44px), (max-width: 1328px) 40vw, 490px" />
          </div>
        </header>
        <div className={styles.articleLayout}>
          <aside className={styles.articleSidebar}><details className={styles.contents}><summary>In this article</summary><nav aria-label="On this page">{article.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#sources">Sources</a></nav></details><Link href={sectionLinks[article.section]} className={styles.backLink}>Back to {article.section}<Arrow /></Link></aside>
          <article id="article-content" className={styles.articleBody}>
            <p className={styles.articleHook}>{article.hook}</p>
            {article.sections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className={`${styles.proseSection} ${sectionIndex === article.sections.length - 1 ? styles.closingSection : ""}`}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => <ArticleParagraph key={`${section.id}-${index}`} text={paragraph} linkLaunchvibes={paragraph === firstProductMention} />)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                {section.diagram ? <><ArticleMotion kind={section.diagram} /><details className={styles.diagramDetails}><summary>Read the full mechanism</summary><ArticleDiagram kind={section.diagram} /></details></> : null}
                {section.sourceIds?.length ? <div className={styles.inlineSources}><span>References</span>{section.sourceIds.map((id) => { const sourceIndex = article.sources.findIndex((item) => item.id === id); const source = article.sources[sourceIndex]; return source ? <a href={`#source-${id}`} key={id} title={source.label} aria-label={`Reference ${sourceIndex + 1}: ${source.label}`}>[{sourceIndex + 1}]</a> : null; })}</div> : null}
              </section>
            ))}
            <section id="sources" className={styles.articleSources} aria-labelledby="sources-title"><h2 id="sources-title">Sources & further reading</h2><ol>{article.sources.map((source) => <li key={source.id} id={`source-${source.id}`}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<Arrow diagonal /></a>{source.note ? <p>{source.note}</p> : null}</li>)}</ol></section>
            <div className={styles.articleConversation}><span>Good questions make this better.</span><a href="https://discord.gg/NfnK78KJxH" target="_blank" rel="noopener noreferrer">Join the conversation<Arrow diagonal /></a></div>
          </article>
        </div>
        <section className={styles.relatedSection} aria-labelledby="related-title"><div className={styles.relatedHeading}><h2 id="related-title">Keep reading</h2><Link href="/">All articles<Arrow /></Link></div><div className={styles.relatedGrid}>{related.map((item) => <Link key={item.slug} href={`/articles/${item.slug}`} className={styles.relatedCard}><ArticleVisual visual={item.visual} compact sizes="(max-width: 540px) calc(100vw - 44px), (max-width: 1216px) 44vw, 540px" /><h3>{item.title}</h3><span className={styles.relatedMeta}>{item.readTime}<Arrow diagonal /></span></Link>)}</div></section>
      </main>
      <Footer />
    </div>
  );
}
