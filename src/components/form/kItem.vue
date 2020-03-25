<template>
    <div>
        <!-- label -->
        <label v-if="label" for="" >{{label}}:</label>
        <!-- input -->
        <slot></slot>
        <!-- error -->
        <p v-if="error">{{error}}</p>
    </div>
</template>

<script>
import Schema from "async-validator";
    export default {
        inject: ["form"],
        props: {
            label: {
                type: String,
                default:''
            },
            prop: String
        },
        mounted () {
            this.$on('validate', () => {
                this.validate()
            });
        },
        data() {
            return {
                error: ''
            }
        },
        methods: {
            validate() {
                // 获取校验规则和值
                const rules = this.form.rules[this.prop];
                const value = this.form.formData[this.prop];
                // 获取校验器，schema参数
                const validator = new Schema({[this.prop]: rules});
                // 执行校验
                return validator.validate({[this.prop]: value}, errors => {
                    if (errors) {
                        this.error = errors[0].message;
                    }
                    else {
                        this.error = ''
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>