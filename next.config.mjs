/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  async rewrites() {
    return [
      { source: "/swap", destination: "https://wasabee.honeypotfinance.xyz/" },
      {
        source: "/swap/:path*",
        destination: "https://wasabee.honeypotfinance.xyz/:path*",
      },
    ];
  },
};

export default nextConfig;
