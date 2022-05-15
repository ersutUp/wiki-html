<template>
  <router-link to="/home">首页</router-link>
  |
  <router-link to="/about" active-class="my-active">关于</router-link>
  |
  <router-link to="/replace" replace >router-link的replace</router-link>
  <div>
      <router-view></router-view>
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
