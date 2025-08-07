import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/global.scss";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honeypot Finance: Next-Gen Dex++",
  description:
    "Honeypot combines pro trading tools and behaviour-driven incentives, solving idle TVL, inefficient incentives & market fragmentation across DeFi",
  openGraph: {
    images: ["/banner.jpeg"], // Path to your Open Graph image
  },
  twitter: {
    images: ["/banner.jpeg"], // Path to your Twitter Card image
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className="bg-[#80BFE5]">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
