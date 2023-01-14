const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "public")
  },
  target: "web",
  devServer: {
    historyApiFallback:true,
    static: {
      directory: path.resolve(__dirname, "build"),
      publicPath:'/',
    },
    compress: true,
    port:8080,
    liveReload: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      }
    },
  },
  module:{
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/, // ALWAYS BEST PRACTICE TO EXCLUDE node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // ORDER MATTERS HERE, RUNS RIGHT to LEFT -- is including preset NEEDED?
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader"
          //"sass-loader",
        ], // ORDER MATTERS HERE, ALSO RUNS RIGHT to LEFT!
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ]
}