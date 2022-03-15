# webpack的本地服务器

之前的所有示例中，每次在修改代码后都需要**重新编译代码并刷新页面**，这样就很麻烦！

通过`webpack-dev-server`可以帮我们完成上边的两件事情

### 安装

```js
npm install --save-dev webpack-dev-server
```

### 配置

**webpack.config.js**

```js
module.exports = {
  ...
  devServer: {
    open:true,
    port: 7070
  }
  ...
}
```

配置项

- open：自动打开浏览器
- port：本地服务器的端口，此项不配置默认端口是8080

**package.json**

```json
{
  ...
  "scripts": {
     ...
    "dev": "webpack-dev-server"
  },
  ...
}
```

### 运行

控制台输入`npm run dev`后会自动打开浏览器，在代码修改后会自动编译并刷新