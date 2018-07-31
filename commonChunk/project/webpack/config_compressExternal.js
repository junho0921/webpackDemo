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
        jquery: { // 让第三方库免于合并编译
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
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
            title: ""
        })
    ]
};
