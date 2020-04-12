const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Pluma = require("./src/webpack/helpers");

module.exports = (env, options) => ({
  entry: "./src/public/index.js",
  output: {
    filename: "p.js",
    path: path.resolve(__dirname, "dist", "public")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/HtmlWebpack/templates/headerInjection.hbs",
      filename: `${__dirname}/dist/Handlebars/partials/headerInjection.hbs`,
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/HtmlWebpack/templates/bodyInjection.hbs",
      filename: `${__dirname}/dist/Handlebars/partials/bodyInjection.hbs`,
      inject: false
    })
  ],
  module: {
    rules: Pluma.webpack.rules(env, options)
  }
});
