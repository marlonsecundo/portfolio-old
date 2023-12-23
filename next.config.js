const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: debug ? "portfolio" : "",
  assetPrefix: "/portfolio",
  output: debug ? "standalone" : "export",
};

module.exports = nextConfig;
