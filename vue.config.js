const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals");
const merge = require("lodash.merge");
// 根据传入变量环境决定入口文件和相应配置项
console.log(process.env.WEBPACK_TARGET)
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const target = TARGET_NODE ? "server": "client";

module.exports = {
    css: {
        extract: false
    },
    outputDir: './dist/'+ target,
    configureWebpack:() => ({
        // 将 entry 指向应用程序的 server/client 文件
        entry: `./src/entry-${target}.js`,
        // 对 dundle renderer 提供 source map 支持
        devtool: 'source-map',
        // target设置为node使webpack以Node适用的方式处理动态导入，
        // 并且还会在编译vue组件时告知 `vue-loader`输出面向服务器代码。
        target: TARGET_NODE?"node" : "web",
        // 是否模拟node全局变量
        node: TARGET_NODE? undefined: false,
        output: {
            // 此处适用node风格导出模块
            libraryTarget: TARGET_NODE?"commonjs2":undefined
        },
        externals: TARGET_NODE
        ?
        nodeExternals({
            whitelist: [/\.css$/]
        })
        : undefined,
        optimization:{
            splitChunks: undefined
        },
        plugins: [TARGET_NODE? new VueSSRServerPlugin(): new VueSSRClientPlugin()]
    }),
    chainWebpack: config => {
        if (TARGET_NODE) {
            config.optimization.delete('splitChunks')
        }
        config.module
        .rule("vue")
        .use("vue-loader")
        .tap(options=> {
            merge(options, {
                optimizeSSR: false
            });
        });
    }
}