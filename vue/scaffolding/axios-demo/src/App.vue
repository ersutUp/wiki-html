<template>
  <nav>
    <router-link to="/">hello-axios</router-link>|
    <router-link to="/config">带参数请求</router-link>|
    <router-link to="/global-config">全局配置</router-link>|
    <router-link to="/package">封装</router-link>|
    <router-link to="/interceptors">拦截器</router-link>|
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
