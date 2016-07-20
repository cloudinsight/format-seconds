module.exports = {
  entry: './src/convert',
  output: {
    path: './lib',
    pathinfo: true,
    filename: 'index.js',
    library: 'formatSeconds',
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.es6', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel'
      }
    ]
  }
}
