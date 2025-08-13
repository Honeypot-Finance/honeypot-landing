/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
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
