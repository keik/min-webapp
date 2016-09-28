const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './lib/client/app'
  },
  output: {
    path: './build/assets',
    filename: '[name].js'
  },
  target: 'web',
  module: {
    loaders: [
      { test: /\.css$/i,
        loader: ExtractTextPlugin.extract({loader: "css"})
      },
      // {
      //   test: /\.css$/i,
      //   loader: ExtractTextPlugin.extract(`css?modules&localIdentName=[name]_[local]__[hash:base64:5]`)
      // },
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  resolve: {extensions: ['', '.js', '.jsx']},
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
