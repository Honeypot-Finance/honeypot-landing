"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Editorial and legal pages do not need to initialize wallet connectors.
const LegacyProviders = dynamic(
  () => import("./Providers").then((module) => module.Providers),
  { ssr: false, loading: () => <p role="status" className="p-8">Loading account tools…</p> }
);

export function SiteProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const publicPage = pathname === "/" || pathname.startsWith("/articles/") || pathname === "/privacy-policy" || pathname === "/terms-of-use";
  return publicPage ? children : <LegacyProviders>{children}</LegacyProviders>;
}
