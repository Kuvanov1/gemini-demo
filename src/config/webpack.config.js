const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  }
};


module.exports = {
    resolve: {
      fallback: {
        "path": false,
        "os": false,
        "crypto": false
      }
    }
  };
  