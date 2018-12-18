const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
    BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        "index": path.join(__dirname, "src/Index.jsx")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-react",
                    "@babel/preset-env"
                ],
                plugins: [
                    "react-hot-loader/babel",
                    "@babel/plugin-proposal-object-rest-spread",
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-syntax-dynamic-import"
                ]
            }
        }, {
            test: /\.json$/,
            use: {
                loader: "json-loader"
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: "file-loader"
            }
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/templates/index.html"),
            filename: "index.html",
            inject: "body",
            title: "Pdthunt Clone"
        }),
        new CopyWebpackPlugin([{
            from: "./src/images/*.ico",
            flatten: true,
            test: /\.(ico)$/,
            ignore: ["*.jsx"],
            toType: "file"

        }], {
            debug: "debug",
            copyUnmodified: true
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
            reportFilename: "bundle_sizes.html"
        })
    ],
    devtool: "source-map"
};