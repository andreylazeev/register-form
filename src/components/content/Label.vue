<template>
  <p class="label"><slot /></p>
</template>

<script>
export default {
  name: 'Label'
}
</script>

<style lang="scss" scoped>
.label {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #756F86;
}
</style>
