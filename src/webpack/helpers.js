const path = require("path");
const Handlebars = require("handlebars");

const sanitizePath = path => path.replace(/\\/g, "/");

module.exports = {
  webpack: {
    handleBars: {
      getTargetFilePath: (filePath, outputTemplate, rootPath) => {
        if (/\/index\.hbs$/.test(filePath)) {
          outputTemplate = outputTemplate.replace(/\/index\.html$/, ".html");
        }

        filePath = sanitizePath(filePath);
        rootPath = rootPath ? sanitizePath(rootPath) : path.dirname(filePath);
        if (outputTemplate == null) {
          return filePath.replace(path.extname(filePath), "");
        }
        const folderPath = path.dirname(filePath).split(rootPath)[1];
        const fileName = path
          .basename(filePath)
          .replace(path.extname(filePath), "");
        return outputTemplate
          .replace("[path]", folderPath)
          .replace("[name]", fileName)
          .replace(/\/\//, "/");
      },
      fixResourcesUrl: function(options) {
        return new Handlebars.SafeString(
          options.fn(this).replace(/\.\.\/\.\.\/public/, "")
        );
      }
    }
  }
};
