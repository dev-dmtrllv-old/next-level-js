const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	stats: "minimal",
	mode: "development",
	name: "app",
	target: "web",
	entry: "./src/index.tsx",
	devtool: "source-map",
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "build"),
		chunkFilename: "js/[chunkhash].chunk.js",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".json"],
		plugins: [
			new TsConfigPathsPlugin()
		]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(otf|ttf|eot|woff|woff2|svg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "./fonts/[name].[ext]",
						publicPath: "../"
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "./images/[name].[ext]",
						}
					},
				],
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new HTMLPlugin({
			template: path.resolve(__dirname, "index.html"),
			output: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new CleanWebpackPlugin()
	],
	devServer: {
		static: {
			publicPath: "/",
		},
		host: "0.0.0.0",
		port: 1337,
		client: {
			logging: "error",
			overlay: true,
		},
	}
};
