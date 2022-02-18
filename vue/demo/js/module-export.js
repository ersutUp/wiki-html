const fileName = "module-export.js->"

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

// 模块化导出接口时可以是常量、变量、函数、对象
// 1、导出接口方式一
export {
  sex,
  age,
  add,
  Person
}

// 2、导出接口方式二 : 定义时添加 export 关键字
export let name = "二飞" 

// 3、导出默认接口
// 默认接口 只能有一个，这里也可以是 常量、变量、对象
export default function (){
  return "这是默认导出函数"
}

export let height = 1.88
