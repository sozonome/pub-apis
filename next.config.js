const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    // to re-generate manifest.json, visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  // temporarily disabled until preact compat for react 18 is ready - startTransition
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat",
  //     });
  //   }

  //   return config;
  // },
  eslint: {
    dirs: ["src"],
  },
});
