# webpackstudy

## 安装 webpack

1. 命令行安装
   npm install webpack@3.6.0.0 -g 全局安装 webpack
2. 局部安装
   cd 到项目根目录
   npm install webpack@3.6.0.0 --save-dev 不安装的话可以用全局的
3. 写点 CommonJS 的代码
4. 开始打包
   webpack ./src/main.js ./dist/bundle.js
   将 main.js 打包到 dist 目录下的 bundle.js

## webpack 配置

1. 在项目根目录初始化 node 环境
   npm init 配置项目信息
2. 配置 webpackconfig.js
   const path = require('path'); //引用 NodeJS 的 path 模块

module.exports = {
entry: './src/js/main.js',
output: {
path: path.resolve(**dirname, 'dist'), //**dirname 是 nodejs 的 一个对象，表示当前所在项目的目录
filename: 'bundle.js'
}
}

3. npm run 命令的使用
   可以将 webpack 的命令 配置在 npm 的包管理文件中"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "build": "webpack"
   },
   取名叫 build
   然后直接 num run build 也会运行 webpack 的打包命令

4. 本地安装webpack
webpack@3.6.0 --save-dev
