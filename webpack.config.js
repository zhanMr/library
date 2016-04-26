var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: "#inline-source-map",
    entry: "./lib/index.js",
        output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("./public/css/blog.css")
    ]
};