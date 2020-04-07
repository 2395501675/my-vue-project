// 获取文件路径
const resolve = dir => require('path').resolve(__dirname, dir)
const express = require('express');
const app = express()
app.use(express.static(resolve('../dist/client'),{index:false}))
// 2. 获取渲染器实例
const {
    createBundleRenderer
} = require('vue-server-renderer');
const bundle = resolve("../dist/server/vue-ssr-server-bundle.json");
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template:require('fs').readFileSync(resolve("../../public/index.html"), "utf-8"),
    clientManifest:require(resolve("../../dist/client/vue-ssr-client-manifest.json"))
})
app.get('*', async(req, res) => {
    // 设置url和title参数
    const context = {
        title: 'ssr test',
        url:req.url
    }
    const html = await renderer.renderToString(context)
    res.send(html)
})

app.listen(3000, () => {
    console.log('3000端口开启了')
})