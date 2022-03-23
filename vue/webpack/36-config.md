# 配置文件分离

目前项目中统一使用的`webpack.config.js`配置文件，但是发布项目的时候`webpack-server-dev`的配置是不需要的，而且开发中代码不需要压缩而发布的代码需要压缩，如果使用一个配置文件那么每次发布项目的时候需要修改配置文件很麻烦。解决这个问题的办法是将配置文件分离。

配置文件分离需要用到`webpack-merge`

### webpack-merge的安装与使用

#### 安装

在项目目录下打开终端执行`npm i -D webpack-merge`

#### 使用

```js
const {merge} = require("webpack-merge")
merge(
    {a : [1],b:5,c:20},
    {a : [2],b:10, d: 421}
)
//合并后的结果
{a : [1,2] ,b :10 , c : 20, d : 421}
```



### 应用到项目中

1. 创建 build 目录来存放配置文件

2. 在build目录下创建`base.config.js`来存放公共配置

3. 在build目录下创建`dev.config.js`来存放开发时的配置

   1. 示例

      ```js
      const {merge} = require("webpack-merge")
      const base = require("./base.config")
      
      module.exports = merge(base,{
        mode:"development",
        devServer: {
          open:true
        }
      })
      ```

4. 在build目录下创建`prod.config.js`来存放生产的配置

   1. 示例

      ```js
      const {merge} = require("webpack-merge")
      const base = require("./base.config")
      
      module.exports = merge(base,{
        mode:"production",
      })
      ```

5. 修改node的配置文件，指定webpack使用的配置文件

   1. 示例

      ```
      {
        ...
        "scripts": {
          "build": "webpack --config ./build/prod.config.js",
          "dev": "webpack-dev-server --config ./build/dev.config.js"
        },
        ...
      }
      ```

   2. `--config`是指定配置文件

6. 由于配置文件添加了一层目录之前配置的项目输出目录以及打包文件需要修改下路径

   ```js
   module.exports = {
     //项目要打包的文件
     entry: path.join(__dirname,"../src/main.js"),
     //打包后的输出配置项
     output:{
       //输出的目录
       path: path.join(__dirname,"../dist"),
       //打包文件的文件名
       filename:"main.bundle.js"
     },
   }
   ```

    说明：`__dirname`是文件的当前目录，所以需要`../`回到项目的根目录。

[示例项目](./36-config)