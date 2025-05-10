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
    title: "Pot2pump",
    path: "https://pot2pump.honeypotfinance.xyz/",
  },
  {
    title: "Pot-wasabee (Dex)",
    path: "https://wasabee.honeypotfinance.xyz/swap",
  },
  {
    title: "Dreampad",
    path: "https://dreampad.honeypotfinance.xyz/",
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
