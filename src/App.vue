<template>
  <div id="app">
    <input type="text" value="sdfsf">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- <KForm></KForm> -->
    <hr>
    elementui表单
  <!-- <elementForm></elementForm> -->
  </div>
</template>

<script>
var myMixin = {
  created: function() {
    this.hello()
  },
  data: function() {
    return {
      message: 'hello world!'
    }
  },
  methods:{
    hello: function() {
      console.log('hello form mixin!')
    }
  }
}
// import HelloWorld from '@/components/HelloWorld.vue'
// import message from "@/components/message.vue";
// import KForm from "@/components/form/index.vue";
// import elementForm from "@/components/elementForm.vue";
export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  provide:function(){
    return {
      post: this.post
    }
  },
  mounted () {
    this.$bus.post = {name: 'lnn', gzh: 'xiaohuamao'}
  },
  mixins: [myMixin],
  components: {
    // elementForm,
    // HelloWorld,
    // message,
    // KForm
  },
  data() {
    return {
      msg: "hi lnn",
      post: {
        id: "aa",
        postName: "P4"
      },
      title: '我没改'
    };
  },
  methods: {
    addMsg(value) {
      console.log(value);
    },
    onFocus(){
      console.log(11111)
    },
    onClick(){
      this.$bus.$emit("aMsg", '来自app页面的消息')
      this.post.id = 'cc'
    }
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 38, 255);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
