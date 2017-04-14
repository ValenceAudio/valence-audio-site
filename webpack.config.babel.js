/* eslint-env node */
import webpack from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/// Constants ///
const PORT = 7447;
const HOST = "0.0.0.0";
const build_directory = "build";
const source_directory = "source";
const env = process.env.NODE_ENV;

// This plugin allows for base-page template
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${resolve(__dirname, source_directory)}/index.ejs`,
  env: env,
  filename: "index.html",
  inject: "false",
  port: PORT
});

const configuration = {

  context: resolve(__dirname, build_directory),

  devServer: {
    hot: true,
    host: HOST,
    port: PORT,
    contentBase: resolve(__dirname, build_directory)
  },

  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `${resolve(__dirname, source_directory)}/index.js`
  ],

  output: {
    path: resolve(__dirname, build_directory),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: ["json-loader"]
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader?modules", "postcss-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.svg$/,
        loader: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            query: {
              svgo: {
                plugins: [{ removeTitle: true }],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader?name=images/[hash].[ext]"
      },
      {
        test: /\.ico$/,
        exclude: /node_modules/,
        loader: "file-loader?name=favicon.ico"
      },
      {
        test: /CNAME$/,
        exclude: /node_modules/,
        loader: "file-loader?name=CNAME"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    HtmlWebpackPluginConfig
  ]
};

export default configuration;
