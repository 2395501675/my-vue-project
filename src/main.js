import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {create} from '@/utils/create'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
