<template>
<div>
  <label for="name">姓名</label>
  <input type="text" id="name" v-model="name"/>
</div>
<div>
  <label for="age">年龄</label>
  <input type="number" id="age" v-model="info.age"/>
</div>
<div>
  <button @click="login">登录</button>
  <button @click="reset">重置</button>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from "@/store/user"
import { storeToRefs } from 'pinia';

const router = useRouter()

const store = userStore()

console.log("store",store)

//通过 storeToRefs 将结构的值变为 ref 对象，这样修改值时同步到store中
const {info,name} = storeToRefs(store)
console.log("name",name)

console.log("info",info)
console.log("info.age",info.value.age)

function login(){
  router.replace("/user/info")
}
function reset(){
  //将所有状态重置为初始值
  store.$reset()
}

</script>