//引入path工具类（node自带）
const path = require("path")

module.exports = {
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
        test: /\.less$/i,
        //loader的使用顺序
        use:["style-loader","css-loader","less-loader"],
      }
    ]
  }
}
