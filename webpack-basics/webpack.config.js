const path = require('path');
const webpack = require('webpack');
// 帮助创建index.html文件， 一般都会配置模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次打包之前帮助清除 dist目录 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  // development   cheap-module-eval-source-map 
  // production       cheap-module-source-map
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.stylus$/,
        use: [          
          'style-loader',
          'css-loader',          
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'img/[name].[ext]'
            }
          },
          // 'file-loader'
        ]
      }
    ]
  },
  devServer: {
    // contentBase: './dist/',   ???
    open: true,
    port: 8000,
    hot: true,
    // host: '192.168.6.133',
    // proxy:
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // 为打包后的文件添加服务地址
    // publicPath: 'https://xxx.com/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/')
  }
}