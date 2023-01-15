const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    mode: 'development',
    entry: ['@babel/polyfill', './src/server/index.js'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      global: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@pages': path.resolve(__dirname, 'src/shared/pages'),
        '@components': path.resolve(__dirname, 'src/shared/components'),
        '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
        '@styles': path.resolve(__dirname, 'src/shared/styles')
      }
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        _isBrowser_: 'false'
      })
    ]
  },
  {
    mode: 'development',
    entry: './src/browser/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
          sideEffects: true
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.gif'
      }),
      new webpack.DefinePlugin({
        _isBrowser_: 'true'
      })
      // new BundleAnalyzerPlugin()
    ],
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, 'src/shared/pages'),
        '@components': path.resolve(__dirname, 'src/shared/components'),
        '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
        '@styles': path.resolve(__dirname, 'src/shared/styles')
      }
    }
  }
];
