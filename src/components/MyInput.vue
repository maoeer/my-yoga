<script setup lang="ts">
defineProps({
  moduleValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: '',
    description: '标签'
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'password', 'email'].includes(value),
    description: '输入框类型'
  },
  errorMessage: {
    type: String,
    default: '错误输入',
    description: '错误提示'
  },
  minLength: {
    type: Number,
    default: 8,
    description: '最小长度'
  },
  maxLength: {
    type: Number,
    default: 20,
    description: '最大长度'
  },
  placeholder: {
    type: String,
    default: '',
    descriptioon: '占位文本'
  }
}) 
</script>

<template>
  <div class="box-input">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder" :maxlength="maxLength" :minlength="minLength">
    <small>{{ errorMessage }}</small>
  </div>
</template>

<style scoped lang="scss">
.box-input {
  margin: 0.25rem 0;

  label {
    display: block;
    color: $color-gray;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    margin: 0.25rem 0;
    border: 1px solid $color-gray-light;
    background-color: $color-black;
    color: $color-white;
    outline: none;
  }

  small {
    display: block;
    font-size: 0.75rem;
    color: $color-red;
  }
}
</style>
