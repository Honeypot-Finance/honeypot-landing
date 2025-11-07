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

export const appPathsList: Menu[] = [
  {
    title: "Trade",
    path: [
      {
        title: "Perp",
        path: "https://wasabee.honeypotfinance.xyz/perp",
        routePath: "https://wasabee.honeypotfinance.xyz/perp",
        afterElement: (
          <span
            style={{
              color: "#FF4444",
              backgroundColor: "rgba(255, 68, 68, 0.1)",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "6px",
              padding: "2px 6px",
              borderRadius: "4px",
              border: "1px solid #FF4444",
              display: "inline-block",
              lineHeight: "1",
            }}
          >
            BETA
          </span>
        ),
      },
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
      {
        title: "Bridge",
        path: "https://wasabee.honeypotfinance.xyz/bridge",
        routePath: "https://wasabee.honeypotfinance.xyz/bridge",
      },
    ],
  },
  {
    title: "Earn",
    path: [
      {
        title: "Points",
        path: "https://points.honeypotfinance.xyz/loyalty",
        routePath: "https://points.honeypotfinance.xyz/loyalty",
        afterElement: (
          <span
            style={{
              color: "#FFB800",
              backgroundColor: "rgba(255, 184, 0, 0.1)",
              fontSize: "10px",
              fontWeight: "bold",
              marginLeft: "6px",
              padding: "2px 6px",
              borderRadius: "4px",
              border: "1px solid #FFB800",
              display: "inline-block",
              lineHeight: "1",
            }}
          >
            Pre-TGE
          </span>
        ),
      },
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
      {
        title: "NFT Staking",
        path: "https://nft.honeypotfinance.xyz/staking",
        routePath: "https://nft.honeypotfinance.xyz/staking",
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
    path: [
      {
        title: "Points",
        path: "https://points.honeypotfinance.xyz/loyalty",
        routePath: "https://points.honeypotfinance.xyz/loyalty",
      },
      {
        title: "App Leaderboard",
        path: "https://leaderboard.honeypotfinance.xyz/leaderboard",
        routePath: "https://leaderboard.honeypotfinance.xyz/leaderboard",
      },
      {
        title: "User Dashboard",
        path: "https://honeypotfinance.xyz/dashboard",
        routePath: "https://honeypotfinance.xyz/dashboard",
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
