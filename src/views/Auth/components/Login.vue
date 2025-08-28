<script setup lang="ts">
import { ref } from 'vue'
import MyInput from '@/components/MyInput.vue'

// 输入框数据
const inputData = ref<String>('')
// 表单提交
const formSubmit = () => { }
</script>

<template>
  <div class="box-login">
    <p class="title">登录</p>

    <form @submit.prevent="formSubmit">
      <my-input v-model="inputData" label="邮箱" type="email" error-message="请输入正确的邮箱" placeholder="请输入邮箱" />

      <my-input v-model="inputData" label="密码" type="password" error-message="密码长度为6-20" placeholder="请输入密码" />

      <input type="submit" class="submit-button" />
    </form>

    <div class="bottom">
      <p class="register">没有账户? <a href="#">注册</a></p>

      <p><a href="#">忘记密码?</a></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-login {
  width: 350px;
  padding: 2rem;
  border-radius: 0.75rem;
  background-color: $color-black;

  .title {
    font-weight: 700;
    line-height: 2rem;
    font-size: 1.5rem;
    text-align: center;
    color: $color-white;
  }

  .submit-button {
    display: block;
    text-align: center;
    font-weight: 600;
    width: 100%;
    padding: 0.75rem;
    margin: 0.75rem 0;
    border-radius: 0.375rem;
    border: none;
    outline: none;
    background-color: $color-purple;
    color: $color-black;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 0.75rem;
    color: $color-gray;
  }

  a {
    color: $color-white;
  }
}
</style>
