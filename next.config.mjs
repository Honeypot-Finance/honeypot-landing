/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  sassOptions: {
    includePaths: ["./src/styles"],
    // Avoid UTF-8 markers becoming part of selectors when CSS modules are combined.
    charset: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bscscan.com",
        pathname: "/token/images/**",
      },
      {
        protocol: "https",
        hostname: "berascan.com",
        pathname: "/token/images/**",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        pathname: "/coins/images/**",
      },
      {
        protocol: "https",
        hostname: "infrared.finance",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "images.oogabooga.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.oogabooga.io",
        pathname: "/_next/image/**",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
        pathname: "/ipfs/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "@react-native-async-storage/async-storage": false,
      "pino-pretty": false,
    };
    return config;
  },
  async redirects() {
    return [
      ...["/homepage1", "/homepage2", "/homepage3", "/homepage4"].map((source) => ({
        source,
        destination: "/",
        permanent: false,
      })),
      {
        source: "/swap",
        destination: "/#legacy",
        permanent: false,
      },
      {
        source: "/cross-chain-swap",
        destination: "/#legacy",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
