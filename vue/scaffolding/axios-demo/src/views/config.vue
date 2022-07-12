<template>
<button @click="getDemo">get带参数请求</button>
<button @click="postDemo">post请求体参数请求</button>
<p>
  {{data.result}}
</p>

</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue' 

const data = reactive({
  result:""
})

function getDemo(){
  axios.get("/get",{
    baseURL:"http://httpbin.org",
    timeout: 2000,
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
  axios({
    baseURL:"http://httpbin.org",
    url:"/post",
    method:"post",
    data:{
      ttt:123
    },
    headers:{
      deviceType:"h5"
    }
  })
  .then(result => {
    console.log("post result",result)
    data.result = result.data.json
  })
}


</script>