const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const path = require("path");
const Pluma = require("./src/webpack/helpers");

module.exports = (env, options) => ({
  entry: "./src/public/index.js",
  output: {
    filename: "p.js",
    path: path.resolve(__dirname, "dist", "public")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist", "public"),
    compress: true,
    port: 9000
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
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "public", "**", "*.hbs"),
      output: path.join(
        process.cwd(),
        "dist",
        "public",
        "[path]",
        "[name]",
        "index.html"
      ),
      data: path.join(__dirname, "src/data/example.json"),
      partials: [
        path.join(
          process.cwd(),
          "src",
          "Handlebars",
          "partials",
          "**",
          "*.hbs"
        ),
        path.join(
          process.cwd(),
          "dist",
          "Handlebars",
          "partials",
          "**",
          "*.hbs"
        )
      ],
      helpers: {
        fixResourcesUrl: Pluma.webpack.handleBars.fixResourcesUrl
        // nameOfHbsHelper: Function.prototype,
        // projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
      },

      // hooks
      getTargetFilepath: Pluma.webpack.handleBars.getTargetFilePath
      // getPartialId: function (filePath) {}
      // onBeforeSetup: function (Handlebars) {},
      // onBeforeAddPartials: function (Handlebars, partialsMap) {},
      // onBeforeCompile: function (Handlebars, templateContent) {},
      // onBeforeRender: function (Handlebars, data, filename) {},
      // onBeforeSave: function(Handlebars, resultHtml, filename) {}
      // onDone: function (Handlebars, filename) {}
    })
  ],
  module: {
    rules: Pluma.webpack.rules(env, options)
  }
});
