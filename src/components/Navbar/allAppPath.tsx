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
    title: "DEX",
    path: "https://wasabee.honeypotfinance.xyz/swap",
  },
  {
    title: "Potting",
    path: "https://pot2pump.honeypotfinance.xyz/potting",
  },
  {
    title: "Pumping",
    path: "https://pot2pump.honeypotfinance.xyz/pumping",
  },
  {
    title: "Docs",
    path: "https://docs.honeypotfinance.xyz/",
  },
  {
    title: "Get In Touch",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSeOS9Ws_jlUtWl79OFQHnyUlgKHOReK826sppzj8lTmEQCjCQ/viewform",
  },
  {
    title: "Launch App",
    path: "https://pot2pump.honeypotfinance.xyz/",
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
