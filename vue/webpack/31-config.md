# 配置文件

> [示例项目](./31-config)

之前进行webpack的打包都需要指定输出目录以及打包文件，那么这些可以不指定吗？答案是可以的。

## webpack配置文件

`webpack`命令默认的配置文件是`./webpack.config.js`也就是当前目录下的 webpack.config.js 文件

1. 在项目的根目录创建 webpack.config.js 文件

2. 添加配置到文件中

   1. 配置内容

      1. ```js
         module.exports = {
           //项目要打包的文件
           entry: "./src/main.js",
           //打包后的输出配置项
           output:{
             //输出的目录
             path: "./dist",
             //打包文件的文件名
             filename:"main.bundle.js"
           }
         }
         ```

   2. 配置项说明

      1. entry ：项目要打包的文件
      2. output.path ：打包后输出的目录
      3. output.filename ：打包文件的文件名

3. 进入终端进入项目的根目录

4. 执行 `webpack`进行打包，控制台报错了

   1. ```shell
      configuration.output.path: The provided value "./dist" is not an absolute path!
      ```

   2. 报错的意思是 output.path 不是绝对路径

   3. 解决方案：

      1. 把绝对路径添这里，这样会带来问题，如果项目换了目录就要把这里也改一下，很麻烦的
      2. **通过 node.js 动态获取根目录与dist文件夹拼接**

## 项目中添加node.js

1. 打开终端进入项目根目录

2. node的初始化，执行`npm init`

3. 项目中多了node的配置文件，即 package.json 文件

4. 执行`npm install`，这条命令是安装项目的依赖，项目的依赖在 package.json 文件中，由于 package.json 文件是刚刚初始化出来的，没有任何依赖， 所以这条命令执行后项目没有变化。

5. 改webpack文件

   1.  改为：

      1. ```js
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
           }
         }
         ```

      2. `const path = require("path")`：引入path工具类

      3. `__dirname`：项目的根目录常量，这个是node.js中自带的

      4. `path.join()`：将路径拼接起来

6. 在终端执行`webpack`，可以成功打包了

7. **在终端执行`webpack`用的全局的，而全局的webpak是固定版本，这样是不行的，因为不同项目中webpack的版本可能不一样，不同版本中配置文件或者命令是不一样的**

   1. 本地安装webpack，执行命令：`npm install webpack@3.6.0 --save-dev`，其中`--save-dev`的意思是只在开发中使用这个包
      1. 这条命令执行后项目中多了node_modules文件夹，这个文件夹是项目中的依赖包
      2.  package.json 也发生了变化，多了一项配置 `"devDependencies": {"webpack": "^3.6.0"}`，这个配置是引入项目的依赖，并且这个依赖只在开发中使用，不参与最终发布的代码
   2. 在node配置文件中命令映射，`"scripts": {"build": "webpack"}`添加这个配置后，在控制台执行`npm run build`最终会调用`webpack`，他不同的地方是会**优先使用本地的webpack也就的项目中依赖的webpack**，如果项目中没有依赖webpack会调用全局的webpack

10. 执行`npm run build`打包项目
