const path = require('path')
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/' //所有url的东西前面都会加这个名称
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader" //依赖这个loader 通过解析main.js配置来创建 样式节点
                    }, {
                        loader: "css-loader" //通过这个load将前面创建的样式打包到COMMONJS
                    },
                    {
                        loader: "less-loader" //通过这个Loader 编译Less文件，编译成css
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png|jpeg|bmp)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192, //当图片小于limit值时候直接把图片打包成dataURL base64格式
                        name: "img/[name].[hash:8].[ext]" //为文件名命名 将会输出到dist的img文件下，[]里是变量
                    }

                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
}