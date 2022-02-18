# ES6的模块化

### 没有模块化带来的问题

不同js文件内的变量名发生冲突时（**通过var定义变量允许冲突**），代码可能不会按预想的方式运行，从而**出现bug**，尤其是在代码量较大的情况下排查更麻烦，看下边的示例：

[html部分](../demo/05-non-module.html)：

```html
<body>
  <h1>看控制台</h1>
  <script>
    var flag = true
  </script>
  <script src="./js/non-module-1.js"></script>
  <script src="./js/non-module-2.js"></script>
</body>
```

[non-module-1.js](../demo/js/non-module-1.js)

```js
var flag = true
if(flag){
  console.log("我是non-module-1.js")
}
flag = false
```

[non-module-2.js](../demo/js/non-module-2.js)

```js
if(flag){
  console.log("我是non-module-2.js")
}
```

控制台打印：

```
我是non-module-1.js
```



non-module-2.js 中是想使用 html 中的 flag ， 从而打印出`我是non-module-2.js`

但是由于 non-module-1.js 中也定义了 flag 并且最后设置为 false 所以 non-module-2.js 中使用的是这个falg

最终只打印了 `我是non-module-1.js`

**上边这个示例体现出的问题：**

1. **var关键字允许变量名冲突，随之带来的问题**
2. **各个js文件中的变量互相可以使用没有隔离**

[通过模块化解决](#isolation)

### 模块化的使用

[源代码](../demo/05-module-demo.html)

#### 模块化的定义

在html引入js时将 script 标签的 type 属性设置为 module

示例：

```html
<script src="./js/module-export.js" type="module"></script>
```

#### 模块化的导出及导入接口

<p style="color:red">模块化导出接口时可以是常量、变量、函数、对象</p>

##### 导出接口方式一：通过export关键字批量导出

```js
// 常量
const sex = "男"
// 变量
let age = 18
// 函数
function add(num1,num2) {
  return num1+num2
}
// 对象
class Person{
  constructor(){
    console.log(fileName,"这是构造函数")
  }
  play(){
      console.log(fileName,"玩啊玩");
  }
}
// 重点！！！
export {
  sex,
  age,
  add,
  Person
}
```

##### 导出接口方式二：通过export单个导出

```js
export let name = "二飞" 
```

##### 导入接口

格式：`import { xxx,xx } from "js文件路径"`，xxx 对应导出的接口名，这里可以导入一个或多个

示例：

```js
import { sex,age } from "./module-export.js";
console.log(fileName,sex)
console.log(fileName,age)

import {add,Person} from "./module-export.js"
console.log(fileName,add(1,5))
new Person().play()

import {name} from "./module-export.js"
console.log(fileName,name)
```

#### 导出及导入默认接口

##### 导出默认接口

通过`export default`进行导出，但是一个文件内只能有一个

示例：

```js
export default function (){
  return "这是默认导出函数"
}
```

当导出变量时需要先定义，示例：

```js
let age = 18
export default age
```

##### 导入默认接口

格式：`import xxx from "js文件路径"`，xxx是自定义的一个名称，通过这个名称调用默认接口

示例：

```js
import def from "./module-export.js"
console.log(fileName,def())
```

##### 导入默认接口时同时导入指定接口

格式：`import xxx,{ttt} from "js文件路径"`，xxx 是默认接口，ttt是对应导入的接口名

示例：

```js
import def2,{height} from "./module-export.js"
console.log(fileName,height)
console.log(fileName,def2())
```

#### 导入全部接口

格式：`import * as xxx from "js文件路径"`，xxx是一个对象，他的属性就是对应文件中导出的接口们，通过 xxx.default 调用默认接口

示例：

```js
import * as modExport from "./module-export.js"
//modExport是个对象，他的属性就是module-export.js中导出的接口们
console.log(fileName,typeof modExport)
console.log(fileName,modExport.add(5,16))
console.log(fileName,modExport.name)

// 通过 default 调用modExport默认接口
console.log(fileName,modExport.default())
```

### <div id="isolation">通过模块化解决一开始提出的问题</div>

[html](../demo/05-module.html)：

```html
<body>
  <h1>看控制台</h1>
  <script src="./js/module-1.js" type="module"></script>
  <script src="./js/module-2.js" type="module"></script>
</body>
```

[module-1.js](../demo/js/module-1.js):

```js
let flag = true
if(flag){
  console.log("我是non-module-1.js")
}
flag = false
```

[module-2.js](../demo/js/module-2.js):

```js
import { flag } from "./module-common.js"

if(flag){
  console.log("我是module-2.js")
}
```

[module-common.js](../demo/js/module-common.js):

```js
let flag = true

export {
  flag
}
```

控制台打印：

```
我是module-1.js
我是module-2.js
```

**由于模块化各个文件之间的变量是不冲突的，当想使用其他文件的接口时需要通过导入来使用。**

module-1.js中是自己定义的 flag ，最后即使修改为false也不会影响其他文件

module-2.js 通过导入使用了公共（module-common.js）的 flag ， 当这个 flag 修改为 false 时才会影响打印