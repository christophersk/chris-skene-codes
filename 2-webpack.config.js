module.exports = {
  entry: './server/js/components/app.js',
  output: {
    path: __dirname,
    filename: './build/frontend-2.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader',
      },
    ],
  },
};
