const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: debug ? "" : "/portfolio/",
  output: debug ? "standalone" : "export",
};

module.exports = nextConfig;
