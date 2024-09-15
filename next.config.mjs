/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["mongoose"] = false;
    }
    return config;
  },
};

export default nextConfig;
