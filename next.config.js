const assetPrefix = process.env.NODE_ENV === 'production' ? '/j2' : ''

module.exports = {
  assetPrefix: assetPrefix,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/portfolio': { page: '/portfolio' },
      '/typography': { page: '/typography' },
    }
  },
}
