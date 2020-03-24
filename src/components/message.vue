<template>
  <div aria-placeholder="lnn" placeholder="请输入">
    <input v-bind="$attrs" />
    title: {{title}}
    post: {{post}}
    id: {{id}}
    postName:{{postName}}
    <button @click="onClick()">提交</button>
    <hr />
  </div>
</template>

<script>
export default {
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
  mounted() {},
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