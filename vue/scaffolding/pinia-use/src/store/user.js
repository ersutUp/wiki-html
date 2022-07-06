import { defineStore } from "pinia";

//定义store，第一个参数是store的唯一名称，第二个参数放store的选项
export const userStore = defineStore('user',{
  //定义状态的位置
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
  //对状态的加工，但不修改值，不支持异步
  getters:{
    fullName: (state) => {
      return state.surname + state.name
    },
    //getter接收参数
    showHobbys: (state) => {
      return (num) => state.hobbys.slice(0,num).join(",")
    }
  },
  //修改状态或者状态的逻辑处理，支持异步
  actions:{
    login(surname,name){
      if(surname === "" && name == ""){
        throw new Error("empty value")
      }
      if(surname === this.surname && name === this.name){
        return true;
      }
      return false;
    }
  }
})