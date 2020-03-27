<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
        form: this
    };
  },
  props: {
    formData: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
      validate(cb) {
        // 全局校验
        // 便利item，执行他们的validate方法
        const tasks = this.$children.filter(item => {
            return item.prop;
        })
        .map(item => item.validate())
        Promise.all(tasks).then(() => cb(true))
        .catch(() => cb(false))
      }
  },
};
</script>

<style lang="scss" scoped>
</style>