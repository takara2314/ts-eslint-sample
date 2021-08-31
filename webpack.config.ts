import path from 'path';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
import ThreeMinifierPlugin from "@yushijinhun/three-minifier-webpack";
const threeMinifier = new ThreeMinifierPlugin();

const MODE: 'development' | 'production' = 'development';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: MODE,
  context: path.join(__dirname, 'frontend'),
  entry: './ts/index.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'base.js',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'ts',
              target: 'es2020'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'js',
              target: 'es2020'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    minimize: MODE === 'development' ? false : true,
    minimizer: [
      new ESBuildMinifyPlugin()
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './html/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    threeMinifier
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      threeMinifier.resolver
    ],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  devtool: MODE === 'development' ? 'inline-source-map' : 'hidden-source-map',
  devServer: {
    contentBase: __dirname,
    open: true,
    port: 3000
  }
};

export default config;
