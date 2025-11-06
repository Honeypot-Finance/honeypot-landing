import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type Menu = {
  path:
    | string
    | {
        path: string;
        title: string;
        routePath: string;
        icon?: StaticImageData;
        footer?: ReactNode;
        external?: boolean;
      }[];
  title: string;
  routePath?: string;
  icon?: StaticImageData;
  external?: boolean;
};

export type flatMenu = {
  path: string;
  title: string;
  icon?: StaticImageData;
  external?: boolean;
};

export const appPathsList: Menu[] = [
  {
    title: "Trade",
    path: [
      {
        title: "Perp",
        path: "https://wasabee.honeypotfinance.xyz/perp",
        routePath: "https://wasabee.honeypotfinance.xyz/perp",
        external: true,
      },
      {
        title: "Swap",
        path: "https://wasabee.honeypotfinance.xyz/swap",
        routePath: "https://wasabee.honeypotfinance.xyz/swap",
        external: true,
      },
      {
        title: "Multi-Token Swap",
        path: "https://wasabee.honeypotfinance.xyz/xswap",
        routePath: "https://wasabee.honeypotfinance.xyz/xswap",
        external: true,
      },
      {
        title: "Cross-Chain Swap",
        path: "https://wasabee.honeypotfinance.xyz/cross-chain-swap",
        routePath: "https://wasabee.honeypotfinance.xyz/cross-chain-swap",
        external: true,
      },
      {
        title: "Bridge",
        path: "https://wasabee.honeypotfinance.xyz/bridge",
        routePath: "https://wasabee.honeypotfinance.xyz/bridge",
        external: true,
      },
    ],
  },
  {
    title: "Earn",
    path: [
      {
        title: "Pools",
        path: "https://wasabee.honeypotfinance.xyz/pools",
        routePath: "https://wasabee.honeypotfinance.xyz/pools",
        external: true,
      },
      {
        title: "Automated Vaults",
        path: "https://wasabee.honeypotfinance.xyz/pools",
        routePath: "https://wasabee.honeypotfinance.xyz/pools",
        external: true,
      },
      {
        title: "All In One Vault",
        path: "https://leaderboard.honeypotfinance.xyz/",
        routePath: "https://leaderboard.honeypotfinance.xyz/",
        external: true,
      },
    ],
  },
  {
    title: "Token Launch",
    path: [
      {
        title: "Dreampad",
        path: "https://dreampad.honeypotfinance.xyz/",
        routePath: "https://dreampad.honeypotfinance.xyz/",
        external: true,
      },
      {
        title: "Pot2Pump Overview",
        path: "https://pot2pump.honeypotfinance.xyz/",
        routePath: "https://pot2pump.honeypotfinance.xyz/",
        external: true,
      },
      {
        title: "Launch Meme",
        path: "https://pot2pump.honeypotfinance.xyz/potting",
        routePath: "https://pot2pump.honeypotfinance.xyz/potting",
        external: true,
      },
      {
        title: "Trade Meme",
        path: "https://pot2pump.honeypotfinance.xyz/pumping",
        routePath: "https://pot2pump.honeypotfinance.xyz/pumping",
        external: true,
      },
    ],
  },
  {
    title: "Leaderboard",
    path: [
      {
        title: "Points",
        path: "https://points.honeypotfinance.xyz/loyalty",
        routePath: "https://points.honeypotfinance.xyz/loyalty",
        external: true,
      },
      {
        title: "App Leaderboard",
        path: "https://leaderboard.honeypotfinance.xyz/leaderboard",
        routePath: "https://leaderboard.honeypotfinance.xyz/leaderboard",
        external: true,
      },
      {
        title: "All in one vault",
        path: "https://leaderboard.honeypotfinance.xyz/all-in-one-vault",
        routePath: "https://leaderboard.honeypotfinance.xyz/all-in-one-vault",
        external: true,
      },
      {
        title: "NFT Staking",
        path: "https://nft.honeypotfinance.xyz/staking",
        routePath: "https://nft.honeypotfinance.xyz/staking",
        external: true,
      },
    ],
  },
  {
    title: "Docs",
    path: "https://docs.honeypotfinance.xyz/",
    external: true,
  },
];

const getFlatPaths = (paths: Menu[]): flatMenu[] => {
  let flatPaths: flatMenu[] = [];

  paths.forEach((path) => {
    if (typeof path.path === "string") {
      flatPaths.push({
        path: path.path,
        title: path.title,
        external: path.external,
      });
    }
    if (Array.isArray(path.path)) {
      flatPaths = [...flatPaths, ...getFlatPaths(path.path)];
    }
  });

  return flatPaths;
};

export const flatAppPath = getFlatPaths(appPathsList);
