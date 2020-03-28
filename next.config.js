module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/_app' }
      };
    }
  };