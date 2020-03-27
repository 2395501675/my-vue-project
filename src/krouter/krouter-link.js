// 实现路由跳转功能<a href="#/sdfsf/">{{}}</A>
export default{
    props:{
        to: {
            type: String,
            require:true
        }
    },
    render(h) {
        return <a href={'#'+this.to}>{this.$slots.default}</a>;
    }
    // template: "<a href={{'#/'+ to}}><slot></slot></a>"
}