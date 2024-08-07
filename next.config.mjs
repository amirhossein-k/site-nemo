/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.storage.iran.liara.space",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["uploade.storage.iran.liara.space"],
  },
};

export default nextConfig;
