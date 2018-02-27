import {join} from 'path'
import Webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import paths from './src/config/plugins/paths'

// environment settings
const __DEV__ = process.env.NODE_ENV !== 'production'
const __PROD__ = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    immediate: join(paths.webpackSource, 'js', 'immediate.js'),
    app: join(paths.webpackSource, 'js', 'app.js')
  },
  devtool: __DEV__ ? '#cheap-module-eval-source-map' : false,
  output: {
    path: paths.webpackDestination,
    publicPath: paths.webpackPublicPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              precision: 8,
              includePaths: []
            }
          }
        ])
      },
      {
        exclude: /node_modules\/(?!loader-utils\/).*/,
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader?name=[name].[hash:20].[ext]',
        options: {
          outputPath: paths.webpackDestination,
          publicPath: paths.webpackPublicPath
        }
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader?name=[name].[hash:20].[ext]&limit=10000',
        options: {
          outputPath: paths.webpackDestination,
          publicPath: paths.webpackPublicPath
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.bundle.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: '**/*.png',
        context: './assets',
        to: './png'
      }
    ], {
      ignore: ['favicon.png']
    }),
    new CopyWebpackPlugin([
      {
        from: '**/favicon.png',
        context: './assets',
        to: './'
      }
    ])
  ]
}

if (__DEV__) {
  config.plugins.push(new Webpack.LoaderOptionsPlugin({
    debug: true
  }))
  // Force webpack-dev-middleware to write files to the disk for metalsmith
  config.plugins.push(new WriteFilePlugin({
    log: false
  }))
}

if (__PROD__) {
  config.plugins.push(new Webpack.LoaderOptionsPlugin({
    minimize: true
  }))
  config.plugins.push(new Webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }))
  config.plugins.push(new Webpack.optimize.AggressiveMergingPlugin())
  config.plugins.push(new Webpack.optimize.UglifyJsPlugin())
}

module.exports = config
