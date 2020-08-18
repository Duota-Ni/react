const path = require('path')
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge.merge(baseConfig,{
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    inline:true
  }
})

