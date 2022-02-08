# Vue



1. [ES6中的let与var区别](./demo/01-let-var.html)
2. [ES6中的常量：const](./demo/02-const.html)
3. [ES6中的字面量增强写法](./demo/03-literal.html)
4. [ES6中的高阶函数](./demo/04-higher-order-func.html)
5. [hello world](./demo-cdn/01-helloWorld.html)
6. [列表展示 v-for](./demo-cdn/02-for.html)
7. [计数器(事件监听 v-on)](./demo-cdn/03-计数器.html)
8. [生命周期](./Vue生命周期.md)
9. [mustache语法](./demo-cdn/04-mustache.html)
10. [只渲染一次: v-once](./demo-cdn/05-v-once.html)
11. [html渲染: v-html](./demo-cdn/06-v-html.html)
12. [对内容不做解析: v-pre](./demo-cdn/07-v-pre.html)
13. [斗篷: v-clock](./demo-cdn/08-v-clock.html)
14. [标签属性使用变量：v-bind](./demo-cdn/09-v-bind.html)
15. [v-for、v-bind和v-on结合使用](./demo-cdn/10-example-01.html )
16. [计算属性:computed](./demo-cdn/11-computed.html)
17. [计算属性进阶:computed](./demo-cdn/12-computed-advanced.html)
18. [v-on事件监听的使用](./demo-cdn/13-v-on.html)
19. [v-if、v-else-if、v-else 条件判断的使用](./demo-cdn/14-v-if.html)
20. [v-show的使用](./demo-cdn/15-v-show.html)
21. [v-for遍历循环的使用](./demo-cdn/16-v-for.html)
22. [数组中的响应式（vue3.0以下版本需注意，示例中为 vue3.0）](./demo-cdn/17-array.html)
23. [购物车demo](./demo-cdn/18-shopping-cart.html)
    1. vue3中移除了过滤器，推荐使用计算属性或方法代替
24. [v-model的使用、原理以及修饰符](./demo-cdn/19-v-model.html)
25. [组件化](./demo-cdn/20-component.html)
    1. 全局组件
    2. 局部组件
    3. 组件中使用其他组件
    4. 模板抽离
26. [组件的通信](./demo-cdn/21-component2.html)
    1. 传值
    2. 组件通知上级（自定义事件）
27. [组件的双向绑定](./demo-cdn/22-component3.html)
    1. 手动实现
    2. 通过watch优化
    3. vue3中自带的语法糖

28. [父子组件的访问](./demo-cdn/23-component4.html)
    1. 父访问子组件：
       1. $children（vue3中没有了）
       2. $refs

    2. 子访问父组件：
       1. $parent
          1. 完全访问父组件，因为 $parent 直接拿到了父组件对象

       2. Provide / Inject
          1. 相比 $parent， Provide / Inject对权限可控

    3. 子组件访问根组件：$root

