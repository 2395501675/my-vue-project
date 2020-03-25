<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>v-bind=""$attrs"

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default:'' 
            },
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                console.log(e.target.value)
                // 实时校验
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>