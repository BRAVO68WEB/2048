module.exports = {
  globDirectory: "./",
  globPatterns: [
    "**/*.{png,xml,ico,json,js,css,html,webmanifest,md}"
  ],
  swDest: "sw.js",
  runtimeCaching: [{
    // Match common font file extensions.
    urlPattern: /\.(?:woff|woff2|ttf|otf|eot)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'fonts',
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
      },
    },
  }]
};