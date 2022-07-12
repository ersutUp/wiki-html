<template>
<div>
  <button @click="reset">重置</button>
</div>
<div>
  <label for="surname">姓氏</label>
  <input type="text" id="surname" v-model="surname"/>
</div>
<div>
  <label for="name">名字</label>
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
//通过storeToRefs获取ref类型，非ref包装的值无法实现响应式
const {info,surname,name,hobbys} = storeToRefs(store)

function hobbyDel(index){
  hobbys.value.splice(index,1)
}

function addHobby(){
  //批量更新state
  store.$patch((state) =>{
    state.hobbys.push(data.newHobby)
    state.newHobbyNum++
  })
 /*
  store.$patch({
    hobbys: store.hobbys,
    newHobbyNum: store.newHobbyNum+1
  })
  */
  data.newHobby = ""
}

function reset(){
  //将所有状态重置为初始值
  store.$reset()
}

</script>