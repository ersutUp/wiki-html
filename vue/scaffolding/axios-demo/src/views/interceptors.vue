<template>
<button @click="getDemo">拦截器</button>
<button @click="postDemo">响应失败拦截</button>
<p>
  {{data.result}}
</p>

</template>

<script setup>
import { request } from '../utils/network/HttpUtil';
import { reactive } from 'vue' 

const data = reactive({
  result:""
})

function getDemo(){
  request({
    url:"/get",
    params:{
      type:1,
      name:"haha"
    }
  })
  .then(result => {
    console.log("get result",result)
    data.result = result.data.args
  })
}


function postDemo(){
  request({
    url:"/111",
    method: "post",
    data:{
      type:1,
      name:"haha"
    }
  })
  .then(result => {
    console.log("post result",result)
    data.result = result
  }).catch(err => {
    console.log(err)
    data.result = err
  })
}


</script>