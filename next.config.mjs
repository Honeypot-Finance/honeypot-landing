/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
      '@react-native-async-storage/async-storage': false,
      'pino-pretty': false,
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/swap",
        destination: "https://wasabee.honeypotfinance.xyz/swap",
        permanent: false,
      },

      {
        source: "/cross-chain-swap",
        destination: "https://wasabee.honeypotfinance.xyz/cross-chain-swap",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
