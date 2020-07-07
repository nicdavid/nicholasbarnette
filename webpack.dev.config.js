const core = require('./webpack.core.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

core.mode = 'development';
core.devtool = 'source-maps';
core.module.rules.push({
	test: /\.s?css$/,
	use: [
		{ loader: 'style-loader' },
		{ loader: 'css-loader', options: { modules: true, sourceMap: true } },
		{ loader: 'sass-loader', options: { sourceMap: true } },
	],
});
core.plugins.push(
	new MiniCssExtractPlugin({
		filename: '[name].[hash].css',
	}),
);

module.exports = core;
