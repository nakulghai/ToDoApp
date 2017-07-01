var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "");
var OUTPUT = path.resolve(__dirname, "");

var config = {
  entry: DEV + "/main.js",
  output: {
    path: OUTPUT,
    filename: "index.js"
  },
  module: {
    loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react' , 'stage-0']
            }
         }
      ]
  },
  devtool: 'eval-source-map'
};

module.exports = config
