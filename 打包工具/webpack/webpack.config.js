const path = require('path');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.txt$/, use: 'raw-loader'}
		]
	}
};