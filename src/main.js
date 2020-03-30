// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
import store from './kstore'
import {create} from '@/utils/create'
import kmessage from '@/utils/message'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(kmessage)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
