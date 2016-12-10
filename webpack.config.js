// webpack.config.js
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(__dirname);
console.log(path.resolve('./component/content.js'));
module.exports = {
    entry: {
        app:'./main.js',
        vendor: ["jquery"],
    },
    output: {
        filename: 'bundle.js'   //  name 是 entry 的key值
    },
    module: {
        loaders:[
            // 加载babel-loader ，处理js或者jsx结尾的文件
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            //注意，你需要两个加载器来转换css文件。
            //第一个是CSS-loader读取css文件, 另一个是Style-loader，
            //将style标签插入到html页面。不同加载器由感叹号链接。
            //{ test: /\.css$/, loader: 'style-loader!css-loader' },

            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
    resolve: {
        //根目录配置
        root: [
            path.resolve('/Users/heidsoft/work/test-webpack')
        ]
    },
    plugins: [
        new CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        //将样式打成独立文件
        new ExtractTextPlugin("styles.css"),
    ]
};