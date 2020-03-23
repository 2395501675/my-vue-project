<template>
  <div id="app">
    <hello-world v-model="msg" @change-msg="addMsg"></hello-world>
    <message :name.sync="msg">
      <template v-slot:title>警告框{{msg}}</template>
    </message>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import message from '@/components/message.vue'
export default {
  components: {
    HelloWorld,
    message
  },
  data() {
    return {
      msg: 'hi lnn'
    }
  },
  methods: {
    addMsg(value) {
      console.log(value)
    }
  },
}
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
input{
 color:red;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
