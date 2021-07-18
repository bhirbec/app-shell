const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BuildWebsite = require('./plugins/website');
const publicDir = path.join(__dirname, './public');
const layoutHtml = path.join(__dirname, "./src/html/layout.html");
const indexHtml = path.join(__dirname, "./src/html/index.html");
const notFoundHtml = path.join(__dirname, "./src/html/404.html");

module.exports = [(env, argv) => {
  argv = argv || {};

  return {
    mode: 'development',
    entry: {
      'app': path.resolve(__dirname, "./src/js/index.js"),
    },
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'static/js/[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'layout.html',
        template: layoutHtml,
        inject: null,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: indexHtml,
        inject: null,
      }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: notFoundHtml,
      }),
      new BuildWebsite(),
    ],
    module: {
      rules: [
        babelRule,
        htmlRule,
        cssRule,
        minCSSRule,
        imgRule,
        fontRule,
      ]
    }
  }
}];

const babelRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['env', 'react']
    }
  }
};

const cssRule = {
  test: /\.css$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/',
        name: 'static/css/[name].[hash].[ext]',
      }
    },
    {
      loader: "extract-loader",
    },
    {
      loader: "css-loader"
    },
  ]
};

const minCSSRule = {
  test: /\.min\.js$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/',
        name: 'static/js/[name].[hash].[ext]',
      }
    }
  ]
};

const htmlRule = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: {
        attrs: ["img:src", "link:href", "script:src"],
        interpolate: true,
      },
    },
  ],
};

const fontRule = {
  test: /\.(woff|woff2|eot|ttf|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/',
        name: 'static/fonts/[name].[hash].[ext]',
      }
    }
  ]
};

const imgRule = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/',
        name: 'static/images/[name].[hash].[ext]',
      }
    }
  ],
};
