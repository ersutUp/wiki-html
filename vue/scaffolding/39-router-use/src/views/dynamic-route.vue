<template>
  <h3>接受id参数(第一种方式):{{$route.params.id}}</h3>
  <h3>接受id参数(第二种方式):{{id}}</h3>
</template>

<script>
export default {
  computed:{
    id(){
      return this.$route.params.id
    }
  }
}
</script>