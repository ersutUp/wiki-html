# 配置路径别名

### 作用

在路径引用中经常使用相对路径，但是相对路径有个弊端，例如html中引用图片，当html文件移动后相对路径也需要更改。

解决方案：使用路径别名来引用图片等。

#### 什么是路径别名

路径别名代表某个文件夹的路径，这样通过路径别名引用不用担心文件移动造成的引用失效。

示例：`@`代表项目的src文件夹

```html
<img src="@/assets/img/home-bar/home_activate.svg"/>
```

### <div id="vueCli3"></div>vueCli3自定义路径别名

vuecli3中内置了`@`别名代表项目的src文件夹

自定义路径别名，示例：

vue.config.js

```js
module.exports = defineConfig({
  configureWebpack:{
    resolve:{
      alias:{
        "@assets":"@/assets",
        "@components":"@/components",
        "@views":"@/views",
      }
    }
  }
})
```

- @assets：代表`src/assets`文件夹
- @components：代表`src/components`文件夹
- @views：代表`src/views`文件夹

**在html中使用：**

```html
<!-- 使用@assets别名 -->
<img src="@assets/img/home-bar/home_activate.svg"/>
```

**在js中使用：**

```js
import { createRouter, createWebHistory } from 'vue-router'
//使用@views别名
const ProfileView = () => import('@views/profile/ProfileView')

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

```

