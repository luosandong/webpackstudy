# webpackstudy

## 安装 webpack

1. 命令行安装
   npm install webpack@3.6.0.0 -g 全局安装 webpack
2. 局部安装
   cd 到项目根目录
   npm install webpack@3.6.0 --save-dev 不安装的话可以用全局的
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

4. 本地安装 webpack
   webpack@3.6.0 --save-dev
5. css-loader style.loader less-loader less
6. url-loader file-loader 处理文件打包
7. npm install babel-loader@7 @babel/core babel-preset-es2015 --save-dev
   npm install babel-core --save-dev 使用 bable 将 ES6 语法转成 ES5 兼容大部分浏览器
8. npm install --save vue 全局安装 vue 模块
9. npm intall --save-dev 安装 vue-loader
   注意 vue-loader 15.x 以上的版本需要配置
   plugins: [
   new VueLoaderPlugin() //Vue-loader 在 15.*之后的版本都是 vue-loader 的使用都是需要 VueLoaderPlugin 的.
   ]
   才能正常使用
10. npm install --save-dev vue-template-compiler 安装 vue 模版编译器

11. 打包 html 的 plugin
    npm install html-webpack-plugin --save-dev 用于生成 index.html 发布到 dist
12. npm insatll uglifyjs-webpack-plugin --save-dev  如果不能用就先降到"^1.0.0"版本
13.  npm install --save--dev webpack-dev-server@2.9.3 安装server
14. 配置文件分离后合并 不同环境用不同的配置文件编译
npm install webpack-merge --save-dev
