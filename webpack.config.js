var webpack = require("webpack");

module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js",
		publicPath: "public"
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader"
		},
		{
			test: /\.json$/,
			loader: "json-loader"
		}]
	}
}