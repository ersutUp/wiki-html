import axios from "axios"

export function request(config){
  return axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000
  })(config)
}