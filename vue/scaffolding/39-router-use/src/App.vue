<template>
  <div>
    <label>动态路由的参数</label><input type="input" v-model="id"/>
  </div>
  <router-link to="/home">首页</router-link>
  |
  <router-link to="/method-jump">通过方法跳转</router-link>
  |
  <router-link :to="'/dynamic-route/'+id">动态路由</router-link>|
  <router-link :to="'/dynamic-route/'+id+'hh'">动态路由</router-link>|
  <router-link to="/lazy-router">路由的懒加载</router-link>|
  <router-link to="/lazy-router2">路由的懒加载2</router-link>

  |<router-link to="/nesting-router">嵌套路由</router-link>

  |<router-link :to="{path:'/query/1',query:{name:'ersut',age:18}}">参数传递</router-link>

  |<a href="javascript:void(0);" @click="jumpQuery">方法跳转时参数传递</a>

<!-- 导航守卫 -->
  |<router-link to="/admin/login">控制台登录页</router-link>
  |<router-link to="/admin/console">控制台首页</router-link>

<!-- 路由中使用keepAlive -->
  |<router-link to="/keepAlive/notUsed">不使用keepAlive</router-link>
  |<router-link to="/keepAlive/use">使用keepAlive</router-link>
  |<router-link to="/keepAlive/include">keepAlive指定组件</router-link>
  |<router-link to="/keepAlive/exclude">keepAlive排除组件</router-link>
  |<router-link to="/keepAlive/maxCache">keepAlive最大缓存数</router-link>
  
  
  <div>
    <fieldset>
      <legend>
        router-view
      </legend>
      <router-view></router-view>
    </fieldset>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: 123
    }
  },
  methods:{
    jumpQuery(){
      this.$router.push({
        path:"/query/2",
        query:{
          name:"ersut wang",
          age:19
        }
      })
    }
  }
}
</script>

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
