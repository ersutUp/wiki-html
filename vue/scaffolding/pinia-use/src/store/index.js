import {createPinia} from 'pinia'

function persist(context){
  const {options,store} = context;
  //获取persist选项
  if(options.hasOwnProperty("persist") && options.persist instanceof Object){
    const persistProp = options.persist
    //获取persist选项的开关
    if (persistProp.hasOwnProperty("enabled") && typeof(persistProp.enabled) == 'boolean') {
      const enabled = persistProp.enabled;
      if (enabled) {
        const persistPrefix = "pinia-persist-"
        const storeId = store.$id
        //添加订阅
        store.$subscribe((mutation,state) => {
          const raw = JSON.stringify(state)
          //持久化数据
          localStorage.setItem(persistPrefix+storeId , raw)
        })
        const persistValue = localStorage.getItem(persistPrefix+storeId)
        const persistJson = persistValue ? JSON.parse(persistValue) : {}
        if(persistJson != {}){
          for (let key in store.$state) {
            if(persistJson.hasOwnProperty(key)){
              store.$state[key] = persistJson[key]
            }
          }
        }
      }
    }
  }
  debugger
}

//创建pinia
const pinia = createPinia()

pinia.use(persist)

export default pinia