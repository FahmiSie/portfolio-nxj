import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ensure Turbopack uses the project folder as the workspace root
    root: path.resolve(__dirname),
  },

  /* config options here */
};

export default nextConfig;
