<template>
  <div class="ui-kit">
    <div class="ui-kit__items">
      <div class="ui-kit__item">
        <h3>Button</h3>
        <Button>
          Button
        </Button>
      </div>
      <div class="ui-kit__item">
        <h3>Input</h3>
        <Input />
      </div>
      <div class="ui-kit__item">
        <h3>Text Field</h3>
        <TextField :validation="['email']" label="Email"/>
      </div>
      <div class="ui-kit__item">
        <h3>Dropdown</h3>
        <Dropdown />
      </div>

      <div class="ui-kit__item">
        <h3>Checkbox</h3>
        <Checkbox v-model="valueCheckbox"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Controls/Button'
import Input from '../components/Controls/TextInput'
import TextField from '../components/blocks/TextField'
import Dropdown from '../components/blocks/Dropdown'
import Checkbox from '../components/Controls/Checkbox'
export default {
  name: 'UIKit',
  components: { Checkbox, Dropdown, TextField, Input, Button },
  data () {
    return {
      valueCheckbox: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-kit {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    &__items {
      display: grid;
      gap: 20px;
      grid-template-columns: max-content 360px 360px 360px;
    }
    &__item {
      display: grid;
      grid-template-rows: repeat(2, max-content);
      gap: 20px;
    }
  }
</style>
