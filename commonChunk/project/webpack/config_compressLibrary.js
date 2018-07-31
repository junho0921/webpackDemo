var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileName = __filename.split('/').pop().split('.').shift().split('_').pop();

module.exports = {
    devtool: 'cheap-module-eval-source-map',//打包构建信息
    entry: {
        main: './entry/index.js'
    },
    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
    },
    output: {
        path: path.join(__dirname, '../../public/' + fileName),
        filename: '[name].[chunkhash].js',
        library: 'webpackNumbers', // 让编译文件能够在各种用户环境(consumption)中可用，需要在 output 中添加 library 属性：
        libraryTarget: 'umd' // 输入模块格式为UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。
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
        })
    ]
};
