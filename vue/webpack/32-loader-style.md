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

作用：加载 CSS 文件

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

  **注意：loader的顺序不能反，因为webpack打包时会按照从右往左的顺序加载loader，即先使用`css-loader`再使用`style-loader`**

[示例项目](./32-loader-css-demo)

## 加载less文件

需要的loader：less-loader

### less-loader

作用：将 Less 编译为 CSS 

使用：

- npm安装命令：`npm install --save-dev less less-loader`

  - 需要安装`less`来支撑`less-loader`

- webpack配置中添加loader：

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: ["style-loader","css-loader","less-loader"],
        },
      ],
    },
  };
  ```

  - **use中使用了三个loader是因为`less-loader`只负责编译成css，而css文件的加载以及插入到DOM中生效还需要其他两个loader来处理**

[示例项目](./32-loader-less-demo)