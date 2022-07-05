<template>
<div>
  <span>姓名:</span>
  <span>{{fullName}}</span>
</div>
<div>
  <span>年龄:</span>
  <span>{{info.age}}</span>
</div>
<div>
  <span>爱好:</span>
  <span>{{showAllHobby}}</span>
</div>
<div>
  <span>前二爱好:</span>
  <span>{{showHobbys(2)}}</span>
</div>
<div>
  <span>新增爱好:</span>
  <span>{{newHobbyNum}}个</span>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { userStore } from '@/store/user'
const {info,fullName,hobbys,newHobbyNum,showHobbys} = userStore()

const showAllHobby = computed(() => hobbys.join(","))

</script>