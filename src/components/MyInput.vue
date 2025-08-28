<script setup lang="ts">
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

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', valid: boolean): void
}>()

const handleBlur = (): void => {
  if (!props.validator) return
  emit('blur', props.validator ? props.validator(props.modelValue) : true)
}
</script>

<template>
  <div class="box-input">
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue" :type="type" :placeholder="placeholder" :maxlength="maxLength" :minlength="minLength"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @blur="handleBlur">
    <small v-if="errorMessage">{{ errorMessage }}</small>
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
