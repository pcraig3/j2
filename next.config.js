const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imagesFolder: 'img',
  optimizeImagesInDev: true,

  /* config for general next.js */
  assetPrefix:
    typeof process.env.ASSET_PREFIX === 'string'
      ? process.env.ASSET_PREFIX.trim()
      : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/m/': { page: '/', query: { showMenu: 'true' } },
      '/about': { page: '/about' },
      '/m/about': { page: '/about', query: { showMenu: 'true' } },
      '/contact': { page: '/contact' },
      '/m/contact': { page: '/contact', query: { showMenu: 'true' } },
      '/portfolio': { page: '/portfolio' },
      '/m/portfolio': { page: '/portfolio', query: { showMenu: 'true' } },
      '/typography': { page: '/typography' },
      '/m/typography': { page: '/typography', query: { showMenu: 'true' } },
    }
  },
})
