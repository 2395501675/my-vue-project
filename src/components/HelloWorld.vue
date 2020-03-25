<template>
<div>
  1111111{{post}}
    <input type="text" :value="value" v-on="inputListeners"/>
    <hr>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  inject: ['post'],
  props: {
    value: String
  },
  mounted () {
    console.log('helloworld.vue', this.$bus.post);
    
  },
  model: {
    value: "value",
    event: "input"
  },
  computed: {
    inputListeners() {
      let vm = this
      return Object.assign({},
      this.$listeners,{
        input: function(event) {
          vm.$emit('input', event.target.value);
          vm.post.id = 'bb'
        }
      }) 
    }
  },
  methods: {
    onInput(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
