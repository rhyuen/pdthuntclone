const merge = require("webpack-merge");
const base = require("./webpack.config.base.js");

module.exports = merge(base, {
    mode: "development",
    devtool: "source-map"
});