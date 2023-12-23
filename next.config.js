const debug = process.env.NODE_ENV !== "production";

const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  basePath: "/portfolio",
  // assetPrefix: debug ? "" : "/portfolio/",
  output: debug ? "standalone" : "export",
  // images: {
  //   loader: "akamai",
  //   path: "/",
  // },
});

module.exports = nextConfig;
