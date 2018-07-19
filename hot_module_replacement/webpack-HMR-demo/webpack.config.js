const path = require('path')
const webpack = require('webpack');
console.log('output path = ', path.join(__dirname, '/'));
module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/')
	},
	devServer: {
		hot: true
	}
}