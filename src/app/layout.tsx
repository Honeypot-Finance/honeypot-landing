import type { Metadata } from "next";
import "@/styles/global.scss";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";
import { inter, poppins, bebasNeue } from "./fonts";

export const metadata: Metadata = {
  title: "Honeypot Finance: Next-Gen Dex++",
  description:
    "Honeypot combines pro trading tools and behaviour-driven incentives, solving idle TVL, inefficient incentives & market fragmentation across DeFi",
  openGraph: {
    images: ["/images/landing-new-assets-202511/new_media_banner.jpeg"],
  },
  twitter: {
    images: ["/images/landing-new-assets-202511/new_media_banner.jpeg"],
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          href="/images/honeypot-logo.svg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/background_honeycomb_pattern.svg"
          as="image"
        />
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
      <body className={`bg-[#140E06] ${inter.className}`} suppressHydrationWarning>
        <Providers>
          <Analytics />
          {/* <LayoutWrapper>{children}</LayoutWrapper> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
