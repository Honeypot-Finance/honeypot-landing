import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { berachain, bsc } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Honeypot Finance",
  projectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
    "23b1ff4e22147bdf7cab13c0ee4bed90",
  chains: [berachain, bsc],
  ssr: true,
});
