"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme, Theme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/config/wagmi";

// Create QueryClient lazily to avoid initialization during SSR
let queryClientInstance: QueryClient | null = null;
const getQueryClient = () => {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: true,
          retry: 1,
          staleTime: 5000,
        },
      },
    });
  }
  return queryClientInstance;
};

// Custom brown theme matching website design
const customTheme: Theme = darkTheme({
  accentColor: "#ffc107",
  accentColorForeground: "#1a1510",
  borderRadius: "medium",
  fontStack: "system",
  overlayBlur: "small",
});

// Override default theme colors with brown palette
customTheme.colors.modalBackground = "rgba(42, 32, 20, 0.95)";
customTheme.colors.modalBorder = "rgba(255, 193, 7, 0.3)";
customTheme.colors.modalText = "#ffffff";
customTheme.colors.modalTextSecondary = "#a0a0a0";
customTheme.colors.profileForeground = "rgba(80, 60, 30, 0.6)";
customTheme.colors.selectedOptionBorder = "rgba(255, 193, 7, 0.4)";
customTheme.colors.actionButtonBorder = "rgba(255, 193, 7, 0.2)";
customTheme.colors.actionButtonSecondaryBackground = "rgba(80, 60, 30, 0.6)";
customTheme.colors.closeButton = "#a0a0a0";
customTheme.colors.closeButtonBackground = "rgba(80, 60, 30, 0.4)";
customTheme.colors.connectButtonBackground = "rgba(80, 60, 30, 0.6)";
customTheme.colors.connectButtonText = "#ffffff";
customTheme.colors.error = "#ff6b6b";

// Override shadows
customTheme.shadows.dialog = "0 8px 32px rgba(0, 0, 0, 0.5)";
customTheme.shadows.walletLogo = "none";

// Override border radius
customTheme.radii.modal = "1.5rem";
customTheme.radii.actionButton = "0.75rem";
customTheme.radii.connectButton = "0.75rem";
customTheme.radii.menuButton = "0.75rem";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={56}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
