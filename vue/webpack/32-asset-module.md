# webpack-图片

> 在webpack5之前加载图片使用loader来处理，到了webpack5以后通过资源模块（asset module）进行处理，资源模块还可以处理其他文件比如字体、json文件
>

### 如何配置和使用 asset module

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test:/\.css$/i,
        use:["style-loader","css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|)$/i,
        type: 'asset',
      }
    ]
  },
};
```

**base.css**

```css
body{
  background: url(../image/129.png);
}
h2{
  background-image: url(../image/2.jpg);
}
```

这样配置后项目中使用的png格式图片就会被一起编译打包，在**图片小于 8kb 时会编译成base64算法编码的文件内容**，而在大于8kb时会将源文件拷贝一份并计算哈希值，**使用哈希值作为文件名防止图片名字重复**

#### 自定义图片的编码条件

可以设置 [`Rule.parser.dataUrlCondition.maxSize`](https://webpack.docschina.org/configuration/module/#ruleparserdataurlcondition) 选项来修改此条件

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 16 * 1024 // 16kb
          }
        }
      }
    ]
  },
};
```

此时当图片小于 16kb 时才会编译成base64算法编码的文件内容

#### 自定义输出目录以及文件名

通过配置`Rule.generator.filename`可以指定文件输出的目录以及文件名

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 16 * 1024 // 16kb
          }
        },
        generator: {
          filename: 'static/[name]-[hash:8][ext]'
         }
      }
    ]
  },
};
```

添加配置后大于16kb的文件会输出到static目录，并命名为 [文件的原名称]-[8位hash值].[扩展名]

##### 模板字符串

[xxx] 这种格式的是模板字符串

文件中它支持使用以下的几个

| 模板       | 描述                                 |
| :--------- | :----------------------------------- |
| [file]     | 文件名和路径，不含 query 或 fragment |
| [query]    | 带前缀 `?` 的 query                  |
| [fragment] | 带前缀 `#` 的 fragment               |
| [base]     | 原文件名（包含扩展名）               |
| [path]     | 只有 path，不含文件名                |
| [name]     | 原文件名（不包含扩展名）             |
| [ext]      | 带前缀 `.` 的扩展名                  |
| [hash]     | 文件的 Hash 值                       |

其中`[hash]`可以指定长度，像`[hash:16]`是指定长度为16位



[**示例项目**](./32-asset-module)