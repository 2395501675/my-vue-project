// 实现路由切换后显示组建<router-view> {{slot}}</router-view>
// export default{
//     template: '<div><slot></slot><div>'
// }
// 教程和我想得不一样，他是直接替换，我想的是插槽
// 2
// let component = null
// this.$router.$options.routes.forEach(route => {
//     if (route.path == this.$router.current){
//         component = route.component
//     }
// });
// export default{
//     component
// }
// 3.
export default{
    render(h) {
        let component = null;
        this.$router.$options.routes.forEach(route => {
            if (route.path == this.$router.current) {
                component = route.component
            }
        });
        // const route = this.$router.routeMap[this.$router.current]
        // if (route) {
        //     component = route.component;
        // }
        return h(component)
    }
}
