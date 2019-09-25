function add(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

//CommonJS方式的模块导出
module.exports = {
    add,
    mul
}