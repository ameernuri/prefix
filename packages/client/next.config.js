const withFonts = require('next-fonts')

module.exports = withFonts({
  enableSvg: true,
  reactStrictMode: true,
  distDir: 'dist',
  webpack(config, options) {
    return config
  },
})
