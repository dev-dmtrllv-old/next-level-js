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
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build"),
		chunkFilename: "[chunkhash].chunk.js",
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
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/",
						esModule: false,
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
};
