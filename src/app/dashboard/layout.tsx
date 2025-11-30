import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - User Data Hub",
  description:
    "Track your Honeypot Finance portfolio, positions, points, NFTs, and leaderboard rankings. View your DeFi stats across Berachain and BSC.",
  robots: {
    index: false, // Dashboard contains user-specific data
    follow: true,
  },
  openGraph: {
    title: "Honeypot Finance Dashboard",
    description: "Manage your DeFi portfolio on Honeypot Finance",
    type: "website",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
