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
        test:/\.css$/i,
        use:["style-loader","css-loader"],
      },
      {
        //匹配正则表达式的文件，执行use中的loader
        test: /\.(png|jpg|jpeg|gif|)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        },
        generator: {
          filename: 'static/[name]-[hash:8][ext]'
        }
      }
    ]
  }
}
