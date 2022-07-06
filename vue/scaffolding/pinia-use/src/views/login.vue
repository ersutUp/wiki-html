<template>
<div>
  <label for="surname">姓氏</label>
  <input type="text" id="surname" v-model="data.surname"/>
</div>
<div>
  <label for="name">名字</label>
  <input type="text" id="name" v-model="data.name"/>
</div>
<div>
  <button @click="login">登录</button>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from "@/store/user"
import { reactive,ref } from 'vue';

//reactive下的ref会自动解包无需.value
const data = reactive({
  name:ref(''),
  surname:ref('')
})

const router = useRouter()
const useUserStore = userStore()

function login(){
  if (useUserStore.login(data.surname,data.name)){
    router.replace("/user/info")
  } else {
    alert("登录失败")
  }
}

</script>