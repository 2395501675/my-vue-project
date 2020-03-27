// import Vue from "vue";
import Link from "./krouter-link"
import View from "./krouter-view"

/*
触发路由变化，通过监听路由变化，改变显示
调用过程：
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router

 <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
1. 监听
2. 通过routers把路由和显示联系起来；

*/
// 实现一个插件，创建vueRouter类和install方法
let Vue;
class VueRouter {
    constructor(options) {
        this.$options = options
        // 设置响应式变量current
        const initial = window.location.hash.slice(1) || '/';
        Vue.util.defineReactive(this, 'current', initial)
        // 监听路由变化，改变current
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
        // 对路由数组做预处理，转换为map
        this.routeMap = {}
        this.$options.routes.forEach(route => {
            this.routeMap[route.path] = route
        })
    }
        // current改变视图
    onHashChange () {
        this.current = window.location.hash.slice(1)
    }
}
// 实现install方法
VueRouter.install = function (_vue) {
    Vue = _vue;
    // 这里混入是因为use方法在前执行，不是当前的vue实例？所以要重新来过
    Vue.mixin({
        beforeCreate() {
            // 这个(this.$options.router，this是谁，说的是vue实例
            // 实现use方法
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        }
    })
    Vue.component('router-link', Link);
    Vue.component('router-view', View);
}
export default VueRouter;