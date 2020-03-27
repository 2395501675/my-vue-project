<template>
  <div>
    <k-form :formData="formData" :rules="rules" ref="loginForm">
        <!-- 用户名 -->
      <k-item label="用户名" prop="name">
        <k-input v-model="formData.name" placeholder="用户名"></k-input>
      </k-item>
      <!-- 密码 -->
      <k-item label="密码" prop="password">
        <k-input v-model="formData.password" type="password" placeholder="密码"></k-input>
      </k-item>
      <k-item>
        <button @click="onClick">提交</button>
      </k-item>
      
      
    </k-form>
  </div>
</template>

<script>
import kForm from "@/components/form/kForm.vue";
import kItem from "@/components/form/kItem.vue";
import kInput from "@/components/form/kInput.vue";
import notice from "@/components/notice.vue";
export default {
    components: {
        kForm,
        kItem,
        kInput
    },
    data() {
        return {
            formData: {
                name: '',
                password: ''
            },
            rules: {
                name: [{required: true, message: '请输入用户名'}],
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
                     this.$kmessage({
                       title: 'message提醒',
                       message: '登录失败',
                       duration: 5000
                   })
                }
                   this.$create(notice, {
                       title: 'create提醒',
                       message: '登录失败',
                       duration: 2000
                   }).show()
                    this.$message({message: '我是真的e', duration: 50000})
                    this.$message({message: '我是真的1122', duration: 50000})
                    this.$message({message: '我是真的11223', duration: 50000})
            })
        }
    },
};
</script>

<style>
 .message1{
     width: 100%;
     height: 150px;
     text-align: center;
     background:#eee;
     position: absolute;
     top:150px;
     border:2px solid green;
 }
</style>