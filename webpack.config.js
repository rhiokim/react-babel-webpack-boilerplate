var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/bootstrap.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /.(png|jpg|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, include: path.resolve(__dirname, 'app'), loader: 'url-loader?limit=100000' },
      { test: /\.jsx?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass?outputStyle=expanded&sourceMap',
      }
    ],
    noParse: [
      /node_modules\/sinon\//,
    ]
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      'sinon': 'sinon/pkg/sinon',
      'helpers': path.resolve(process.cwd(), 'node_modules', 'react-md', 'src', 'scss', 'helpers', '_all.scss'),
      'md-scss': path.resolve(process.cwd(), 'node_modules', 'react-md', 'src', 'scss', 'react-md.scss'),
    }
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('spec.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      '__CLIENT__': true,
      '__SERVER__': false,
      '__DEV__': true,
      '__DEVTOOLS__': true
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  externals: {
    'react/lib/ExecutionEnvironment': true
  }
};
