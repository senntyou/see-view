
'use strict';

var webpack = require('webpack');
var moment = require('moment');
var packageJson = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'see-view.js',
    library: 'seeView',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`
    see-view v${packageJson.version}

    https://github.com/senntyou/see-view

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `)
  ],
  externals: {
    jquery : {
      commonjs: 'jquery',
      amd: 'jquery',
      commonjs2: 'jquery',
      root: 'jQuery'
    }
  }
};