// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Silence warnings
//   // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
//   webpack: (config) => {
//     config.externals.push("pino-pretty", "lokijs", "encoding");
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com", // ⬅️ allow Unsplash
      "media.giphy.com", // ⬅️ allow GIFs (if used)
      "www.w3schools.com", // ⬅️ sample video thumbnails (if needed)
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
