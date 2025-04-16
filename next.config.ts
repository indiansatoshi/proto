const nextConfig = {
  swcMinify: true,
  webpack: (config: any) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false,
    };
    return config;
  },
};

export default nextConfig;
