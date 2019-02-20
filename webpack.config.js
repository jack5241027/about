const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const path = require('path');
const { isDev } = require('./share/constant');

module.exports = {
  entry: {
    app: './client/index.js',
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '100000',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader?insertAt=top' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]-[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    }),

    new HTMLWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: path.resolve('./views/index.pug'),
    }),

    new AddAssetHtmlPlugin({
      filepath: path.resolve('./public/vendor.dll.*.js'),
      includeSourcemap: false,
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./public/dll.json'), // eslint-disable-line global-require, import/no-unresolved
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      'GLOBAL.__CLIENT__': true,
    }),
  ],
};
