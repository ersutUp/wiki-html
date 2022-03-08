//引入path工具类（node自带）
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack');
module.exports = {
  mode:"development",
  //项目要打包的文件
  entry: "./src/main.js",
  //打包后的输出配置项
  output:{
    //输出的目录
    path: path.join(__dirname,"dist"),
    //打包文件的文件名
    filename:"main.bundle.js"
  },
  module:{
    rules:[
      {
        //匹配正则表达式的文件，执行use中的loader
        test: /\.vue$/i,
        use:["vue-loader"],
      },
      {
        test: /\.css$/i,
        use:["style-loader","css-loader"]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      //todo 这俩是啥？？？
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
}
