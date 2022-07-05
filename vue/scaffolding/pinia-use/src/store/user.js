import { defineStore } from "pinia";

//定义store，第一个参数是store的唯一名称，第二个参数放store的选项
export const userStore = defineStore('user',{
  state: () =>{
    return {
      //此处状态的值无需 ref，因为pinia会自动将值包装成 ref
      surname: 'wang',
      name: 'ersut',
      info:{
        age: 0
      },
      hobbys:["自行车","篮球","爬山"],
      newHobbyNum: 0
    }
  },
  getters:{
    fullName: (state) => {
      return state.surname + state.name
    },
    //getter接收参数
    showHobbys: (state) => {
      return (num) => state.hobbys.slice(0,num).join(",")
    }
  }
})