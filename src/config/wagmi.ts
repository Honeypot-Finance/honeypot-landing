import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { berachain, bsc } from "wagmi/chains";

// Lazy initialization to avoid blocking initial render
let configInstance: ReturnType<typeof getDefaultConfig> | null = null;

export const getConfig = () => {
  if (!configInstance) {
    configInstance = getDefaultConfig({
      appName: "Honeypot Finance",
      projectId:
        process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
        "23b1ff4e22147bdf7cab13c0ee4bed90",
      chains: [berachain, bsc],
      ssr: true,
      batch: {
        multicall: {
          wait: 50,
        },
      },
    });
  }
  return configInstance;
};

// Export for immediate use in components (still lazy loaded via function)
export const config = new Proxy({} as ReturnType<typeof getDefaultConfig>, {
  get: (target, prop) => {
    const cfg = getConfig();
    return cfg[prop as keyof typeof cfg];
  },
});
