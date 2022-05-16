<template>

  <button @click="pushMeth">跳转可返回</button>
  <button @click="replaceMeth">跳转不可返回</button>
</template>

<script>
export default {
  methods:{
    pushMeth(){
      this.$router.push("/home")
    },
    replaceMeth(){
      this.$router.replace("/home")
    },
  }
}
</script>