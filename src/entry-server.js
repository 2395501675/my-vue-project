import {
    createApp
} from './main'
export default context => {
    return new Promise((resolve, reject) => {
        const {
            app,
            router,
            store
        } = createApp(context);
        // 跳转到首屏地址
        router.push(context.url)
        // 路由就绪，返回结果
        router.onReady(() => {
            // 获取匹配的路由组件数组
            const matchedComponents = router.getMatchedComponents();
            // 没有匹配抛出异常
            if (!matchedComponents.length) {
                return reject({
                    code: 404
                })
            }
            // 对所有匹配的路由组件调用可能存在的asyncData()
            Promise.all(
                matchedComponents.map(Component => {
                    if (Component.asyncData) {
                        return Component.asyncData({
                            store,
                            route: router.currentRoute
                        })
                    }
                })
            ).then(() => {
                context.state = store.state;
                resolve(app);
            })
        }, reject)
    })
}