var path = require('path');
var SRC_DIR = path.join(__dirname, '/admin-interface/src');
var DIST_DIR = path.join(__dirname, '/admin-interface/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
            "presets": [
                "@babel/preset-react",
                "@babel/preset-env"
            ]
        }
      }
    ]
  },
  mode: "development"
};