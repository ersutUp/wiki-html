//引入path工具类（node自带）
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack');
const htmlWebpackPlugin = require("html-webpack-plugin")
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
        test: /\.css$/i,
        use:["style-loader","css-loader"]      
      },
      {
        //匹配正则表达式的文件，执行use中的loader
        test: /\.vue$/i,
        use:["vue-loader"],
      }
    ]
  },
  plugins:[
    //这里不要丢了
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      //vue3中新增了组合式api,原本vue3之前使用的选项式api，下边这参数就是选项式api的开关
      __VUE_OPTIONS_API__: true,
      //在生产环境中是否允许使用浏览器插件vue-devtools
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new htmlWebpackPlugin({
      template:"index.html"
    })
  ],
  resolve: {
    alias: {
      //指定vue版本
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  devServer: {
    open:true,
    port: 7070
  }
}
