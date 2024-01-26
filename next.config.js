/** @type {import('next').NextConfig} */ const path = require("path");

const nextConfig = {
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "app.tsx",
    "app.ts",
    "app.jsx",
    "app.js",
  ],
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
