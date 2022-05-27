<template>
<h3>使用prop传递参数</h3>
<h4>ID：{{id}}</h4>
<h4>姓名：{{name}}</h4>
<h4>年龄：{{age}}</h4>
</template>

<script>
export default {
  props:{
    id:{
      type: [String,Number],
      default: 0
    },
    name:{
      type: [String],
      default: ""
    },
    age:{
      //当组件的props通过路由传递时务必要加上String类型，因为从地址栏中获取的参数都是String类型
      type: [String,Number],
      default: 0,
      validator(value){
        return value > -1;
      }
    }
  }
}
</script>