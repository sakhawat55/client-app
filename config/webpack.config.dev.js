'use strict';

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const {root} = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: root('..', 'public', 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  optimization: {
    noEmitOnErrors: true
  },

  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: root('tsconfig.json')
            }
          },
          'angular2-template-loader',
          'angular-router-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
