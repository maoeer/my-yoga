<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  type?: 'text' | 'password' | 'email'
  errorMessage?: string
  minLength?: number
  maxLength?: number
  placeholder?: string
  validator?: (value: string) => boolean
}>(), {
  modelValue: '',
  type: 'text',
  minLength: 8,
  maxLength: 20,
  placeholder: ''
})

const isOnceBlur = ref<boolean>(false) // 是否已经触发第一次blur
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', valid: boolean): void
}>()

// 校验结果
const isValid = computed(() => {
  if (!props.validator) return true
  return props.validator(props.modelValue)
})
// 是否展示错误消息
const shouldShowError = computed(() => {
  return isOnceBlur.value && !isValid.value
})

const handleInput = (e: Event): void => {
  const newValue = (e.target as HTMLInputElement).value
  emit('update:modelValue', newValue)
}

const handleBlur = (): void => {
  if (!isOnceBlur.value) isOnceBlur.value = true
  if (!props.validator) return

  emit('blur', isValid.value)
}
</script>

<template>
  <div class="box-input">
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue" :type="type" :placeholder="placeholder" :maxlength="maxLength" :minlength="minLength"
      @input="handleInput" @blur="handleBlur">
    <small v-if="errorMessage && shouldShowError">{{ errorMessage }}</small>
  </div>
</template>

<style scoped lang="scss">
.box-input {
  margin: 0.25rem 0;

  label,
  small {
    display: block;
  }

  label {
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
    font-size: 0.75rem;
    color: $color-red;
  }
}
</style>
