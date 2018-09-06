const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "index": path.join(__dirname, "src/Index.jsx")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module:{
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },{
            test: /\.json$/,
            loader: "json-loader"
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/templates/index.html"),
            filename: "index.html",
            inject: "body",
            title: "Front End Boilerplate Project"
        })
    ]
};