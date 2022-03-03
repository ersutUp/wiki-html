let {helloWorld} = require("./js/commonjs-module")

console.log(helloWorld);

import { _webpack } from "./js/es6-module";

console.log(_webpack + " " + helloWorld);


//加载css
import "./css/base.css"