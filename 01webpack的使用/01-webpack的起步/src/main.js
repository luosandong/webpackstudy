//CommonJS的模块导入
const {
    add,
    mul
} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// ES6的模块导入
import * as info from './js/info.js'
console.log(info.name)
console.log(info.age)