'use strict';

const webpackMerge = require('webpack-merge');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const commonConfig = require('./webpack.config.common');
const {root} = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',

  output: {
    path: root('..', 'public', 'dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          compress: {
            warnings: false
          }
        }
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: false
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',

        exclude: [
          // /node_modules/,
          /.*\.(test|spec).ts/,
          /test_utils/
        ]
      }
    ]
  },

  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: root('tsconfig.json'),
      entryModule: root('src', 'app', 'app.module#AppModule')
    })
  ]
});
