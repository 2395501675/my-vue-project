import Vue from 'vue'
// 创建一个create函数，动态生成组件实例，并且挂在到body上
export function create(Component, props) {
    // 生成虚拟dom
    const vm = new Vue({
        render(h) {
            return h(Component, {props})
        }
    })
    // 生成真实dom
    vm.$mount();
    document.body.appendChild(vm.$el)
    // 组件实例返回
    const comp = vm.$children[0];

    // 销毁
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        comp.$destroy()
    }
    return comp
}
