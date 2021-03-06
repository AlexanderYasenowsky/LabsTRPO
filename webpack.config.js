const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
  entry: './src/index.js',
  output: {
    filename: 'builder.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        loader:["babel-loader"],
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
       new HtmlWebpackPlugin({
           template: "./src/modules/main.html"
       })
   ]
}
