const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const WebpackBarPlugin = require("webpackbar");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "./public/index.html") }),
    new VueLoaderPlugin(),
    new WebpackBarPlugin({
      name: "custom-webpack-cli"
    })
  ],
  module: {
    rules: [
      { test: /\.(sass|scss|css)$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  }
};
