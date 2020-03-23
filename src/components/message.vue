<template>
  <div>
    <div>欢迎：{{name}}</div>
    <slot name="title"></slot>
    <button @click="$emit('update:name', 'lnn')">提交</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

<style lang="scss" scoped>
</style>