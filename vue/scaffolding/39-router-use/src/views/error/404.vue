<template>
  <h1>地址不存在：/{{notFound}}</h1>
</template>

<script>
export default{
  props:{
    notFound: {
      type: String
    }
  }
}
</script>