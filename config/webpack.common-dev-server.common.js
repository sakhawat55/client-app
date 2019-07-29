'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const {root} = require('./helpers');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    vendor: root('src', 'vendor.ts'), // './src/vendor.ts',
    polyfills: root('src', 'polyfills.ts'),
    main: isDev ? root('src', 'main.ts') : root('src', 'main.aot.ts')
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@css-colors': path.resolve(__dirname, '../src/assets/css-colors')
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
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
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

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      // template : 'angularfrontend/src/index.html'
      template: 'src/index.html'
    })
  ]
};
