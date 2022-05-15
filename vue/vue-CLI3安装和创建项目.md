# vue-CLI3安装和创建项目

<div style="color:red;font-size:25px;">vue推出新构建工具create-vue</div>

### 1、介绍

使用Vue CLI可以快速搭建Vue开发环境以及对应的配置（webpack、node等配置），俗称脚手架。

一般在大型项目中使用

### 2、依赖

node.js

### 2、安装

`npm install -g @vue/cli`

### 3、创建项目

执行命令：`vue create 项目名`

选项说明：

1. 选择预设（Please pick a preset:）

   ```
   Default ([Vue 3] babel, eslint)		vue3内置babel, eslint
   Default ([Vue 2] babel, eslint)		vue2内置babel, eslint
   Manually select features			手动选择功能
   ```

   此处使用 手动选择功能

2. 勾选项目所需的功能，空格勾选，回车确认（Check the features needed for your project）

   ```
   ( ) Babel									js编译器可以将ES6转ES5从而支持更多浏览器
   ( ) TypeScript
   ( ) Progressive Web App (PWA) Support		这个好像是生成手机端的app
   ( ) Router									路由
   ( ) Vuex									
   ( ) CSS Pre-processors						Css预处理器，用了它可以支持Sass、LESS等
   ( ) Linter / Formatter						代码规范
   ( ) Unit Testing							单元测试
   ( ) E2E Testing								端到端测试
   ```

   按需选择

3. 选择vue的版本

   ```
   3.x
   2.x
   ```

   选择3.x

4. 选择配置文件的位置（ Where do you prefer placing config for Babel, ESLint, etc.? ）

   ```
   In dedicated config files		独立保存
   In package.json					放在package.json中
   ```

   选择独立保存，修改时方便
   
5. 是否将当前设置保存为预设

   ```
   Save this as a preset for future projects? (y/N)
   ```

   Y：保存预设，保存后在创建项目时会看到保存的预设

   N：不保存



[脚手架项目参考](./scaffolding/37-hello)
