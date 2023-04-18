const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  // to re-generate manifest.json, visit https://tomitm.github.io/appmanifest/
  dest: 'public',
  register: true,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
});
