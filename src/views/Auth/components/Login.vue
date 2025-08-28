<script setup lang="ts">
import { reactive, toValue } from 'vue'
import { validateEmail, validateLength } from '@/utils/validate'
import MyInput from '@/components/MyInput.vue'

interface IFormData {
  email: string,
  password: string
}

interface IValidState {
  email: boolean
  password: boolean
}

// 表单数据
const formData = reactive<IFormData>({
  email: '',
  password: ''
})

// 校验状态
const validState = reactive<IValidState>({
  email: false,
  password: false
})
// 校验方法
const validators = {
  email: (value: string) => validateEmail(value),
  password: (value: string) => validateLength(8, 20, value)
}

// 表单提交
const formSubmit = () => {
  console.log('表单提交')

  // todo: 提交表单
}
</script>

<template>
  <div class="box-login">
    <p class="title">登录</p>

    <form @submit.prevent="formSubmit">
      <my-input v-model="formData.email" label="邮箱" type="email" error-message="请输入正确的邮箱" placeholder="请输入邮箱"
        :validator="validators.email" @blur="value => validState.email = value" />

      <my-input v-model="formData.password" label="密码" type="password" error-message="密码长度为8-20" placeholder="请输入密码"
        :validator="validators.password" @blur="value => validState.password = value" />

      <input type="submit" class="submit-button" :disabled="!(validState.email && validState.password)" />
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
    cursor: pointer;

    &:disabled {
      // 降低背景色饱和度和亮度，视觉上更"灰"
      background-color: lighten(desaturate($color-purple, 30%), 15%);
      // 文字颜色变浅，增强不可用感
      color: rgba($color-black, 0.5);
      // 禁用鼠标指针，明确不可点击
      cursor: not-allowed;
      // 可选：添加半透明覆盖层，增强不可用视觉提示
      opacity: 0.85;

      // 可选：移除hover效果（如果有）
      &:hover {
        background-color: lighten(desaturate($color-purple, 30%), 15%);
      }
    }
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
