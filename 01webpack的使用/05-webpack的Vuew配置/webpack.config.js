const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要VueLoaderPlugin的.
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: 'dist/' //所有url相关的模块 比如img的东西前面都会加这个名称
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
            },
            { //配置vue-loader
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader"
                }]
            }
        ]
    },
    resolve: { //当遇见vue后缀的时候将采用node_modules下面的vue/dist模块来处理
        alias: {
            'vue$': "vue/dist/vue.esm.js"
        },
        extensions: ['.js', '.vue', '.css'] //配置了扩展名后，导入模块时候可以省略后缀
    },
    plugins: [
        new VueLoaderPlugin(), //Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要VueLoaderPlugin的.
        new webpack.BannerPlugin('版本所有@2019 by lsd'),
        new HtmlWebpackPlugin({
            template: 'main.html' //按这个模版生成html发布到dist
        }),
        new UglifyJsWebpackPlugin()
    ],
    devServer:{
        contentBase:"./dist",
        inline:true
    }
}