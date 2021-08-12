const nextConfig = {
  pageExtensions: ["page.jsx", "page.js", "page.tsx", "page.ts"],
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  webpack5: true,
  setupFilesAfterEnv: ['./src/core/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = nextConfig;
