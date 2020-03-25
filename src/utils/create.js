import Vue from 'vue'
// 创建一个create函数，动态生成组件实例，并且挂在到body上
export function create(Component, props) {
    console.log(props)
    // 生成虚拟dom
    const vm = new Vue({
        render(h) {
            return h(Component, {props})
        }
    })
    // 生成真实dom
    console.log('before',vm)
    vm.$mount();
    console.log('after',vm)
    document.body.appendChild(vm.$el)
    // 组件实例返回
    const comp = vm.$children[0];
    return comp
}