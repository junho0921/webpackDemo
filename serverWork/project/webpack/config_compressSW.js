var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',//打包构建信息
    entry: {
        main: './entry/index.js'
    },
    output: {
        path: path.join(__dirname, '../../public'),
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
            title: ""
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};
