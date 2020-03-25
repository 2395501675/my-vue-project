<template>
  <div aria-placeholder="lnn" placeholder="请输入">
    <input v-bind="$attrs" />
    title: {{title}}
    post: {{post}}
    id1: {{id}}
    postName:{{postName}}
    $bus:{{$bus.post}}
    <button @click="onClick()">msg提交</button>
    <hr />
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('message.vue', this.$bus.post);
    this.$bus.$on('aMsg', (msg) => {
      console.log(msg)
    })
  },
  props: {
    name: String,
    title: String,
    post: Object,
    id: String,
    postName: String
  },
  data() {
    return {
      user: {
        name: "lnn",
        age: "27"
      }
    };
  },
  methods: {
    onClick() {
      this.$emit("update:name", "lnn");
      this.post.postName = "IT系统部";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>