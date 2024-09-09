/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  output: "export",
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
    };
  }

  // Production config
  return {
    swcMinify: true,
    images: {
      loader: "custom",
      loaderFile: "./cfImageLoader.js",
    },
  };
};

export default nextConfig;
