import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type Menu = {
  path:
    | string
    | {
        path: string;
        title: string;
        routePath: string;
        icon?: StaticImageData;
        beforeElement?: ReactNode;
        afterElement?: ReactNode;
      }[];
  title: string;
  routePath?: string;
  icon?: StaticImageData;
  beforeElement?: ReactNode;
  afterElement?: ReactNode;
};

export type flatMenu = {
  path: string;
  title: string;
  icon?: StaticImageData;
};

export const legacyAppLinks = [
  { title: "Leaderboard", path: "https://leaderboard.honeypotfinance.xyz/leaderboard" },
  { title: "Docs", path: "https://docs.honeypotfinance.xyz/" },
  { title: "All-in-one vault", path: "https://leaderboard.honeypotfinance.xyz/" },
  { title: "NFT staking", path: "https://nft.honeypotfinance.xyz/staking" },
];

export const appPathsList: Menu[] = [
  { title: "AI", path: "/#ai" },
  { title: "Web3", path: "/#web3" },
  { title: "Technical Education", path: "/#technical-education" },
  { title: "Licensing", path: "/#licensing" },
  {
    title: "Legacy apps",
    path: legacyAppLinks.map((link) => ({ ...link, routePath: link.path })),
  },
];

export const flatAppPath: flatMenu[] = appPathsList.flatMap((menu) =>
  typeof menu.path === "string"
    ? [{ path: menu.path, title: menu.title }]
    : menu.path.map(({ path, title }) => ({ path, title }))
);
