const core = require('./webpack.core.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

core.mode = 'production';
core.devtool = false;
core.module.rules.push({
	test: /\.s?css$/,
	use: [
		MiniCssExtractPlugin.loader,
		{ loader: 'css-loader', options: { modules: true } },
		{ loader: 'sass-loader' },
	],
});
core.plugins.push(
	new MiniCssExtractPlugin({
		filename: '[name].[hash].css',
	}),
);

module.exports = core;
