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
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  resolve: {extensions: ['', '.js', '.jsx']}
}
