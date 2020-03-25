<template>
  <div>
    <k-form :formData="formData" :rules="rules" ref="loginForm">
        <!-- 用户名 -->
      <k-item label="用户名" prop="username">
        <k-input v-model="formData.username" placeholder="用户名"></k-input>
      </k-item>
      <k-item label="密码" prop="password">
        <k-input v-model="formData.password" type="password" placeholder="密码"></k-input>
      </k-item>
      <k-item>
        <button @click="onClick">提交</button>
      </k-item>
      
      <!-- 密码 -->
    </k-form>
  </div>
</template>

<script>
import kForm from "@/components/form/kForm.vue";
import kItem from "@/components/form/kItem.vue";
import kInput from "@/components/form/kInput.vue";
export default {
    components: {
        kForm,
        kItem,
        kInput
    },
    data() {
        return {
            formData: {
                username: 'lnn',
                password: '123456'
            },
            rules: {
                username: [{required: true, message: '请输入用户名'}],
                password: [{required: true, message: '请输入密码'}],
            }
        }
    },
    methods: {
        onClick() {
            this.$refs.loginForm.validate(isValid => {
                if (isValid) {
                    console.log('submit login!')
                } else {
                    alert("校验失败")
                }
            })
        }
    },
};
</script>

<style scoped>
</style>