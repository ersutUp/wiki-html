<template>
  <button @click="login">登录</button>
</template>

<script>
import { loginKey } from "@/constant/storage";

export default {
  methods:{
    login(){
      localStorage.setItem(loginKey,true);
      this.$router.push("/admin/console")
    }
  }
}
</script>