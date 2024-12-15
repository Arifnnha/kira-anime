/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      { hostname: "private-avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
