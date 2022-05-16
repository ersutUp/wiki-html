<template>
  <router-link to="/home">首页</router-link>
  |
  <router-link to="/method-jump">通过方法跳转</router-link>
  <div>
    <fieldset>
      <legend>
        router-view
      </legend>
      <router-view></router-view>
    </fieldset>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.custom-active {
  color: #f00;
}
.my-active {
  color: #5a7a01;
}
</style>
