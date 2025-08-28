<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
    enum: ['text', 'password', 'email'],
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
    default: '请输入',
    descriptioon: '占位文本'
  }
}) 
</script>

<template>
  <div>
    <input :type="type" :placeholder="placeholder" :maxlength="maxLength" :minlength="minLength">
    <small>{{ props.errorMessage }}</small>
  </div>

</template>

<style scoped lang="scss"></style>
