<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    border: 0;
    outline: 0;
    background: #0880AE;
    box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;
    padding: 18px 65px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: box-shadow .2s ease-out;

    &:hover {
      box-shadow: 0 12px 24px rgba(44, 39, 56, 0.08), 0 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
      border: 2px solid rgba(44, 39, 56, 0.86);
      padding: 16px 63px;
    }

    &:disabled {
      background: #DBE2EA;
      color: #2C2738;
      &:hover {
        box-shadow: 0 2px 4px rgba(44, 39, 56, 0.08), 0 4px 8px rgba(44, 39, 56, 0.08);
      }
    }
  }
</style>
