'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const {root} = require('./helpers');
// const isDev = process.env.NODE_ENV !== 'production';
const optionsForProduction = {
  // template : 'angularfrontend/src/index.html'
  template: 'src/index.html',
  chunksSortMode: 'none'
};
const optionsForDev = {
  template: 'src/index.html'
};
const htmlWebpackPluginOptions
  = process.env.NODE_ENV === 'production' ? optionsForProduction : optionsForDev;

module.exports = {
  entry: {
    vendor: root('src', 'vendor.ts'), // './src/vendor.ts',
    polyfills: root('src', 'polyfills.ts'),
    main: root('src', 'main.ts')
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules'],
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@css-colors': path.resolve(__dirname, '../src/assets/css-colors'),
      '@fonts': path.resolve(__dirname, '../src/assets/fonts'),
      '@css-variables': path.resolve(__dirname, '../src/assets/css-params-variables/params')
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer()
              ],
              sourceMap: true
            }
          },
          {loader: 'sass-loader', options: {sourceMap: true}}
        ],
        include: root('src', 'app')
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin(htmlWebpackPluginOptions)]
};
