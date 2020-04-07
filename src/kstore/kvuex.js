// 实现一个插件：声明Store类，挂载$store
// 创建响应式的state,保存mutations,actions和getters
// 实现commit根据用户传入type执行对应mutation
// 实现dispatch方法，根据用户传入type执行对应action,同时传递上下文
// 实现getters,按照getters定义对state做派生
let Vue;
class Store {
    constructor(options = {} ) {
        this._vm = new Vue({
            data: {
                state: options.state
            },
            computed: getComputed()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        // getters
        this._getters = options.getters
        this.getters = {}
       
        // 绑定commit方法，dispatch方法l;
        const store = this;
        const {commit, dispatch} = store;
        this.commit = commit.bind(this)
        this.dispacth = dispatch.bind(this)
        function getComputed () {
            let computedObj = {}
            Object.keys(options.getters).forEach((key) => {
                computedObj[key] = () => {return options.getters[key](store.state)}
            });
            return computedObj
        }
        // 这个赋值有问题
        Object.keys(this._getters).forEach((key) => {
            this.getters[key] = this._vm[key]
        });
        console.log(this.getters)
    }
    get state(){
        return this._vm.state;
    }
    set state(v) {
        console.error('走开，这没有你的权限');
    }


    // commit方法实现
    commit(type, payload) {
        const entry = this._mutations[type];
        entry(this.state, payload)
    }
    // 实现dispatch方法
    dispatch(type, payload) {
        const entry = this._actions[type];
        entry(this, payload)
    }
}
function install(_vue) {
    Vue = _vue;
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}
export default{Store, install}