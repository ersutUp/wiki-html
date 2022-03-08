let {helloWorld} = require("./js/commonjs-module")

console.log(helloWorld);

import { _webpack } from "./js/es6-module";

console.log(_webpack + " " + helloWorld);

import {createApp} from 'vue'
import hea from './vue/Header.vue'

createApp({
  template:`<hea/>`,
  components:{
    hea
  }
}).mount("#app")