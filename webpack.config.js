var path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, './dist/ClassificationBanner.js')],
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '../classification-banner'
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
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production',
  externals: {
    'react': 'commonjs react'
  }
};

