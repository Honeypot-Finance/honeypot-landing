import Image from "next/image";
import type { Article } from "@/content/articles";
import { articleArtwork } from "./articleArtwork";
import styles from "./Articles.module.scss";

export default function ArticleVisual({
  visual,
  compact = false,
  priority = false,
  sizes = "(max-width: 540px) calc(100vw - 44px), (max-width: 1440px) 46vw, 650px",
}: {
  visual: Article["visual"];
  compact?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const artwork = articleArtwork[visual];

  return (
    <div className={`${styles.visual} ${styles[visual]} ${compact ? styles.compactVisual : ""}`}>
      <div className={styles.artLayer}>
        <Image
          className={styles.artImage}
          src={artwork.src}
          alt={artwork.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition: artwork.objectPosition }}
        />
      </div>
    </div>
  );
}
