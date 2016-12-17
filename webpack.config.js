var StartServerPlugin = require('start-server-webpack-plugin').default
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-sourcemap',

  entry: {
    server: [
      'webpack/hot/poll?1000',
      './lib/server',
    ],
  },

  externals: [
    // Every non-relative module is external
    /^[a-z\-0-9]+$/,
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },

  node: {
    __filename: true,
    __dirname: true,
  },

  output: {
    chunkFilename: '[id].[hash:5]-[chunkhash:7].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: 'dev-server.js',
    libraryTarget: 'commonjs2',
    path: './tmp',
  },

  plugins: [
    new StartServerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  target: 'async-node',
}
