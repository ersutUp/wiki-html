<template>
  <div>
    <h3>{{counter}}</h3>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
  name:"counter",
  data(){
    return{
      counter:0
    }
  },
}
</script>

