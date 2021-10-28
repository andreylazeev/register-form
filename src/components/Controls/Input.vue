<template>
  <input type="text" @input="handleInput" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
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

    &::placeholder {
      color: #7C9CBF;
    }

    &:focus {
      border: 2px solid #0880AE;
    }
  }
</style>
