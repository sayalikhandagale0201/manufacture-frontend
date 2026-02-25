/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-backend-domain.com", 
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;