const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'react-dynamic-icons.js',
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  }
}