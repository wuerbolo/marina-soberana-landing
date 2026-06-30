import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle for the production Docker image
  // (.next/standalone + node server.js). Has no effect on `next dev`.
  output: "standalone",
};

export default nextConfig;
