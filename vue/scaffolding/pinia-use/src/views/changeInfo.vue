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
  <span>爱好:</span>
  <div v-for="(item,index) in hobbys">
    {{item}}
    <span @click="hobbyDel(index)">×</span>
  </div>
  <input type="text" v-model="data.newHobby"/>
  <button @click="addHobby">新增</button>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/store/user'

const data = reactive({
  newHobby: ""
})

const store = userStore()
const {info,name,hobbys} = storeToRefs(store)

function hobbyDel(index){
  hobbys.value.splice(index,1)
}

function addHobby(){
  //批量更新state
  store.$patch((state) =>{
    state.hobbys.push(data.newHobby)
    state.newHobbyNum++
  })
  data.newHobby = ""
}

</script>