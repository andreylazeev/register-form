<template>
  <form class="form">
    <FormHeading />
    <div class="form__content">
      <TextField name="name" :validation="['name']" label="Имя" @onInput="setData"/>
      <TextField name="email" :validation="['email']" label="E-mail" @onInput="setData"/>
      <TextField name="phone" :validation="['phone']" label="Номер телефона" @onInput="setData"/>
      <Dropdown @onChange="setDropdown" label="Язык" :items="[{ name: 'Русский', value: 'russian' }, { name: 'Английский', value: 'english' }, { name: 'Китайский', value: 'chinese' }, {name: 'Испанский', value: 'spanish'}]"/>
    </div>
    <Checkbox class="form__checkbox" v-model="fields.agreement.valid" name="agreement">
      <p>Принимаю <a href="#">условия</a> использования</p>
    </Checkbox>
    <Button :disabled="!isValidForm">Зарегистрироваться</Button>
  </form>
</template>

<script>
import FormHeading from './content/FormHeading'
import TextField from './blocks/TextField'
import Checkbox from './Controls/Checkbox'
import Dropdown from './blocks/Dropdown'
import Button from './Controls/Button'
export default {
  name: 'Form',
  components: { Button, Dropdown, Checkbox, TextField, FormHeading },
  data () {
    return {
      fields: {
        name: {
          value: '',
          valid: false
        },
        email: {
          value: '',
          valid: false
        },
        phone: {
          value: '',
          valid: false
        },
        country: {
          value: '',
          valid: true
        },
        dropdown: {
          value: '',
          valid: false
        },
        agreement: {
          valid: false
        }
      }
    }
  },
  methods: {
    setDropdown (data) {
      this.fields.dropdown.valid = true
      this.fields.dropdown.value = data.value
    },
    setData (data) {
      this.fields[data.name].value = data.value
      this.fields[data.name].valid = data.valid
    }
  },
  computed: {
    isValidForm () {
      return Object.values(this.fields).every(field => field.valid)
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    a {
      text-decoration: none;
      color: #0880AE;
    }
  }
  .form {
    background: #FFFFFF;
    box-shadow: 0 12px 24px rgba(44, 39, 56, 0.02), 0 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
    margin: auto;
    padding: 30px 40px;

    &__content {
      margin-top: 56px;
      display: grid;
      grid-row-gap: 14px;
      margin-bottom: 30px;
    }

    &__checkbox {
      margin-bottom: 38px;
    }
  }
</style>
