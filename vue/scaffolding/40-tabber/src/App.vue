<template>
  <router-view></router-view>
  <MainTabBer/>
</template>

<script>
import MainTabBer from "@/components/MainTabBer";

export default {
  components:{
      MainTabBer
  }
}

</script>

<style>
@import url("@/assets/css/base.css");

</style>