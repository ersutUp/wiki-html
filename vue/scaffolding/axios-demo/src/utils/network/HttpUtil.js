import axios from "axios"

export function request(config){
  const myAxios =  axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000
  })
  
  //请求拦截器
  myAxios.interceptors.request.use(
    //请求成功
    config => {
      console.info(config)
      return config
    },
    //请求失败
    err => {
      console.error(err)
      //抛出异常 外部的catch才能收到
      throw err
    }
  )
  //响应拦截器
  myAxios.interceptors.response.use(
    //响应成功
    res => {
      console.info(res)
      return res
    },
    //响应失败
    err => {
      console.error(err)
      //抛出异常 外部的catch才能收到
      throw err
    }
  )

  return myAxios(config)
}