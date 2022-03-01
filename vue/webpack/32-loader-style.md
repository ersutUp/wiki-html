# loader-样式

> [官方文档](./https://webpack.docschina.org/loaders/#styling)

## 加载css文件

需要的loader: style-loader、css-loader

### style-loader

作用：把 CSS 插入到 DOM 中

使用：

- npm安装命令：`npm install --save-dev style-loader`

- webpack配置中添加loader：

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader"],
        },
      ],
    },
  };
  ```

  - **test：使用这个loader的文件（通过正则表达式匹配）**
  - **use：使用的loader，可以是多个**

### css-loader

作用：负责解析js中引入样式的语法

使用：

- npm安装命令：`npm install --save-dev css-loader`

- webpack配置中添加loader：

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["css-loader"],
        },
      ],
    },
  };
  ```

**想要css样式生效，那么上边俩个loader都需要用到**

### 在项目中生效

- 项目中安装style-loader、css-loader

  - 执行命令：`npm install --save-dev style-loader css-loader `

- 配置文件中添加loader

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader","css-loader"],
        },
      ],
    },
  };
  ```

  **注意：loader的顺序不能反，因为webpack打包时会按照从左往右的顺序加载loader，即先使用`style-loader`再使用`css-loader`**

[示例项目](./32-loader-style-demo)

## 加载less文件