/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows Next.js to optimize images coming from localhost:8080
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/uploads/**",
      },
    ],
  },
  // Optional: if you want to proxy instead of using remotePatterns
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:8080/uploads/:path*',
      },
    ];
  },
};

module.exports = nextConfig;