const express = require('express');
const app = express()
const Vue = require('vue');
const Router = require('vue-router')
Vue.use(Router)

// 2. 获取渲染器实例
const {
    createRenderer
} = require('vue-server-renderer');

app.get('*', (req, res) => {
    // 每次创建一个路由实例
    const router = new Router({
        mode: 'history',
        routes: [
            {path: '/', component:{template: '<div>index page</div>'}},
            {path: '/detail', component:{template: '<div>detail page</div>'}}
        ]
    })
    // 1. 创建vue实例
    const vm = new Vue({
        data:{msg: '你好，vue!'},
        router,
        template: `
        <div>
            {{msg}}
            <router-link to="/">to index</router-link>
            <router-link to="/detail">to detail</router-link>
            <router-view></router-view>
        </div>
        `
    })
    const renderer = createRenderer();
    // 3. 用渲染器返回html字符串
    router.push(req.url)
    renderer.renderToString(vm).then(html => {
        console.log('html:',html)
        res.send(html)
    }).catch(err => {
        res.status(500).send('渲染出错')
    })
})

app.listen(3000, () => {
    console.log('3000端口开启了')
})