const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = true;

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.([tj]s|[tj]sx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".scss"],
  },
};
