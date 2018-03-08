const assetPrefix = process.env.NODE_ENV === "production" ? "/j2" : ""
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  assetPrefix: assetPrefix,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});
