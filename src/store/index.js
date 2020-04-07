import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export function createStore() {
    return  new Vuex.Store({
        state: {
            count: 1
        },
        mutations: {
            add(state) {
                state.count++;
            }
        },
        getters: {
            doubleCount: state => {
                return state.count * 2;
            }
        },
        actions:{
            asyncAdd({commit}) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        commit('add')
                        resolve()
                    }, 1000);
                })
                
            }
        },
        modules: {}
    })
}
