import Vue from 'vue';
import Vuex from './kvuex.js';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.count * 2;
        }
    },
    actions:{
        asyncAdd(store) {
            setTimeout(() => {
                store.commit('add')
            }, 1000);
        }
    },
    modules: {}
})