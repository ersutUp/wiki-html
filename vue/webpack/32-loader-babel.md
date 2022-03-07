# 语法转换

> ES6语法较新，如果发布ES6的代码部分浏览器无法识别，所有需要转换成ES5再发布

### babel的使用

通过`babel-loader`可以将ES6语法转换为ES5代码

使用：

- npm安装命令：`npm install -D babel-loader @babel/core @babel/preset-env`

  - 其中 `@babel/core @babel/preset-env` 是 `babel-loader`的依赖包

- webpack配置中添加loader

  ```js
  
  module.exports = {
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
  ```

  - 其中`exclude`是排除不用打包的目录，node_modules 目录是node安装的依赖，此处排除 node_modules 目录

[**示例项目**](./32-loader-babel)

