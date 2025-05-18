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
    title: "Pot2pump (Launch meme)",
    path: [
      {
        title: "Overview",
        path: "https://pot2pump.honeypotfinance.xyz/",
        routePath: "https://pot2pump.honeypotfinance.xyz/",
      },
      {
        title: "Potting (Raise)",
        path: "https://pot2pump.honeypotfinance.xyz/potting",
        routePath: "https://pot2pump.honeypotfinance.xyz/potting",
      },
      {
        title: "Pumping (Trade)",
        path: "https://pot2pump.honeypotfinance.xyz/pumping",
        routePath: "https://pot2pump.honeypotfinance.xyz/pumping",
      },
    ],
  },
  {
    title: "Trade",
    path: [
      {
        title: "Swap",
        path: "https://wasabee.honeypotfinance.xyz/swap",
        routePath: "https://wasabee.honeypotfinance.xyz/swap",
      },
      {
        title: "xSwap",
        path: "https://wasabee.honeypotfinance.xyz/xswap",
        routePath: "https://wasabee.honeypotfinance.xyz/xswap",
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
        title: "Vaults",
        path: "https://wasabee.honeypotfinance.xyz/pools",
        routePath: "https://wasabee.honeypotfinance.xyz/pools",
      },
    ],
  },
  {
    title: "Fund Raising",
    path: [
      {
        title: "Dreampad",
        path: "https://dreampad.honeypotfinance.xyz/",
        routePath: "https://dreampad.honeypotfinance.xyz/",
      },
    ],
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
