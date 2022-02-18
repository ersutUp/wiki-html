const fileName = "module-import.js->"
console.log(fileName,"1、选择性导入接口")
// 1、选择性导入接口
import { sex,age } from "./module-export.js";
console.log(fileName,sex)
console.log(fileName,age)

import {add,Person} from "./module-export.js"
console.log(fileName,add(1,5))
new Person().play()

import {name} from "./module-export.js"
console.log(fileName,name)

console.log("--------------------------分割线--------------------------")

console.log(fileName,"2、导入默认接口")
// 2、导入默认接口
import def from "./module-export.js"
console.log(fileName,def())

// 2.1、导入默认接口时同时导入指定接口
import def2,{height} from "./module-export.js"
console.log(fileName,height)
console.log(fileName,def2())


console.log("--------------------------分割线--------------------------")

console.log(fileName,"3、导入全部接口")
// 3、导入全部接口
import * as modExport from "./module-export.js"
//modExport是个对象，他的属性就是module-export.js中导出的接口们
console.log(fileName,typeof modExport)
console.log(fileName,modExport.add(5,16))
console.log(fileName,modExport.name)

// 通过 default 调用modExport默认接口
console.log(fileName,modExport.default())