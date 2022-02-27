let {helloWorld} = require("./commonjs-module")

console.log(helloWorld);

import { _webpack } from "./es6-module";

console.log(_webpack + " " + helloWorld);