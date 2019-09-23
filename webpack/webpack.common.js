const Path = require('path');

module.exports = {
  entry: Path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "../dist"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["ts-loader"]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.inline.svg$/,
        loader: 'svg-react-loader'
      },
      {
        exclude: /\.inline.svg?$/,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: '../dist',
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
}
