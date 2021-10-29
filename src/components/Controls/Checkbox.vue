<template>
  <div class="checkbox">
    <input :id="name" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
    <label :for="name"><slot /></label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    update (e) {
      this.$emit('update:modelValue', e.target.checked)
      console.log(this.modelValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    font: inherit;
    color: currentColor;
    width: 28px;
    height: 28px;
    border: 1px solid #DBE2EA;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    display: grid;
    cursor: pointer;
    place-content: center;
    border-radius: 4px;
  }

  input[type="checkbox"]:checked {
    border: 0;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 28px;
    height: 28px;
    opacity: 0;
    transition: .1s all ease-out;
    border: 2px solid #0880AE;
    background-size: 15px;
    background: url("../../assets/icons/check.svg") no-repeat center;
    border-radius: 4px;
  }

  input[type="checkbox"]:checked::before {
    opacity: 1;
  }
</style>
