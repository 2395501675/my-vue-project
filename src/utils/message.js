import Vue from 'vue/dist/vue.esm.js'
import Notice from '@/components/notice.vue'
function kmessage(Component, props) {
    // 老师的
    const Ctor = Vue.extend(Component)
    const comp = new Ctor({propsData: props})
    comp.$mount();
    document.body.appendChild(comp.$el);
    comp.remove = () =>{
        document.body.removeChild(comp.$el);
        comp.$destroy()
    }
    // 自己研究的
//    var vm = Vue.extend(
//        {
//            template: '<div class="message1"><h5>{{title}}</h5><hr/><div>{{message}}</div></div>',
//            data: function () {return {
//                title: props.title || '消息提醒',
//                message: props.title || '',
//                duration: props.duration || 1000
//            }},
//            mounted() {
//             setTimeout(() => {
//                 this.remove()
//             }, this.duration);
//            }
           
//        }
//    )
//    var vm1 = new vm()
//     vm1.$mount()
//     document.body.appendChild(vm1.$el)
//     console.log('message', vm1)
//     vm1.remove = () => {
//         document.body.removeChild(vm1.$el);
//         vm1.$destroy()
//     }
}
export default {
    install(Vue) {
        Vue.prototype.$kmessage = function(options) {
            return kmessage(Notice, options)
        }
    }
}