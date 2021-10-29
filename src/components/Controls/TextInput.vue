<template>
  <input type="text" v-model="value" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    padding: 15px;
    background: #FFFFFF;
    outline: 0;
    border: 1px solid #DBE2EA;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    max-height: 50px;

    &::placeholder {
      color: #7C9CBF;
    }

    &:focus {
      border: 2px solid #0880AE;
      padding: 14px;
    }
  }
</style>
