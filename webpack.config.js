const webpack = require('webpack')

module.exports = {
    // 必须使用相对路径，不能不带/
    entry: './index.js',
    output: {
        path: './build',
        filename: 'index.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}
