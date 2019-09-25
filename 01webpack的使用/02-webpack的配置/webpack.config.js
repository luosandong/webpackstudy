const path = require('path'); //引用 NodeJS的path模块

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname  是nodejs的 一个对象，表示当前所在项目的目录
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    }
}