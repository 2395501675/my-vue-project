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
Vue.prototype.$bus = new Bus()
this.$bus.$on('foo', function(){
  console.log(1)
})
this.$bus.$emit('foo')
Vue.prototype.$create = create
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
class Bus{
  constructor() {
    this.callbacks = {}
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name]|| []
    this.callbacks[name].push(fn)
    // this.callbacks.foo = [fn,]
  }
  $emit(name,args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => {
        return cb(args)
      });
    }
  }
}

