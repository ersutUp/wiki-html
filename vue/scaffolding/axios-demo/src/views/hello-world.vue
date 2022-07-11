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

const data = reactive({
  result:""
})

function getDemo(){
  axios.get("http://httpbin.org/get")
  .then(result => {
    console.log("get result",result)
    data.result = result
  })
}
function postDemo(){
  axios.post("http://httpbin.org/post")
  .then(result => {
    console.log("post result",result)
    data.result = result
  })
}
function deleteDemo(){
  axios.delete("http://httpbin.org/delete")
  .then(result => {
    console.log("delete result",result)
    data.result = result
  })
}
function allDemo(){
  axios.all([axios.delete("http://httpbin.org/delete"),axios.get("http://httpbin.org/get")])
  .then(results => {
    console.log("all result",results)
    data.result = results
  })
}

</script>