var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


console.log('ssss', path.join(__dirname, 'public'))
module.exports = {
    devtool: 'cheap-module-eval-source-map',//打包构建信息
    entry: [
        './entry/index.js'
    ],
    output: {
        // filename: 'boundle.js',
        // publicPath: '/dist/js/'
        path: path.join(__dirname, 'public'),
        filename: 'boundle.js'
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
