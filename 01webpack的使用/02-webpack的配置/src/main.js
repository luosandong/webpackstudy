//CommonJS的模块导入
const {
    add,
    mul
} = require('./js/mathUtls.js') //同级目录下的文件前面一定要加./ 或者打包失败  require('mathUtls.js')非法

console.log(add(20, 30));
console.log(mul(20, 30));

// ES6的模块导入
import * as info from './js/info.js'
console.log(info.name)
console.log(info.age)

console.log('webpack')