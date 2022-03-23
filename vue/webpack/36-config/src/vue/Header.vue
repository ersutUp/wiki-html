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
  body{
    background: url(../image/129.png);
  }
</style>
