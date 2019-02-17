const webpack = require('webpack');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const dependencies = require('./package.json').dependencies;
const { isProd } = require('./share/constant');

const buildPkg = new Set([
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-modules-commonjs',
  '@babel/polyfill',
  '@babel/preset-env',
  '@babel/preset-react',
  'add-asset-html-webpack-plugin',
  'babel-loader',
  'babel-plugin-add-react-displayname',
  'babel-plugin-module-resolver',
  'babel-plugin-styled-components',
  'hard-source-webpack-plugin',
  'speed-measure-webpack-plugin',
  'uglifyjs-webpack-plugin',
  'html-webpack-plugin',
  'mini-css-extract-plugin',
  'optimize-css-assets-webpack-plugin',
  'html-webpack-plugin',
  'url-loader',
  'pug-loader',
  'sass-loader',
  'sass-resources-loader',
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-cli',
  'webpack-merge',
]);

const defaultConfig = {
  entry: {
    vendor: Object.keys(dependencies).filter(d => !buildPkg.has(d)),
  },
  devtool: 'eval',
  context: __dirname,
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].dll.[hash].js',
    library: '[name]_[hash]',
  },
  plugins: [
    ...(isProd
      ? [
        new UglifyJsPlugin({
          parallel: true,
          cache: true,
        }),
      ]
      : []),
    new HardSourcePlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEV: JSON.stringify(process.env.DEV),
      },
    }),

    new webpack.DllPlugin({
      path: path.resolve('public/dll.json'),
      name: '[name]_[hash]',
    }),
  ],
};

module.exports = defaultConfig;
