const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.js"  // Your entry JS file
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    static: dist,  // Serve files from the dist folder
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',  // Automatically generate the HTML file
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, "static"), to: path.resolve(__dirname, "dist/static") }
    ]),
    new WasmPackPlugin({
      crateDirectory: __dirname,  // Ensure WasmPackPlugin points to the Rust crate directory
    }),
  ],
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async", // Handle .wasm files asynchronously
      },
    ]
  },
  experiments: {
    asyncWebAssembly: true,  // Enable async WebAssembly
  },
};
