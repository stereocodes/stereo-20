const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "../dist")
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ], 
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      }
    ]
  },
})
