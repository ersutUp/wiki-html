# webpack中使用vue

### 简单使用vue

1. 安装vue：`npm install --save vue`

   1. 注意：命令中是 --save 也就是说vue是要一起打包的

2. 页面(index.html)上创建一个div共vue挂载

   ```html
   <body>
     <div id="app">
     </div>
     <script src="./dist/main.bundle.js"></script>
   </body>
   ```

3. 入口js文件（main.js）中创建vue实例并挂载

   ```js
   import {createApp} from 'vue'
   
   createApp({
     template:`<h1>hahaha</h1>`,
   }).mount("#app")
   ```

4. 配置webpack(webpack.config.js)

   ```js
   module.exports = {
     resolve: {
       alias: {
         vue: 'vue/dist/vue.esm-bundler.js',
       },
     },
   }
   ```

   1. 这个配置是为了[支持运行时模板编译](https://staging-cn.vuejs.org/guide/scaling-up/tooling.html#project-scaffolding)

### .vue文件：通过组件的方式在webpack中使用vue

vue官方提供了一个loader用于解析`.vue`文件，每个`.vue`文件都是一个组件

1. 安装loader：`npm install -save-dev vue-loader vue-template-compiler`

2. 配置loader(webpack.config.js)

   ```js
   const { VueLoaderPlugin } = require('vue-loader')
   module.exports = {
     module:{
       rules:[
         {
           //匹配正则表达式的文件，执行use中的loader
           test: /\.vue$/i,
           use:["vue-loader"],
         },
         {
           test: /\.css$/i,
           use:["style-loader","css-loader"]
         }
       ]
     },
     plugins:[
       //这里不要丢了
       new VueLoaderPlugin(),
     ]
   }
   ```

3. vue文件的使用（Header.vue）

   ```vue
   <template>
     <!-- 这里是模板内容相当于 template 选项 -->
     <h1>{{message}}</h1>
   </template>
   
   <script>
   export default {
     // 这是 option选项 vue中js相关的在这里
     data(){
       return {
         message:"hello webpack-vue"
       }
     }
   }
   </script>
   
   <style>
   /* 这里是样式 */
     h1 {
       color: red;
     }
   </style>
   ```

4. 在main.js中使用Header.vue

   ```js
   import {createApp} from 'vue'
   import hea from './vue/Header.vue'
   
   createApp({
     template:`<hea/>`,
     components:{
       hea
     }
   }).mount("#app")
   ```

[**示例项目**](./33-loader-vue-demo)

### 番外篇

运行后发现浏览器中有个警告

```tex
Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.
```

经过查阅提供的链接以及相关文档，`__VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__`是两个配置项

- __VUE_OPTIONS_API__：vue3中新增了组合式api,原本vue3之前使用的选项式api，这个配置就是选项式api的开关
- __VUE_PROD_DEVTOOLS__：在生产环境中是否允许使用浏览器插件vue-devtools

在webpack.config.js中配置：

```js
const webpack = require('webpack');
module.exports = {
  plugins:[
    new webpack.DefinePlugin({
      //vue3中新增了组合式api,原本vue3之前使用的选项式api，下边这个配置就是选项式api的开关
      __VUE_OPTIONS_API__: true,
      //在生产环境中是否允许使用浏览器插件vue-devtools
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
}
```

