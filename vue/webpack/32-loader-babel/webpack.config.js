//引入path工具类（node自带）
const path = require("path")

module.exports = {
  mode: 'development',
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
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
