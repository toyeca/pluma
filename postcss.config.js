const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.pug"
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = ({ file, options, env }) => ({
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(options.webpack.mode === "production" ? [purgecss] : []),
    ...(options.webpack.mode === "production" ? [cssnano] : [])
  ]
});
