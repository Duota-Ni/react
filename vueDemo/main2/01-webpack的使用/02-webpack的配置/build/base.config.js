const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    //动态获取路径，不能是相对路径
    path: path.resolve(__dirname, "../dist"),
    filename: 'bundle.js',
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时,从右到左读取
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            //当加载的图片小于limit时，会将图片编译成base64字符串形式
            //当加载的图片大于limit时，需要使用file-loader模块加载,图片会压缩到根目录
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },{
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    //alias：别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    },
    extensions:['.js','.css','.vue']
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归Duota所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // new uglifyJsPlugin()
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  //   inline:true
  // }
}

