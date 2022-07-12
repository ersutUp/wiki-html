<template>
<button @click="getDemo">get请求</button>
<button @click="postDemo">post请求</button>
<button @click="deleteDemo">delete请求</button>
<button @click="allDemo">并发请求</button>
<p>
  {{data.result}}
</p>

</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue' 

//axios全局配置
//超时时间
axios.defaults.timeout = 5000
//baseUrl
axios.defaults.baseURL = "http://httpbin.org"

const data = reactive({
  result:""
})

function getDemo(){
  axios.get("/get")
  .then(result => {
    console.log("get result",result)
    data.result = result
  })
}
function postDemo(){
  axios.post("/post")
  .then(result => {
    console.log("post result",result)
    data.result = result
  })
}
function deleteDemo(){
  axios.delete("/delete")
  .then(result => {
    console.log("delete result",result)
    data.result = result
  })
}
function allDemo(){
  axios.all([axios.delete("/delete"),axios.get("/get")])
  .then(results => {
    console.log("all result",results)
    data.result = results
  })
}

</script>