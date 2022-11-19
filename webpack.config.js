var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ClassificationBanner.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ClassificationBanner.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}