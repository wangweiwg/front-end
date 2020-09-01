const path = require('path');
const webpack = require('webpack');


console.log('webpack到底是啥：', webpack);

const config = {
	entry: {
		first: './src/first.js',
		second: './src/second.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: loaders,
			exclude: /node_modules/
		}]
	}
};

module.exports = config;