<template>
<div>
  <span>名称:</span>
  <span>{{name}}</span>
</div>
<div>
  <span>年龄:</span>
  <span>{{info.age}}</span>
</div>
<div>
  <span>爱好:</span>
  <span>{{showHobby}}</span>
</div>
<div>
  <span>新增爱好:</span>
  <span>{{newHobbyNum}}个</span>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { userStore } from '@/store/user'
const {info,name,hobbys,newHobbyNum} = userStore()

const showHobby = computed(() => hobbys.join(","))

</script>