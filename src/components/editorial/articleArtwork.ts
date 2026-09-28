import type { Article } from "@/content/articles";

type ArticleArtwork = {
  src: string;
  alt: string;
  objectPosition: string;
  category: string;
  caption: string;
};

export const articleArtwork = {
  manifesto: {
    src: "/images/editorial/manifesto-anime.png",
    alt: "An anime explorer and a sunglasses-wearing honey pot watch glowing paper birds carry ideas between a library and floating islands.",
    objectPosition: "50% 50%",
    category: "OUR NEXT CHAPTER",
    caption: "Good ideas travel further together.",
  },
  muse: {
    src: "/images/editorial/muse-anime.png",
    alt: "An anime traveler holds a glowing key beside a honey pot, floating travel plans, and a star-shaped AI companion in a twilight café.",
    objectPosition: "50% 50%",
    category: "ARTIFICIAL INTELLIGENCE",
    caption: "A little intention. A new possibility.",
  },
  jev: {
    src: "/images/editorial/jev-anime.png",
    alt: "Professor Pot and a honey pot run a colorful sorting machine with separate chutes for paper planes, a review bell, and approved tokens.",
    objectPosition: "50% 50%",
    category: "TECHNICAL EDUCATION",
    caption: "Small decisions. Different directions.",
  },
  contracts: {
    src: "/images/editorial/contracts-anime.png",
    alt: "An anime courier and a honey pot enter a floating city through three arches marked with an identity silhouette, stars, and a magnifier.",
    objectPosition: "50% 50%",
    category: "THE ONCHAIN WORLD",
    caption: "Trust begins with a better question.",
  },
  credits: {
    src: "/images/editorial/credits-anime.png",
    alt: "Professor Pot presents a finished painting beside a honey pot and a locked transparent chest that still holds the source art cards.",
    objectPosition: "50% 50%",
    category: "TECHNICAL EDUCATION",
    caption: "Look closer at what the code keeps.",
  },
} satisfies Record<Article["visual"], ArticleArtwork>;
