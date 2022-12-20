var path = require('path');

module.exports = {
  entry: './src/ClassificationBanner.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '../classification-banner',
    filename: 'bundle.js',
    libraryTarget: "commonjs2"
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        exclude: [
          path.resolve(__dirname, './node_modules')
        ],
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  mode: 'production',
  externals: {
    'react': 'commonjs react'
  }
};

