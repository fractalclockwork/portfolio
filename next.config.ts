import type { NextConfig } from "next";

// Project Pages site: https://fractalclockwork.github.io/portfolio/
// Override with empty string for root-path local debugging if needed.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
