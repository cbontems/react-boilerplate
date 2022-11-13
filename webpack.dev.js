const { merge } = require("webpack-merge");
const base = require("./webpack.baseconfig.js");

module.exports = merge(base, {
  mode: "development",
  devtool: "cheap-module-source-map",
});
