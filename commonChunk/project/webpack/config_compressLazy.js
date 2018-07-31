var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileName = __filename.split('/').pop().split('.').shift().split('_').pop();

module.exports = {
    entry: {
        main: './entry/index.js',
        vendor: [
            'jquery'
        ]
    },
    output: {
        path: path.join(__dirname, '../../public/' + fileName),
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/ //哪些文件下的需要用到babel
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
};
