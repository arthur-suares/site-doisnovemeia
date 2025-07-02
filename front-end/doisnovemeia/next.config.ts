import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true, // Durante a build do site, o que estiver fora do padrão não atrapalha o build
  },
};

export default nextConfig;
