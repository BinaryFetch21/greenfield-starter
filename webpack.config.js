var path = require('path');
var SRC_DIR = path.join(__dirname, '/Views/Client/src');
var PUBLIC_DIR = path.join(__dirname, "/Views/Client/public");

module.exports = {
  entry: `${SRC_DIR}/Index.js`,
  output: {
    filename: "bundle.js",
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
  mode: "development",
};