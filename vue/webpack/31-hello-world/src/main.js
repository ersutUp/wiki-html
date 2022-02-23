//commonJs导入
let {helloWorld} = require("./commonjs-module")

console.log(helloWorld);

// ES6导入
import { _webpack } from "./es6-module";

console.log(_webpack + " " + helloWorld);