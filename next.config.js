const assetPrefix = process.env.NODE_ENV === 'production' ? '/j2' : ''

module.exports = {
  assetPrefix: assetPrefix,
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
}
