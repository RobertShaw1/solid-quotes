'use strict';

// Node Modules
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Local Directories
const CLIENT_DIR = path.resolve(__dirname, 'app');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = () => {

  const config = {
    mode: 'development',
    entry: [
      './app/index.jsx',
    ],
    output: {
      path: DIST_DIR,
      filename: 'app.bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: CLIENT_DIR,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [
        'node_modules',
        CLIENT_DIR,
      ],
      extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    context: __dirname,
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      // new ExtractTextPlugin('style.css'),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: CLIENT_DIR + '/index.html',
      }),
    ],
    stats: {
      env: true,
      excludeModules: 'node_modules',
    },
  };

  // Below are additional configurations for production

  // if (process.env.NODE_ENV === 'production') {
  //   config.mode = 'production';
  //   config.output.path = PUBLIC_DIR;
  //   config.devtool = 'nosources-source-map';
  // }

  return config;
};
