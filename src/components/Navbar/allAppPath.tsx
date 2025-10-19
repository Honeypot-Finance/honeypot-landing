import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type PathChatConfig = {
  autoPopUpQuestion: ReactNode;
  pageTrendingQuestions: ReactNode[];
};

export type Menu = {
  path:
    | string
    | {
        path: string;
        title: string;
        routePath: string;
        icon?: StaticImageData;
        footer?: ReactNode;
        chatConfig?: PathChatConfig;
      }[];
  title: string;
  routePath?: string;
  icon?: StaticImageData;
  chatConfig?: PathChatConfig;
};

export type flatMenu = {
  path: string;
  title: string;
  icon?: StaticImageData;
  chatConfig?: PathChatConfig;
};

export const appPathsList: Menu[] = [
  {
    title: "Trade",
    path: [
      {
        title: "Swap",
        path: "https://wasabee.honeypotfinance.xyz/swap",
        routePath: "https://wasabee.honeypotfinance.xyz/swap",
      },
      {
        title: "Multi-Token Swap",
        path: "https://wasabee.honeypotfinance.xyz/xswap",
        routePath: "https://wasabee.honeypotfinance.xyz/xswap",
      },
      {
        title: "Cross-Chain Swap",
        path: "https://wasabee.honeypotfinance.xyz/cross-chain-swap",
        routePath: "https://wasabee.honeypotfinance.xyz/cross-chain-swap",
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
      },
      {
        title: "Automated Vaults",
        path: "https://wasabee.honeypotfinance.xyz/pools",
        routePath: "https://wasabee.honeypotfinance.xyz/pools",
      },
      {
        title: "All In One Vault",
        path: "https://leaderboard.honeypotfinance.xyz/",
        routePath: "https://leaderboard.honeypotfinance.xyz/",
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
      },
      {
        title: "Pot2Pump Overview",
        path: "https://pot2pump.honeypotfinance.xyz/",
        routePath: "https://pot2pump.honeypotfinance.xyz/",
      },
      {
        title: "Launch Meme",
        path: "https://pot2pump.honeypotfinance.xyz/potting",
        routePath: "https://pot2pump.honeypotfinance.xyz/potting",
      },
      {
        title: "Trade Meme",
        path: "https://pot2pump.honeypotfinance.xyz/pumping",
        routePath: "https://pot2pump.honeypotfinance.xyz/pumping",
      },
    ],
  },
  {
    title: "Leaderboard",
    path: "https://leaderboard.honeypotfinance.xyz/leaderboard",
  },
  {
    title: "Docs",
    path: "https://docs.honeypotfinance.xyz/",
  },
];

const getFlatPaths = (paths: Menu[]): flatMenu[] => {
  let flatPaths: flatMenu[] = [];

  paths.forEach((path) => {
    if (typeof path.path === "string") {
      flatPaths.push({
        path: path.path,
        title: path.title,
      });
    }
    if (Array.isArray(path.path)) {
      flatPaths = [...flatPaths, ...getFlatPaths(path.path)];
    }
  });

  return flatPaths;
};

export const flatAppPath = getFlatPaths(appPathsList);
