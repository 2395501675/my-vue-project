import {crateAPP} from './main'

const {app, router, store} = createApp();
if (window.__INTIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
router.onReady(() => {
    app.$mount('#app');
}, reject)
