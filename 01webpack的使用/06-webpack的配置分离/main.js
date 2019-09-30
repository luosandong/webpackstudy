//ES6方式的模块导入,文件后缀不能少
import * as info from "./src/js/info.js"
//CommonJs方式的模块导入
const {
    sum,
    mul
} = require("./src/js/common.js")


import Vue from "vue"
import App from "./src/vue/app"

const app = new Vue({
    el: "#app",
    template: '<App/>',
    components: {
        App
    }
});

require('./src/css/style.css');
require('./src/css/style.less');

document.writeln(info.info.name);
document.writeln(info.info.message);
document.writeln(sum(30, 50));
document.writeln(mul(20, 50));