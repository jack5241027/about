const webpack = require('webpack');
const merge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const basic = require('./webpack.config.js');

const smp = new SpeedMeasurePlugin({ disable: !process.env.MEASURE });

module.exports = smp.wrap(
  merge(basic, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    watch: true,
    output: {
      ...basic.output,
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      hot: true,
      host: '0.0.0.0',
      port: process.env.PORT || 8080,
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  })
);
