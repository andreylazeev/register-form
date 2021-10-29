<template>
  <div class="text-field">
    <Label>{{label}}</Label>
    <Input v-model="value" />
    <p class="error">{{message}}</p>
  </div>
</template>

<script>
import Input from '../Controls/TextInput'
import Label from '../content/Label'
export default {
  name: 'TextField',
  components: { Label, Input },
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    validation: {
      required: true,
      type: Array,
      default: () => (['email'])
    }
  },
  data () {
    return {
      value: '',
      isValid: false,
      validationChecking: false,
      message: '',
      validations: {
        email: {
          regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Введите E-mail правильно'
        },
        notEmpty: {
          regexp: /^(?! *$)([0-9]*|[а-яё]*|[a-zA-Z.+ '-])+$/,
          message: 'Поле не должно быть пустым'
        },
        name: {
          regexp: /^([а-яё-]*|[a-z-]*|\x20)*$/i,
          message: 'Допустимы только буквы и символ пробела и дефиса'
        },
        phone: {
          regexp: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
          message: 'Неверный номер телефона'
        }
      }
    }
  },
  watch: {
    value (newValue) {
      if (this.validation.every(validation => this.testRegex(this.validations[validation].regexp, newValue))) {
        this.isValid = true
        this.message = ''
      } else {
        this.isValid = false
        this.message = this.validation.filter(validation => !this.validations[validation].regexp.test(newValue)).map(validation => this.validations[validation].message).join(', ')
      }
      this.$emit('onInput', { valid: this.isValid, value: newValue })
    }
  },
  methods: {
    testRegex (regexp, str) {
      return regexp.test(str)
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-field {
    position: relative;
    display: grid;
    grid-row-gap: 8px;
    margin-bottom: 22px;
    .error {
      position: absolute;
      bottom: -22px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #FF7171
    }
  }
</style>
