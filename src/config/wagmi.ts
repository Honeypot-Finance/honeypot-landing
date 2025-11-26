import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  walletConnectWallet,
  rainbowWallet,
  trustWallet,
  okxWallet,
  phantomWallet,
  ledgerWallet,
  argentWallet,
  bitgetWallet,
  gateWallet,
  bybitWallet,
  rabbyWallet,
  safeWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { berachain, bsc } from "wagmi/chains";
import { createConfig, http } from "wagmi";

// Global singleton guard that persists across hot reloads and React StrictMode
declare global {
  var __wagmi_config__: ReturnType<typeof getDefaultConfig> | undefined;
}

// Lazy initialization to avoid blocking initial render
let configInstance: ReturnType<typeof getDefaultConfig> | null = null;

// SSR-safe minimal config (no WalletConnect to avoid indexedDB)
const ssrConfig = createConfig({
  chains: [berachain, bsc],
  transports: {
    [berachain.id]: http(),
    [bsc.id]: http(),
  },
  ssr: true,
});

export const getConfig = () => {
  // Use minimal config for SSR to avoid indexedDB issues
  if (typeof window === 'undefined') {
    return ssrConfig as any;
  }

  // Check global singleton first (persists across hot reloads)
  if (globalThis.__wagmi_config__) {
    return globalThis.__wagmi_config__;
  }

  if (!configInstance) {
    const projectId =
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
      "23b1ff4e22147bdf7cab13c0ee4bed90";

    configInstance = getDefaultConfig({
      appName: "Honeypot Finance",
      projectId,
      chains: [berachain, bsc],
      ssr: true,
      batch: {
        multicall: {
          wait: 50,
        },
      },
      wallets: [
        {
          groupName: "Popular",
          wallets: [
            metaMaskWallet,
            walletConnectWallet,
            coinbaseWallet,
            rabbyWallet,
            okxWallet,
            trustWallet,
          ],
        },
        {
          groupName: "More Wallets",
          wallets: [
            phantomWallet,
            rainbowWallet,
            bybitWallet,
            bitgetWallet,
            gateWallet,
            ledgerWallet,
            argentWallet,
            safeWallet,
            injectedWallet,
          ],
        },
      ],
    });

    // Store in global singleton
    globalThis.__wagmi_config__ = configInstance;
  }
  return configInstance;
};

// Export for immediate use in components (still lazy loaded via function)
export const config = new Proxy({} as ReturnType<typeof getDefaultConfig>, {
  get: (_target, prop) => {
    const cfg = getConfig();
    // During SSR, return undefined for any property access
    if (!cfg) return undefined;
    return cfg[prop as keyof typeof cfg];
  },
});
