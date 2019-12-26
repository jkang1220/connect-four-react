const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "./app.bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
		    {
				test: /\.css$/i,
				exclude: /node_modules/,
		        use: [MiniCssExtractPlugin.loader, 'css-loader'],
		    },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebPackPlugin({
			hash: true,
			filename: "./index.html",
			template: "./index.html",
		})
	]
};