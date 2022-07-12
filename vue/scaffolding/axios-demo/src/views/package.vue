<template>
<button @click="postDemo">封装请求</button>
<p>
  {{data.result}}
</p>

</template>

<script setup>
import { request } from '@/utils/network/HttpUtil';
import { reactive } from 'vue' 

const data = reactive({
  result:""
})

function postDemo(){
 request({
    url:"/post",
    method: "post",
    params:{
      type:1,
      name:"haha"
    },
    data:{
      page:10,
      pageSize:30
    }
  })
  .then(result => {
    console.log("get result",result)
    data.result = JSON.stringify(result.data.args) + JSON.stringify(result.data.json)
  })
}


</script>