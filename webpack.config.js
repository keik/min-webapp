var webpack = require('webpack')

module.exports = function() {
  return {
    entry: {
      entry1: './lib/client/entry1.js',
      entry2: './lib/client/entry2.js'
    },
    output: {
      path: 'bundle',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        }
      ]
    },
    devtool: 'inlilne-sourcemap',
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      })
    ]
  }
}
