import type { Metadata } from "next";
import "@/styles/global.scss";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
      <body className="bg-[#140E06] font-inter">
        {/* <LayoutWrapper>{children}</LayoutWrapper> */}
        {children}
      </body>
    </html>
  );
}
