<template>
  <div class="form__heading">
    <h1>Регистрация</h1>
    <p>Уже есть аккаунт? <a href="#">Войти</a></p>
  </div>
</template>

<script>
export default {
  name: 'FormHeading'
}
</script>

<style lang="scss" scoped>
  .form__heading {
    display: grid;
    grid-row-gap: 8px;
  }
  h1 {
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
    color: #2C2738;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #2C2738;

    a {
      color: #0880AE;
    }
  }
</style>
