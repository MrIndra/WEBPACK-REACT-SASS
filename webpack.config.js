
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: process.env.NODE_ENV === "production" ? "production" : "development",

    entry: "./src/index.js",

    module:{
        rules:[
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: {
                   loader: "babel-loader"
                }
            }

        ]
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js"
    },

    plugins: [new MiniCssExtractPlugin()],

};