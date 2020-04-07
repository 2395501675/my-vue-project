// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

export function createApp(context) {
  const router = createRouter();
  const store = createStore()
  const app = new Vue({
    store,
    router,
    context,
    render:h=>h(App)
  })
  return {app, router, store}
}
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// })


