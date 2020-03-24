<template>
  <div id="app">
    <hello-world v-on:focus.native="onFocus" v-model="msg" @change-msg="addMsg"></hello-world>
    <message placeholder="请输入用户名" type="number" :post="post" inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </message>
    <input type="text" v-focus>
    {{post}}
    {{title}}{{message}}
    <button @click="onClick()">提交</button>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
import HelloWorld from '@/components/HelloWorld.vue'
import message from "@/components/message.vue";
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
  mixins: [myMixin],
  components: {
    HelloWorld,
    message
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
      this.post.id = 'cc'
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
input {
  color: red;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
